var fundo = document.querySelector('body');
var btnClick = document.querySelector('#darkModeBtn');
var btnClickMobile = document.querySelector('#darkModeBtnMobile');

dark = () => {
    fundo.style.background = "#444";
    document.querySelector('#subtitulo1').style.color = "#fff";
    document.querySelector('#subtitulo2').style.color = "#fff";
    document.querySelector('#subtitulo3').style.color = "#fff";
    document.querySelector('#titulo').style.color = "#fff";
}
ligh = () => {
    fundo.style.background = "#ecf0f1";
    document.querySelector('#titulo').style.color = "#111";
    document.querySelector('#subtitulo1').style.color = "#111";
    document.querySelector('#subtitulo2').style.color = "#111";
    document.querySelector('#subtitulo3').style.color = "#111";
    document.querySelector('#titulo').style.color = "#111";
}

flag == 1;

btnClick.onclick = () => {
    if(flag == 1){
        dark();
        flag = 0;
    }else{
        ligh();
        flag = 1;
    }
}
btnClickMobile.onclick = () => {
    if(flag == 1){
        dark();
        flag = 0;
    }else{
        ligh();
        flag = 1;
    }
}
mudaHorario = () => {
    var dia = new Date();
    var horas = dia.getHours();   

    if(horas > 6 && horas < 12){
        ligh();
    }else if(horas >= 12 && horas < 20){
        ligh();
    }else if(horas >= 20 && horas < 24){
        dark();
        flag = 0;
    }else if(horas >= 0 && horas <= 5){
        dark();
        flag = 0;
    }
    console.log(`São ${horas} horas`);
}

setTimeout(mudaHorario, 1000);


mudaHorario();
