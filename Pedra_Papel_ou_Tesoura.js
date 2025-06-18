const opcoes = ["pedra", "papel", "tesoura"];
const jogador = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();
const bot = opcoes[Math.floor(Math.random() * 3)];

alert(`Você escolheu: ${jogador}`);
alert(`O computador escolheu: ${bot}`);

if (jogador === bot) {
  alert("Empate!");
} else if (
  (jogador === "pedra" && bot === "tesoura") ||
  (jogador === "papel" && bot === "pedra") ||
  (jogador === "tesoura" && bot === "papel")
) {
  alert("Você venceu!");
} else {
  alert("Você perdeu!");
}
