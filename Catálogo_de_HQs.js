const hqs = ["Superman", "Batman", "Flash", "Thor"];
let acao = prompt("Digite: 1 para ver a lista, 2 para adicionar, 3 para remover:");

if (acao === "1") {
  alert(hqs.sort().join(", "));
} else if (acao === "2") {
  const novaHq = prompt("Qual HQ deseja adicionar?");
  hqs.push(novaHq);
  alert(`HQ adicionada! Nova lista: ${hqs.join(", ")}`);
} else if (acao === "3") {
  const hqRemover = prompt("Qual HQ deseja remover?");
  const index = hqs.indexOf(hqRemover);
  if (index !== -1) {
    hqs.splice(index, 1);
    alert(`HQ removida! Nova lista: ${hqs.join(", ")}`);
  } else {
    alert("HQ não encontrada.");
  }
} else {
  alert("Opção inválida.");
}
