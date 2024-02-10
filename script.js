const passwordBox = document.getElementById("password");
const lenght = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";

const allCharacters = upperCase + lowerCase + number;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += upperCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * number.length)];

    while(lenght > password.length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordBox.value = password
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}