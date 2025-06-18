function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, ''); // remove tudo que não for número

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let digito1 = 11 - (soma % 11);
  if (digito1 > 9) digito1 = 0;

  if (digito1 !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }

  let digito2 = 11 - (soma % 11);
  if (digito2 > 9) digito2 = 0;

  return digito2 === parseInt(cpf.charAt(10));
}

let cpf = prompt("Digite um CPF:");
alert(validarCPF(cpf) ? "CPF Válido" : "CPF Inválido");
