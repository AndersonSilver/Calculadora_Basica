const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');
const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '%', '(', ')', '.'];

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {

    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value
        input.value += value;
    });

});

// função para calcular o resultado da operação matemática digitada pelo usuário no input 
document.getElementById('clear').addEventListener('click', function () {
    input.value = '';
    input.focus();
});
// a funçao addEventListener é usada para adicionar um evento ao elemento, no caso ao apertar qualquer tecla do teclado
input.addEventListener('keydown', function (e) {
    e.preventDefault();

    if(allowedKeys.includes(e.key)) {
        input.value += e.key;
        return;
    }
    if(ev.key === "Backspace") {
// slice é usado para remover o ultimo caractere da string
        input.value = input.value.slice(0, -1);
        return;
    }
    if(e.key === "Enter") {
        calculate();
        return;
    }
});

document.getElementById('equal').addEventListener('click', calculate);

function calculate() {

    resultInput.value = "ERROR"
    resultInput.classList.add('error');
    // eval é usado para executar uma string como código javascript ira fazer o calculo da string digitada pelo usuario
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove('error');

}

document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
    const button = ev.currentTarget
    if (button.innerText === "Copy") {
      button.innerText = "Copied!"
      button.classList.add("success")
      navigator.clipboard.writeText(resultInput.value)
    } else {
      button.innerText = "Copy"
      button.classList.remove("success")
    }
  })
  
  document.getElementById("themeSwitcher").addEventListener("click", function () {
    if (main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9")
      root.style.setProperty("--border-color", "#aaa")
      root.style.setProperty("--font-color", "#212529")
      root.style.setProperty("--primary-color", "#26834a")
      main.dataset.theme = "light"
    } else {
      root.style.setProperty("--bg-color", "#212529")
      root.style.setProperty("--border-color", "#666")
      root.style.setProperty("--font-color", "#f1f5f9")
      root.style.setProperty("--primary-color", "#4dff91")
      main.dataset.theme = "dark"
    }
  })
