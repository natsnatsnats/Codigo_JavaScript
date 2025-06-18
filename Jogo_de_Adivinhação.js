const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativa = parseInt(prompt("Tente adivinhar o número de 1 a 10:"));

if (tentativa === numeroSecreto) {
  alert("Parabéns! Você acertou.");
} else if (tentativa > numeroSecreto) {
  alert("Errou! O número é menor.");
} else {
  alert("Errou! O número é maior.");
}

console.log(`Número secreto era: ${numeroSecreto}`);
