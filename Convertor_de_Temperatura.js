const valor = parseFloat(prompt("Digite a temperatura:"));
const unidade = prompt("Digite a unidade: C para Celsius ou F para Fahrenheit").toUpperCase();

function cParaF(c) {
  return (c * 9/5) + 32;
}

function fParaC(f) {
  return (f - 32) * 5/9;
}

if (unidade === "C") {
  alert(`${valor}°C = ${cParaF(valor).toFixed(2)}°F`);
} else if (unidade === "F") {
  alert(`${valor}°F = ${fParaC(valor).toFixed(2)}°C`);
} else {
  alert("Unidade inválida.");
}
