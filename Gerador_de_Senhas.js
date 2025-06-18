function gerarSenha(tamanho) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    senha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return senha;
}

let tamanho = parseInt(prompt("Quantos caracteres a senha deve ter?"));
alert("Senha gerada: " + gerarSenha(tamanho));
