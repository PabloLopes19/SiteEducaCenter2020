function programming(){
    window.location.href = "programacao.html";
}
function webDesign(){
    window.location.href = "photoshop.html";
}
tecFundament = () => {
    window.location.href = "tecnolo.html";
}
projDesenhos = () => {
    window.location.href = "projDesenhos.html";
}
melhorIdade = () => {
    window.location.href = "melhorIdade.html";
}
vendaTecni = () => {
    window.location.href = "tecnicaVendas.html";
}
credECobr = () => {
    window.location.href = "crediECobr.html";
}
contabeis = () => {
    window.location.href = "contabeis.html";
}
veterinario = () => {
    window.location.href = "veterinario.html";
}
hardware = () => {
    window.location.href = "hardware.html";
}
robotica = () => {
    window.location.href = "robotica.html";
}
ingles = () => {
    window.location.href = "ingles.html";
}
farmacia = () => {
    window.location.href = "farmacia.html";
}
jogos = () => {
    window.location.href = "jogos.html";
}
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

// algoritmo do modo escuro

darkMode = () => {
    document.querySelector('body').style.background = "#444";
    document.querySelector('.titleContainer').style.color = "#fff";
}
lightMode = () => {
    document.querySelector('body').style.background = "#ecf0f1";
    document.querySelector('.titleContainer').style.color = "#111";
}

var flag = 1;

$('#darkModeBtn').click(() => {
    if(flag == 1){
        darkMode();
        flag = 0;
    }else{
        lightMode();
        flag = 1;
    }
});
$('#darkModeBtnMobile').click(() => {
    if(flag == 1){
        darkMode();
        flag = 0;
    }else{
        lightMode();
        flag = 1;
    }
});

mudaHorario = () => {
    var dia = new Date();
    var horas = dia.getHours();    

    if(horas > 6 && horas < 12){
        lightMode();
    }else if(horas >= 12 && horas < 20){
        lightMode();
    }else if(horas >= 20 && horas < 24){
        darkMode();
        flag = 0;
    }else if(horas >= 0 && horas <= 5){
        darkMode();
        flag = 0;
    }
    console.log(`São ${horas} horas`);
}

setTimeout(mudaHorario, 1000);


mudaHorario();