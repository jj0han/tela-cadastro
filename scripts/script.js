var email = document.querySelector("#email");
var password = document.querySelector("#password");
var emailError = document.querySelector("#email__incorrect");
var passwordError = document.querySelector("#password__incorrect");
var button = document.querySelector("button");
var form = document.querySelector("form");
var sucess = document.querySelector(".sucess");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var user = {
    email: "",
    password: "",
    isLoggedIn: false
};
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (email.value === "" || !pattern.test(email.value) || password.value === "" || password.value.split("").length < 8 || password.value.split("").length >= 20) {
        if (email.value === "") {
            emailError.textContent = "campo vazio!";
            email.focus();
        }
        else if (!pattern.test(email.value)) {
            email.focus();
            emailError.textContent = "email inválido!";
        }
        else {
            emailError.textContent = "";
        }
        if (password.value === "") {
            passwordError.textContent = "campo vazio!";
            password.focus();
        }
        else if (password.value.split("").length < 8 || password.value.split("").length >= 20) {
            password.focus();
            passwordError.textContent = "digite uma senha de no mínimo 8 caracteres e no máximo 20!";
        }
        else {
            passwordError.textContent = "";
        }
        return;
    }
    else {
        emailError.textContent = "";
        passwordError.textContent = "";
    }
    user.isLoggedIn = true;
    user.email = email.value;
    user.password = password.value;
    form.style.display = "none";
    sucess.style.display = "flex";
});
