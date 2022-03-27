console.log(document.getElementById('elementoOndeVoceEsta'));
let pai = elementoOndeVoceEsta.parentElement;
elementoOndeVoceEsta.innerText = "Elemento Onde Vc Está";
pai.style.color = 'red';
let firstSon = document.getElementById('primeiroFilho');
firstSon.innerText = 'Primeiro Filho';
console.log(pai.firstElementChild);
console.log(elementoOndeVoceEsta.previousElementSibling);

let pai2 = document.getElementById('pai');
let irmaoDoElementoOndeVoceEsta = document.createElement('section');
irmaoDoElementoOndeVoceEsta.id = "irmaoDoElementoOndeVoceEsta";
pai2.appendChild(irmaoDoElementoOndeVoceEsta);
irmaoDoElementoOndeVoceEsta.innerText = 'irmão do Elemento Onde vc Está';

let pai3 = document.getElementById('elementoOndeVoceEsta');
let filhoDoElementoOndeVoceEsta = document.createElement('section');
filhoDoElementoOndeVoceEsta.id = "filhoDoElementoOndeVoceEsta";
filhoDoElementoOndeVoceEsta.innerText = "filho Do Elemento Onde Voce Esta";
pai3.appendChild(filhoDoElementoOndeVoceEsta);

// let list =  document.getElementById('pai');
// console.log (list);
// let sonList = pai.childNodes
// console.log (sonList);
// for (let i=0;i<sonList.length;i++) {
//     let element = sonList[i];
//     if (element.id !== 'elementoOndeVoceEsta' || element.id !== 'filhoDoElementoOndeVoceEsta') {
//         element.remove();
//         console.log (sonList);
//     }
// }
const pai = document.getElementById('pai');

    for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
      const currentChildren = pai.childNodes[index];
      if (currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove();
      }
    }

    const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();