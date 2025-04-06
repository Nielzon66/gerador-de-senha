const passInput = document.querySelector("#inputPassword");
const lenInput = document.querySelector("#inputLengthId");
const infoLength = document.querySelector('label[for="inputLengthId"]');
const btnGerar = document.querySelector("#btnGerar");

const chkLower = document.querySelector("#chkLowerId");
const chkUpper = document.querySelector("#chkUpperId");
const chkNumber = document.querySelector("#chkNumberId");
const chkSymbols = document.querySelector("#chkSymbolsId");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
const symbols = ["!", "@", "#", "$", "%", "&"];

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const Lowercasecaracters = caracters.map((item) => String.fromCharCode(item));
const Uppercasecaracters = Lowercasecaracters.map((item) => item.toUpperCase());

infoLength.innerHTML = lenInput.value;

lenInput.addEventListener("change", () => {
  infoLength.innerHTML = lenInput.value;
});

btnGerar.addEventListener("click", () => {
    generatePassword(
    chkNumber.checked,
    chkSymbols.checked,
    chkLower.checked,
    chkUpper.checked,
    lenInput.value
  );
});

const generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    length,
) => {
    const newArray = [
        (hasNumbers ? numbers : []),
        (hasSymbols ? symbols : []),
        (hasLowercase ? Lowercasecaracters : []),
        (hasUppercase ? Uppercasecaracters : []),
    ].flat();

    if (newArray.length === 0) return;

    let password = "";
    length = Number(length);

    for (let i = 0; i <length; i++) {
        const randomIndex = Math.floor(Math.random() * newArray.length);
        password += newArray[randomIndex];
    }

    passInput.value = password;

};
