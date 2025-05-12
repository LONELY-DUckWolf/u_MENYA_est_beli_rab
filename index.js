const form = document.querySelector("#form");
const del = document.querySelector("#del");

function addToLocalStorage(userData, key) {
  localStorage.setItem(key, JSON.stringify(userData));
}

function removeAllFromLocalStorage() {
  localStorage.clear();
  PNotify.success({
    text: "Del",
    delay: 2000,
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("mail").value;
  const phone = document.getElementById("phone").value;

  if (!email.endsWith("@gmail.com")) {
    PNotify.error({
      text: "email only @gmail.com format",
      delay: 3000,
    });
    return;
  }

  if (!phone.startsWith("+")) {
    PNotify.error({
      text: "number only with +",
      delay: 3000,
    });
    return;
  }

  const userForm = {
    name: document.getElementById("name").value,
    lastname: document.getElementById("lastname").value,
    phone: phone,
    mail: email,
  };

  addToLocalStorage(userForm, "userData");

  PNotify.success({
    text: "Save",
    delay: 2000,
  });
});

del.addEventListener("click", (event) => {
  event.preventDefault();
  removeAllFromLocalStorage();
});