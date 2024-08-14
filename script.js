const input = document.querySelector("input");
const button = document.querySelector("button");
const copy = document.querySelector(".copy")
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789"
const symbol = "!@#$%^&*()-_[]/<>";


const allChar = uppercase + lowercase + numbers + symbol

button.addEventListener("click", () => {
    let password = "";

    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }

    input.value = password
})

copy.addEventListener("click", () => {
    input.select();
    navigator.clipboard.writeText(input.value);
})