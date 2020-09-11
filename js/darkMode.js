// Página 'sobre'

var background = document.querySelector('body');
var btnDarkMode = document.querySelector('#darkModeBtn');
var btnDarkModeMobile = document.querySelector('#darkModeBtnMobile');

darkMode = () => {
    document.querySelector('body').style.background = "#444";
    document.querySelector('.pageTitle h1').style.color = "#fff";
    document.querySelector('#cargo1').style.color = "#fff";
}
lightMode = () => {
    document.querySelector('body').style.background = "#ecf0f1";
    document.querySelector('.pageTitle h1').style.color = "#111";
    document.querySelector('#cargo1').style.color = "#111";
}

var flag = 1;

btnDarkMode.onclick = () => {
    if(flag == 1){
        darkMode();
        flag = 0;
    }else{
        lightMode();
        flag = 1;
    }
}
btnDarkModeMobile.onclick = () => {
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
    // var horas = 23;

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