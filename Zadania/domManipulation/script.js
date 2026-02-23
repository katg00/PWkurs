// 1. Dodanie nowego elementu przy ładowaniu strony

const btn = document.createElement("button");
btn.innerText = "Zmieniam kolor 2 paragrafu";
document.body.appendChild(btn);

// 2. Zmiana koloru paragrafu

const firstParagraph = document.querySelector('p');
firstParagraph.style.color = "red";
// 3. Dla chętnych: pobierz element paragrafu nr 2.
const secondParagraph = document.getElementById("paragraph-for-button");
btn.addEventListener("click", function() {
  secondParagraph.style.backgroundColor = "#ffae00";
});
// Pobierz element przycisku i uruchom na nim metodę addEventListener na zdarzenie ‚click’.
// W metodzie addEventListener zmień kolor przycisku.

document.getElementById("changeColorBtn").addEventListener("click", function() {
  this.style.backgroundColor = "#00FFFF";
});

