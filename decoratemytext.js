
window.onload=loadfirst;

function loadfirst(){
    var button1 = document.getElementById("b1");
    button1.onclick=clickButton;

    var checkbox1= document.getElementById("checkbox1");
    checkbox1.onchange=boxChange;

    document.getElementById("text1").style.fontSize="12px";
}

function changeSize()
{
    
}
function clickButton(){
    //document.getElementById("text1").style.fontSize="24px";
    var timer=setInterval(() => {
        var size = parseInt(document.getElementById("text1").style.fontSize);
        size += 2; document.getElementById("text1").style.fontSize = size + "px";
    }, 500);
}
function boxChange(){
    if(document.getElementById("checkbox1").checked==true){
        document.getElementById("text1").style.fontWeight ="bold";
        document.getElementById("text1").style.color="green";
        document.getElementById("text1").style.textDecorationLine="underline";
    }
    else{
        document.getElementById("text1").style.fontWeight ="normal";
    }
}
