const num1 = parseFloat(prompt("Digite o primeiro número:"));
const operador = prompt("Escolha um operador: +, -, *, /");
const num2 = parseFloat(prompt("Digite o segundo número:"));

function somar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { return b !== 0 ? a / b : "Erro: divisão por zero"; }

switch (operador) {
  case "+":
    alert(`Resultado: ${somar(num1, num2)}`);
    break;
  case "-":
    alert(`Resultado: ${subtrair(num1, num2)}`);
    break;
  case "*":
    alert(`Resultado: ${multiplicar(num1, num2)}`);
    break;
  case "/":
    alert(`Resultado: ${dividir(num1, num2)}`);
    break;
  default:
    alert("Operador inválido.");
}
