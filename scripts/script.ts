const email = document.querySelector<HTMLInputElement>("#email")!
const password = document.querySelector<HTMLInputElement>("#password")!
const emailError = document.querySelector<HTMLParagraphElement>("#email__incorrect")!
const passwordError = document.querySelector<HTMLParagraphElement>("#password__incorrect")!
const button = document.querySelector<HTMLButtonElement>("button")!
const form = document.querySelector<HTMLFormElement>("form")!
const sucess = document.querySelector<HTMLElement>(".sucess")!

var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

interface User {
    email : (string | null);
    password : (string | null);
    isLoggedIn : boolean
}

const user : User = {
    email: "",
    password: "",
    isLoggedIn: false
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(email.value === "" || !pattern.test(email.value) || password.value === "" || password.value.split("").length < 8 || password.value.split("").length >= 20) {
        if(email.value === "") {
            emailError.textContent = "campo vazio!"
            email.focus()
        } else if(!pattern.test(email.value)) {
            email.focus()
            emailError.textContent = "email inválido!"
        } else {
            emailError.textContent = ""
        }

        if(password.value === "") {
            passwordError.textContent = "campo vazio!"
            password.focus()
        } else if(password.value.split("").length < 8 || password.value.split("").length >= 20) {
            password.focus()
            passwordError.textContent = "digite uma senha de no mínimo 8 caracteres e no máximo 20!"
        } else {
            passwordError.textContent = "" 
        }
        return
    }  else {
        emailError.textContent = ""
        passwordError.textContent = "" 
    }

    user.isLoggedIn = true
    user.email = email.value
    user.password = password.value

    form.style.display = "none"
    sucess.style.display = "flex"
})
