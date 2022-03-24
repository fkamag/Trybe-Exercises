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

