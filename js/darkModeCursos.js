function redirectPrincipal(){
    window.location.href = "index.html";
}
function redirectCursos(){
    window.location.href = "cursos.html";
}
function redirectSobre(){
    window.location.href = "sobre.html";
}
function redirectContato(){
    window.location.href = "contatos.html";
}
function easterEgg(){
    window.location.href = "credits.html";
}
function loop(){
    alert("Você já está nessa aba");
}

function facebook(){
    window.open('https://www.facebook.com/grupoeducacenter', '_blank');
}
function insta(){
    window.open('https://www.instagram.com/grupoeducacenter/', '_blank');
}
function gitPablo(){
    window.open('https://github.com/PabloLopes19', '_blank');
}
function gitCarlos(){
    window.open('https://github.com/MiyamuraH', '_blank');
}
function instaPablo(){
    window.open('https://www.instagram.com/pablolopes19/', '_blank');
}
function instaCarlos(){
    window.open('https://www.instagram.com/carlos_eduardo_balland/', '_blank');
}
function discord(){
    window.open('https://discordapp.com/', '_blank');
}

// Modo noturno

var button = document.querySelector('#darkModeBtn');
var buttonMobile = document.querySelector('#darkModeBtnMobile');
var title = document.querySelector('.titleProgramacao');

darkMode = () => {
    document.querySelector('body').style.background = "#444";
    title.style.color = "#fff";
}
lightMode = () => {
    document.querySelector('body').style.background = "#ecf0f1";
    title.style.color = "#111";
}

var flag = 1;

button.onclick = () => {
    if(flag == 1){
        darkMode();
        flag = 0;
    }else{
        lightMode();
        flag = 1;
    }
}
buttonMobile.onclick = () => {
    if(flag == 1){
        darkMode();
        flag = 0;
    }else{
        lightMode();
        flag = 1;
    }
}
mudaHorario = () => {
    var dia = new Date();
    var horas = dia.getHours();    
    // var horas = 21;    

    if(horas > 6 && horas < 12){
        lightMode();
    }else if(horas >= 12 && horas < 20){
        lightMode();
    }else if(horas >= 20 && horas < 24){
        darkMode();
    }else if(horas >= 0 && horas <= 5){
        darkMode();
    }
}

setTimeout(mudaHorario, 1000);
console.log(horas);

mudaHorario();