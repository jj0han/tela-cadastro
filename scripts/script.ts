var email = document.querySelector("#email") as HTMLInputElement
var password = document.querySelector("#password") as HTMLInputElement
var emailError = document.querySelector("#email__incorrect") as HTMLParagraphElement
var passwordError = document.querySelector("#password__incorrect") as HTMLParagraphElement
var button = document.querySelector("button") as HTMLButtonElement
var form = document.querySelector("form") as HTMLFormElement
var sucess = document.querySelector(".sucess") as HTMLElement

interface User {
    email : (string | null);
    password : (string | null);
    isLoggedIn : boolean
}

var user : User = {
    email: "",
    password: "",
    isLoggedIn: false
}

button.addEventListener("click", (e) => {
    e.preventDefault()
    if(email.value === "" || email.value.indexOf("@") <= -1 || password.value === "") {
        if(email.value === "" || email.value.indexOf("@") <= -1) {
            if(email.value === "") {
                emailError.textContent = "campo vazio!"
            }

            if(email.value.indexOf("@") <= -1) {
                emailError.textContent = "email inválido!"

            }
        } else {
            emailError.textContent = ""
        }

        if(password.value === "") {
            passwordError.textContent = "campo vazio!"
        } else {
            passwordError.textContent = ""    
        }
        return
        } else {
            emailError.textContent = ""
            passwordError.textContent = "" 
        }

    user.isLoggedIn = true
    user.email = email.value
    user.password = password.value

    form.style.display = "none"
    sucess.style.display = "flex"
})
