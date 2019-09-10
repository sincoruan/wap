

let animation="";
let fontsize="";
let turbo="";
let timer;
let interval=200;
let textArea;

window.onload=function(){
    document.getElementById("start").onclick=startGame;
    document.getElementById("stop").onclick=endGame;
    
    document.getElementById("animation").onchange=changeGame;
    document.getElementById("fontsize").onchange=changeFont;
    document.getElementById("turbo").onchange=changeSpeed;
    changeGame();
    changeFont();
}

function startGame(){
    redraw();
    if(animation!=""){
        this.disabled="disabled";
        document.getElementById("stop").disabled="";
        startPlay();
    }
}
function startPlay(){
    clearInterval(timer);
    let func =play();
    timer = setInterval(func, interval);
}

function redraw(){
    textArea = document.getElementById("text-area");
    textArea.style.fontSize=FONTS[fontsize];
    textArea.innerHTML = ANIMATIONS[animation];
}

function endGame(){
    clearInterval(timer);
    this.disabled="disabled";
    document.getElementById("start").disabled="";
}

function changeGame(){
    let selected=document.getElementById("animation");
    let index = selected.selectedIndex;
    animation = selected.options[index].value;
    redraw();
}

function changeFont(){
    let selected=document.getElementById("fontsize");
    let index = selected.selectedIndex;
    fontsize = selected.options[index].value; 
    redraw();
}

function changeSpeed(){
    let checkBox = document.getElementById("turbo");
    if(checkBox.checked==true){
        interval=100;
    }
    else{
        interval=300;
    }
    startPlay();
}

function play(){
    let playArr = ANIMATIONS[animation].split("=====\n");
    let i=0;
    return function(){
        if(i>=playArr.length){
            i=0;
        }
        textArea.innerHTML = playArr[i++];
    };
}
