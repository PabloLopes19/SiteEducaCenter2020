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

// Algoritmo para implementar o modo noturno

var btnDarkMode = document.querySelector('#darkModeBtn'); // Pega o componente de ícone
var btnDarkModeMobile = document.querySelector('#darkModeBtnMobile');
var btnTopo = document.querySelector('#btnTopo');

btnTopo.addEventListener('click', () => {
    window.scroll(0, 0);
});

DarkMode = () => { // Função para mudar o tema do sistema
    document.querySelector('body').style.background = "#444"; // Muda a cor do background
    document.querySelector('.titleEC').style.color = "#fff"; // Muda a cor do título
    document.querySelector('.nossosCursos h1').style.color = "#fff"; // Muda a cor do segundo título
    document.querySelector('#btnDireita').style.border = "3px solid #fff";
    document.querySelector('#btnEsquerda').style.border = "3px solid #fff";
    document.querySelector('#btnDireita').style.background = "#fff";
    document.querySelector('#btnEsquerda').style.background = "#fff";
    document.querySelector('#btnDireita').style.color = "#111";
    document.querySelector('#btnEsquerda').style.color = "#111";
}
LightMode = () => { // Função para mudar o tema para o padrão
    document.querySelector('body').style.background = "#ecf0f1"; // Muda a cor do background
    document.querySelector('.titleEC').style.color = "#111"; // Muda a cor do Título
    document.querySelector('.nossosCursos h1').style.color = "#111"; // Muda a cor do segundo título
    document.querySelector('#btnDireita').style.border = "3px solid #333";
    document.querySelector('#btnEsquerda').style.border = "3px solid #333";
    document.querySelector('#btnDireita').style.background = "#333";
    document.querySelector('#btnEsquerda').style.background = "#333";
    document.querySelector('#btnDireita').style.color = "#fff";
    document.querySelector('#btnEsquerda').style.color = "#fff";
}

// Algoritmo para mudar o tema 

var flag = 1; // Variável debugadora

btnDarkMode.onclick = () => { 
    if (flag == 1){
        DarkMode();
        flag = 0;
    }else{
        LightMode();
        flag = 1;
    }
}

// Botão da versão mobile

btnDarkModeMobile.onclick = () => {
    if (flag == 1){
        DarkMode();
        flag = 0;
    }else{
        LightMode();
        flag = 1;
    }
} 

var contador = document.querySelector('#contador');

// Contador de visitantes

// if(typeof(Storage) != "undefined"){
//     if(localStorage.visitas){
//         localStorage.visitas = Number(localStorage.visitas) + 1;
//     }else{
//         localStorage.visitas = 1;
//     }
//     if(localStorage.visitas == 1){
//         contador.innerHTML = localStorage.visitas + " visitante";
//     }else{
//         contador.innerHTML = localStorage.visitas + " visitantes";
//     }
// }else{
//     document.write("Sem suporte à LocalStorage!");
// }

mudaHorario = () => {
    var dia = new Date();
    var horas = dia.getHours();    

    if(horas > 6 && horas < 12){
        LightMode();
    }else if(horas >= 12 && horas < 20){
        LightMode();
    }else if(horas >= 20 && horas < 24){
        DarkMode();
        flag = 0;
    }else if(horas >= 0 && horas <= 5){
        DarkMode();
        flag = 0;
    }
    console.log(`São ${horas} horas`);
}

setTimeout(mudaHorario, 1000);

mudaHorario();