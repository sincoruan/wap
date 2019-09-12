"use strict";
{
    
    let startFlat = false;
    $(document).ready(function(){
        $("#start").click(function(){
            startFlat = true;
        });
        $("#maze .boundary").mouseover(function(){
            if(startFlat==true)
            {
                $("#maze .boundary").css("background-color","red");
                setTimeout(function(){
                    alert("hahaha,you failed!!!");
                }, 500); 
                startFlat=false;
            }
        });
        $("#end").mouseover(function(){
            if(startFlat==true){
                startFlat=false;
                alert("hahaha,you succeed!!!");
            }
        });
        
    });
    
}

