let passwordLength = 16;
const inputEl = document.querySelector("#password");

function generatePassword() {
  const chars =
    "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]";

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randoNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randoNumber, randoNumber + 1);
  }

  inputEl.value = password;
}

function copy() {
  navigator.clipboard.writeText(inputEl.value);
}

const passwordLengthEl = document.querySelector("#password-length");
passwordLengthEl.addEventListener("input", function () {
  passwordLength = passwordLengthEl.value;
  generatePassword();
});

const copyButtonEl1 = document.querySelector("#copy-1");
copyButtonEl1.addEventListener("click", copy);

const copyButtonEl2 = document.querySelector("#copy-2");
copyButtonEl2.addEventListener("click", copy);

generatePassword();
