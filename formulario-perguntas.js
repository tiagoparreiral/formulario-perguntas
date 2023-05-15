desafio dia 2

let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let gostaDeLinguagem = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (gostaDeLinguagem === "1") {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (gostaDeLinguagem === "2") {
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
  alert("Resposta inválida. Por favor, responda com o número 1 para SIM ou 2 para NÃO.");
}
