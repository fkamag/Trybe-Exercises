function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let listOfDays = document.getElementById('days');
    for (let i = 0; i < dezDaysList.length; i++) {
        let itemDay = dezDaysList[i];
        let elementDay = document.createElement('li');
        elementDay.innerText = itemDay;
        elementDay.className = 'day';
        listOfDays.appendChild(elementDay);
        if (itemDay === 24 || itemDay === 25 || itemDay === 31) {
            elementDay.classList.add('holiday');
        }
        if (itemDay === 4 || itemDay === 11 || itemDay === 18 || itemDay === 25) {
            elementDay.classList.add('friday');
        }

    }
}

createDaysOfTheMonth();

function createButton(stringButton) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let elementButton = document.createElement('button');
    elementButton.id = 'btn-holiday';
    elementButton.innerHTML = stringButton
    buttonsContainer.appendChild(elementButton);

}

createButton('Feriados');
// createButton('Domingo'); 
// testando a funcionalidade da function para criar novo botão
// só precisa alterar a forma de nomear o botão para não ficar igual

function clickButton() {
    let elementButton = document.getElementById('btn-holiday');
    elementButton.addEventListener('click', changeColor);
}
let contador=0
let dayHoliday = document.getElementsByClassName('holiday');

function changeColor() {
    if (contador===0) {
        contador = 1
        for (let i = 0; i < dayHoliday.length; i++) {
            let elementDay = dayHoliday[i];
            elementDay.style.backgroundColor = 'red';
        }
    }
    else {
        contador=0
        for (let i = 0; i < dayHoliday.length; i++) {
            let elementDay = dayHoliday[i];
            elementDay.style.backgroundColor = '';
        }
    }
}

clickButton();

function createButtonFriday(stringButton) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let elementButton = document.createElement('button');
    elementButton.id = 'btn-friday';
    elementButton.innerHTML = stringButton
    buttonsContainer.appendChild(elementButton);

}

createButtonFriday('Sexta-Feira');4

function clickButtonFriday() {
    let elementButtonFriday = document.getElementById('btn-friday');
    elementButtonFriday.addEventListener('click', changeFriday);
}

let contador2=0;
let dayFriday = [4,11,18,25];
let fridays = document.getElementsByClassName('friday');

function changeFriday() {
    if (contador2===0) {
        contador2 = 1
        for (let i = 0; i < fridays.length; i++) {
            let elementFriday = fridays[i];
            elementFriday.innerHTML = "sextou!!!";
        }
    }
    else {
        contador2=0
        for (let i = 0; i < fridays.length; i++) {
            let elementFriday = fridays[i];
            elementFriday.innerHTML=dayFriday[i];
        }
    }
}

clickButtonFriday();

function mouseOver() {
    let elementOverDay = document.querySelectorAll('.day');
    for(let i=0;i<elementOverDay.length;i++) {
        elementOverDay[i].addEventListener('mouseover',function(event){
            event.target.style.zoom = '1.5';
        });
    }
}
function mouseOut() {
    let elementOverDay = document.querySelectorAll('.day');
    for(let i=0;i<elementOverDay.length;i++) {
        elementOverDay[i].addEventListener('mouseout',function(event){
            event.target.style.zoom = 'unset';
        });
    }
}

mouseOver();
mouseOut();
