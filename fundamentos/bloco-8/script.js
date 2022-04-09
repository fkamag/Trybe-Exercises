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

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// const findMusic = (id) => Object.values(musicas).find((value) => (value.id === id ? `Sua música escolhida é ${value.title}` : `Não localizamos esta música.`));
// console.log(findMusic('31031686'))

// const findMusic1 = (id) => musicas.find((musica) => musica.id === id );
// console.log(findMusic1('31031686'));

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false

// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Aprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = (studentGrades) => (
//   Object.values(studentGrades).every((grade) => grade === 'Aprovado')
// );

// console.log(verifyGrades(grades));

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => arr.some((value => value === name));
// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Fábio'));

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];
// const verifyAges = (arr, minimumAge) => Object.values(arr).every((value) => value.age >= minimumAge);
// console.log(verifyAges(people, 18));
// console.log(verifyAges(people, 15));

// const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
// food.sort();
// console.log(food);
// // [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.sort();
// console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
// console.log(points); // [1, 5, 10, 25, 40, 100]

// points.sort((a, b) => b - a);
// console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => b.age - a.age);

// console.log(people);

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Exercício 1:
// const authorBorn = (year) => books.find(value => value.author.birthYear === year);
// console.log(authorBorn(1947));
// console.log(authorBorn(1890));

// Exercício 2:
// function smallerName() {
//   let nameBook = books[0].name;
//   books.forEach((value) => {
//     if (value.name.length < nameBook.length) {
//       nameBook = value.name;
//     }
//   });
//   return nameBook;
// };
// console.log(smallerName());

// Exercício 3
// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'O Senhor dos Anéis',
//   releaseYear: 1991,
// };

// function getNamedBook() {
//   return books.find(value => value.name.length === expectedResult.name.length);
// }
// console.log(getNamedBook());

// Exercício 4
// function booksOrderedByReleaseYearDesc() {
//   return books.sort((a, b) => b.releaseYear - a.releaseYear);
// }
// console.log(booksOrderedByReleaseYearDesc());
// function booksOrderedByReleaseYear() {
//   return books.sort((a, b) => a.releaseYear - b.releaseYear);
// }
// console.log(booksOrderedByReleaseYear());

// Exercício 5
// const expectedResult = false;
// function everyoneWasBornOnSecXX() {
//   return books.every((value) => (
//     value.author.birthYear > 1901 && value.author.birthYear < 2000)
//   )};
// console.log(everyoneWasBornOnSecXX());

// Exercício 6
// function someBookWasReleaseOnThe80s() {
//   return books.some((value) => (
//     value.releaseYear > 1979 && value.releaseYear < 1990
//   ))
// };
// console.log(someBookWasReleaseOnThe80s());

// Exercíco 7
function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());