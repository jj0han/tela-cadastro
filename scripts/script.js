var email = document.querySelector("#email");
var password = document.querySelector("#password");
var emailError = document.querySelector("#email__incorrect");
var passwordError = document.querySelector("#password__incorrect");
var button = document.querySelector("button");
var user = {
    email: "",
    password: "",
    isLoggedIn: false
};
button.addEventListener("click", function (e) {
    e.preventDefault();
    if (email.value === "" || email.value.indexOf("@") <= -1 || password.value === "") {
        if (email.value === "" || email.value.indexOf("@") <= -1) {
            if (email.value === "") {
                emailError.textContent = "campo vazio!";
            }
            if (email.value.indexOf("@") <= -1) {
                emailError.textContent = "email inválido!";
            }
        }
        else {
            emailError.textContent = "";
        }
        if (password.value === "") {
            passwordError.textContent = "campo vazio!";
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
});
if (user.isLoggedIn) {
    console.log("logado");
}
