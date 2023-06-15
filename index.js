const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]
const passwordLength = 15

const passwordBtnEl = document.getElementById('password-btn')
const inputEl1 = document.getElementById('pw1')
const inputEl2 = document.getElementById('pw2')

passwordBtnEl.addEventListener('click', () => {
    generateRando(inputEl1)
    generateRando(inputEl2)
})

inputEl1.addEventListener('click', () => {
    copy(inputEl1)
})

inputEl2.addEventListener('click', () => {
    copy(inputEl2)
})

function copy(inputField) {
    // Select the text field
    inputField.select();
    inputField.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(inputField.value); // clipboard copy only works on https?
    alert("Copied the text: " + inputField.value);
}

function generateRando(inputField) {
    let password = ''
    for (let i = 0; i < passwordLength; i++) {
        password += characters[Math.ceil(Math.random() * characters.length)]
    }
    inputField.value = password
}