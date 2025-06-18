let tarefas = [];

function mostrarTarefas() {
  console.log("📋 Tarefas:");
  tarefas.forEach((tarefa, i) => {
    console.log(`${i + 1}. ${tarefa}`);
  });
}

function adicionarTarefa(tarefa) {
  tarefas.push(tarefa);
}

function removerTarefa(index) {
  tarefas.splice(index - 1, 1);
}

let opcao;
do {
  opcao = prompt("Digite: 1-Adicionar | 2-Remover | 3-Ver tarefas | 0-Sair");

  if (opcao === "1") {
    const nova = prompt("Qual tarefa deseja adicionar?");
    adicionarTarefa(nova);
  } else if (opcao === "2") {
    mostrarTarefas();
    const qual = parseInt(prompt("Digite o número da tarefa a remover:"));
    removerTarefa(qual);
  } else if (opcao === "3") {
    mostrarTarefas();
  }

} while (opcao !== "0");

console.log("Programa encerrado.");
