let saldo = 1000;

function menu() {
  let opcao = prompt("1 - Ver Saldo\n2 - Depositar\n3 - Sacar\n0 - Sair");

  switch (opcao) {
    case "1":
      alert(`Seu saldo atual é R$ ${saldo.toFixed(2)}`);
      break;
    case "2":
      let deposito = parseFloat(prompt("Digite o valor a depositar:"));
      saldo += deposito;
      alert(`Depósito de R$ ${deposito} realizado.`);
      break;
    case "3":
      let saque = parseFloat(prompt("Digite o valor a sacar:"));
      if (saque > saldo) {
        alert("Saldo insuficiente.");
      } else {
        saldo -= saque;
        alert(`Saque de R$ ${saque} realizado.`);
      }
      break;
    case "0":
      alert("Encerrando...");
      return false;
    default:
      alert("Opção inválida.");
  }

  return true;
}

while (menu());
