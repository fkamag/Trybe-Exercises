// function sum (number1, number2) {
//     return number1 + number2;
//   }
  
//   const sumVariable = sum;
  
//   console.log(sumVariable);
//   //  [Function: sum]

//   const sayHello = () => {
//     return ('hello trybers');
//   }
  
//   const printGreeting = (callback) => {
//       console.log(callback());
//   }
  
//   printGreeting(sayHello);

//   const sumFixAmount = (amount) => {
//     return (number) => amount - number;
//   }
  
//   const initialSum = sumFixAmount(5)
//   console.log(initialSum(15));

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(5, console.log);

//   const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(7, (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'é par');
//     } else {
//         console.log(number, 'é impar')
//     }
//   });

// const acordar = () => 'Acordando';
// const cafe = () => 'Bora, tomar café';
// const dormir = () => 'Partiu dormir';

// const doingThings = (func) => func();
// console.log(doingThings(acordar));
// console.log(doingThings(cafe));
// console.log(doingThings(dormir));

// const obj = () => { nomeCompleto , email }
// const newEmployees = (fullname) => {
//     const employees = {
//       id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

// const employeeGenerator = (fullName) => {
//     const email = fullName.toLowerCase().replace(' ','_');
//     return { fullName, email: `${email}@trybe.com` };
//   };
  
//   const newEmployees = (callback) => {
//     const employees = {
//       id1: callback('Pedro Guerra'),
//       id2: callback('Luiza Drumond'),
//       id3: callback('Carla Paiva'),
//     };
//     return employees;
//   };
  
//   console.table(newEmployees(employeeGenerator));

//   const sorteio = (result) => Math.floor((Math.random()*5)+1);

//   const numeroSorteado = (sorteado) => sorteio();
//   const numeroApostado = (apostado) => sorteio();
//   console.log(numeroApostado());
//   console.log(numeroSorteado());
//   return (numeroApostado == numeroSorteado) ? console.log('Você ganhou') : console.log('Tente novamente')

// const numberChecker = (myNumber, number) => myNumber === number;

// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);

//   return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };

// console.log(lotteryResult(2, numberChecker));

// function greeting(name) {
//     console.log('Olá ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = 'Fábio'
//     callback(name);
//   }
  
//   processUserInput(greeting);
  
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => names[index] = name.toUpperCase();

// names.forEach(convertToUpperCase);
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// emailListInData.forEach((value) => showEmailList(value));


// Adicione seu código aqui

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// console.log(isEven); // 30

// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 30

// const numbers = [19, 21, 50, 32, 3, 45, 22, 15];

// const findDivisibleBy3And5 = () => numbers.find((value) => value % 3 === 0 && value % 5 === 0 );

// console.log(findDivisibleBy3And5());

// const names = ['João','Maria', 'Irene', 'Fernando'];

// const findNameWithFiveLetters = () => names.find((value) => value === "Fernando");

// console.log(findNameWithFiveLetters());

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

// const findMusic= (id) => musicas.find((value) => (value.id === id) ? `Sua música escolhida é ${value.title}` : `Não localizamos esta música.`);
// console.log(findMusic('31031687'))

const findMusic = (id) => musicas.find((musica) => musica.id === id );
console.log(findMusic('31031686'));