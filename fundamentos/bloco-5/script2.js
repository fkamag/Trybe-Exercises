function changeTitle() {
    document.getElementById('page-title').innerText = "A vida é Bela";
    document.getElementById('page-title').className = "color2";
}
function changeParagraph(){
    document.getElementById('paragraph').innerText = "O filme se passa na Itália Fascista, a partir de 1939 até o final da Segunda Guerra Mundial em 1945, narrando a trajetória do ítalo-judeu Guido, pai do menino Giosué. Guido tenta convencer o filho de que o encarceramento dos dois (além de Dora, sua esposa e mãe de Giosué) em um campo de concentração alemão é na verdade um jogo, em que os presos competem para marcar pontos. Na competição, o primeiro a atingir mil pontos iria ganhar um tanque de guerra."
    paragraph.style.color = "green";
}
function changeSubtitle(){
    document.getElementById('subtitle').innerText = "Protagonista"
}
function changeParagraph2(){
    document.getElementById('second-paragraph').innerText = "Roberto Benigni como Guido Orefice"
}

const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";