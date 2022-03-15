let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : { golden: 2, silver: 3 },
    bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018]
}
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");
console.log ("Ela foi eleita a melhor jogadora de " + player.bestInTheWorld[2]);
console.log (player.medals.golden + " medalhas de ouro e " + player.medals.silver + " de prata foram suas maiores conquistas.");

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for (let index in names) {
      console.log("Olá " + names[index]);
  }

  let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let index in carro) {
      console.log (index, carro[index]);
  }

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
  };
  console.log ("Bem vinda, " + info.personagem);

  info.recorrente = "Sim";

  for (let index in info) {
      console.log (index, info[index]);
  }
  console.log (info);

  for (let index in info) {
    console.log (index);
  }

  for (let index in info) {
    console.log (info[index])
  }

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  

  for (let properties in info) {
    if (
      properties === 'recorrente' &&
      info[properties] === 'Sim' &&
      info2[properties] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
  }
  