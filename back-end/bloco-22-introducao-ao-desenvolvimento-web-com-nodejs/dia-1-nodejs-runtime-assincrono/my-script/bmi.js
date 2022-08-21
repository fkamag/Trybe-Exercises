const readline = require('readline-sync');

const weight = readline.question('Digite o seu peso em Kg (Ex. 80): ');
const height = readline.questionFloat('Digite a sua altura em metros (Ex. 1.80): ');
const imc = weight / height ** 2;

console.log(`Seu IMC é de: ${imc}`);

if (imc < 18.5) { console.log(`Situação do seu IMC: Abaixo do peso (magreza)`) };
if (imc >= 18.5 && imc < 25) { console.log(`Situação do seu IMC: Peso Normal`)};
if (imc >= 25 && imc < 30) { console.log(`Situação do seu IMC: Acima do peso (sobrepeso)`)};
if (imc >= 30 && imc < 35) { console.log(`Situação do seu IMC: Obesidade grau I`)};
if (imc >= 35 && imc < 40) { console.log(`Situação do seu IMC: Obesidade grau II`)};
if (imc >= 40) { console.log(`Situação do seu IMC: Obesidade graus III e IV`)};
