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
// Seleciona o botão de copiar
const btnCopiar = document.querySelector("#copiar-btn");

// Adiciona o evento de clique para copiar a senha
btnCopiar.addEventListener("click", async () => {
  const senha = passInput.value; // Pega a senha gerada no input

  if (!senha) return; // Se não tiver senha, não faz nada

  try {
    // Copia a senha para a área de transferência
    await navigator.clipboard.writeText(senha);

    // Feedback visual para o usuário
    btnCopiar.textContent = "Copiado!";

    // Após 2 segundos, volta ao texto original
    setTimeout(() => {
      btnCopiar.textContent = "Copiar senha";
    }, 2000);
  } catch (err) {
    console.error("Erro ao copiar senha:", err);
    btnCopiar.textContent = "Erro ao copiar";
  }
});
