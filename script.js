function clock(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("mins");
    var seconds = document.getElementById("secs");
    var am = document.getElementById("ampm");

    var time = new Date();

    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var am_pm = "AM";

    if(hrs == 0){
        hrs=12;
    }
    if(hrs>12){
        hrs = hrs -12;
        am_pm = "PM";
    }
    if(hrs<10){
        hrs ="0"+hrs;
    }
    if(sec<10){
        sec = "0"+sec;
    }
    hours.innerText=hrs;
    minutes.innerText=min;
    seconds.innerText = sec;
    am.innerText=am_pm;

}
setInterval(clock,1000);

function settime(){
    var x = document.getElementById("wakeuptime").value;
    var y = document.getElementById("lunch").value;
    var z = document.getElementById("nighttime").value;

    var hour  = new Date().getHours();

    if(x==hour){

        document.getElementById('imgcontainer').style.backgroundImage="url(./pic-_1_.jpg)"
        document.getElementById('textcontainer').innerText='Wake Up !!';
        document.getElementById("smallbox2").innerText="Good Morning !!";
    }

    if(y==hour){
        document.getElementById("imgcontainer").style.backgroundImage="url(./lunch.PNG)"
        document.getElementById("textcontainer").innerText="Let's Have Some Lunch !!";
        document.getElementById("smallbox2").innerText="Good Afternoon !!";
    }

    if(z==hour){
        document.getElementById("imgcontainer").style.backgroundImage="url(./night.PNG)"
        document.getElementById("textcontainer").innerText="Good Night !!";
        document.getElementById("smallbox2").innerText="Good Night !!";
    }    
    
}
settime();