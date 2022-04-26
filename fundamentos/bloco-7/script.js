// // const myName = 'Isabella';
// // console.log('Hello' + ' ' + myName + '!');

// const myName = 'Isabella';
// console.log(`Welcome ${myName}!`);

// // Com o template literals
// console.log(
// `Primeira linha;

// Segunda linha;

// Terceira linha;`
// );

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 1, 100, 7, 2];

// const sortOddsAndEvens = () => {
//   const sortedArray = oddsAndEvens.sort((a, b) => a - b);
//   console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);
// }

// sortOddsAndEvens();

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));

// const longestWord = phrase => {
//   let arrayPhrase = phrase.split(" ");
//   let longWord = arrayPhrase[0];
//   for (let i=1; i<arrayPhrase.length; i++) {
//     if (longWord.length < arrayPhrase[i].length) {
//       longWord = arrayPhrase[i]
//     }
//   }
//   console.log(longWord);
// }

// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');

// const longestWord2 = phrase => phrase.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord2("Antonio foi no banheiro e não sabemos o que aconteceu"));

// const counter = () => elementCount.innerText = number++ 
// let elementButton = document.getElementById('button');
// let elementCount = document.getElementById('clickCount');
// let number = 1;
// elementButton.addEventListener('click', counter);

// const changeX = (text, newWord) => {
//   let arrayText = text.split(' ');
//   let newText = "";
//   for (let i=0; i < arrayText.length; i++) {
//     (i>0) ? newText += " " : "";
//     if (arrayText[i] === 'x') {
//       newText += newWord;
//     } else {
//         newText += arrayText[i];
//     }
//   }
//   console.log(newText);
// }
// changeX('Tryber x aqui', 'Bebeto');


const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
`Tryber ${paramInner} aqui!
Tudo bem?`
    );

    let result = `${fun1(paramOne)}

Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

- ${skill}`);

    result = `${result}

#goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));