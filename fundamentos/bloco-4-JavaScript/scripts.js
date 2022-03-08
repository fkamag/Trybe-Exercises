let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

let salary = 3500;

salary++;

console.log(salary);

console.log(typeof patientId);
console.log(typeof patientAge);

const base = 5;
let height = 8;
const area = base * height;

console.log(area);

let perimeter = 2 * base + 2 * height;

console.log(perimeter);

const nota = 55;

if (nota >= 80) {
    console.log (nota);
    console.log ("Você foi aprovado");
} 
else if ( nota >= 60) {
    console.log (nota);
    console.log ("Você está na lista de espera");
}
else {
    console.log(nota);
    console.log ("Você foi reprovado");
};


const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
    console.log ((bebida) + " e " + (comida))
    console.log('Muito obrigado pela refeição :)');
} else {
    console.log ((bebida) + " e " + (comida))
    console.log('Acho que houve um engano com meu pedido');
};


const conditionOne = true;
  const conditionTwo = false;

  console.log(conditionOne && conditionTwo);

  const cenouras = true;
  const leite = true;
  const arroz = true;
  const feijao = true;
  
  const listaDeCompras = cenouras && leite && arroz && feijao;

  console.log (listaDeCompras);

  console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

let currentHour = 13;
let message = "";
console.log(currentHour);

if (currentHour >= 22) {
   message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
   message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour < 18) {
   message = "Vamos fazer um bolo pro café da tarde?";
}
else {
    message = "Hora do Almoço";
};


console.log(message);



let trybe = 15;

if (trybe >= 14 && trybe < 14.40) {
    console.log ("Esquenta");
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("Aula ao Vivo");
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento");
}
else {
    console.log("Momentos Assíncronos");
}