const usuarios = ["admin", "joao", "maria"];
const senhas = ["1234", "abcd", "4321"];

let nome = prompt("Digite seu nome de usuário:");
let senha = prompt("Digite sua senha:");

let index = usuarios.indexOf(nome);

if (index !== -1 && senhas[index] === senha) {
  alert(`Bem-vindo, ${nome}!`);
} else {
  alert("Usuário ou senha incorretos.");
}
