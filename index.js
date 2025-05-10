const form = document.querySelector("#form");
const del = document.querySelector("#del");
function addToLocalStorage(userData, key) {
    localStorage.setItem(key, JSON.stringify(userData));
}
function removeAllFromLocalStorage() {
    localStorage.clear();
    alert(
    "clear."

    );
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("mail").value;
    const phone = document.getElementById("phone").value;
    if (!email.endsWith("@gmail.com")) {
        alert(
            "only @gmail.com"

        );
        return;
    }
    if (!phone.startsWith("+")) {
        alert(
 "only with +",

        );
        return;
    }
    const userForm = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
        phone: phone,
        mail: email,
    };
    addToLocalStorage(userForm, "userData");
    alert(
     "save"

    );
});
del.addEventListener("click", (event) => {
    event.preventDefault();
    removeAllFromLocalStorage();
});