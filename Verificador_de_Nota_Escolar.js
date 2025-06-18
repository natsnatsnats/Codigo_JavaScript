let nota = parseFloat(prompt("Digite sua nota (0 a 10):"));

if (nota >= 9) {
  alert("Aprovado com excelência!");
} else if (nota >= 6) {
  alert("Aprovado!");
} else if (nota >= 4) {
  alert("Recuperação.");
} else {
  alert("Reprovado.");
}
