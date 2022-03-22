document.getElementById('header-container').style.background = "green";
let list = document.getElementsByTagName('h3');
console.log (list);
for (let i=0;i<2;i++) {
    console.log (list[i].style.background);
    list[i].style.background = "red";
}
for (let i=2;i<4;i++) {
    console.log (list[i].style.background);
    list[i].style.background = "black";
}
document.getElementsByClassName('emergency-tasks')[0].style.background = "yellow";
document.getElementsByClassName('no-emergency-tasks')[0].style.background="blue";
document.getElementById('footer-container').style.background="green";

