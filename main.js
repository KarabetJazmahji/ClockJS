setInterval(displayTime, 1000);

var x = document.getElementById("wake_up_tone");


var d,h,m,s,setH,setM,setS; 

    
function displayTime(){
d = new Date();
    
h = (d.getHours() < 10 ? '0':'' )+ d.getHours();
m = (d.getMinutes() < 10 ? '0':'' )+ d.getMinutes();
s = (d.getSeconds() < 10 ? '0':'' )+ d.getSeconds();

document.getElementById("display").innerHTML = h + ":" + m  + ":" + s;
}


function set(){
    setH = document.getElementById("hour").value;
    setM = document.getElementById("minute").value;
    setS = document.getElementById("second").value; 
   
    setInterval(check,1000);
}


function check(){
    if(setM == m && setH == h && setS == s){
        x.play();
        document.getElementById("note").style.visibility = "visible";
    }
}

function cl(){
    document.getElementById("hour").value = document.getElementById("minute").value =
    document.getElementById("second").value = "";
    document.getElementById("note").style.visibility = "hidden";
    x.pause();
}

function snooze(){
    x.pause();
    x.currentTime = 0;
    var dur = document.getElementById("snoozeDuration").value;
    document.getElementById("note").style.visibility = "hidden";
    if(dur == 3){
        setTimeout(function(){
            x.play();
            document.getElementById("note").style.visibility = "visible";
        },3000);
    }
    else if(dur == 5){
        setTimeout(function(){
            x.play();
            document.getElementById("note").style.visibility = "visible";
        },5000);
    }
    else{
        setTimeout(function(){
            x.play();
            document.getElementById("note").style.visibility = "visible";
        },10000);
    }
}




