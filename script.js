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



function Makediv(){

    // var container=document.createElement('div');
    // container.className="grid-item";
    // container.id="display-block";


    // document.getElementById("grid-container").appendChild(container);

    var invalue = document.getElementById("wakeuptime");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("div21").innerHTML="Wake up Time : " + value;


    var invalue = document.getElementById("lunch");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("div22").innerHTML="Lunch Time : " + value;

    var invalue = document.getElementById("nighttime");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("div23").innerHTML="Nap Time : " + value;

}
function img(){
    
    var hourr = new Date().getSeconds();

    if(hourr%2==0||hourr%5==0){

        document.querySelector("#imgcontainer").style.backgroundImage="url(./wakup.jpg)"
        document.getElementById('textcontainer1').innerHTML='Wake Up !!';
        document.getElementById("textcontainer2").innerHTML="Good Morning !!";
    }

    if(hourr%3==0){
        document.getElementById("imgcontainer").style.backgroundImage="url(./lunch.PNG)"
        document.getElementById("textcontainer1").innerHTML="Let's Have Some Lunch !!";
        document.getElementById("textcontainer2").innerHTML="Good Afternoon !!";
    }

    if(hourr%11==0||hourr%7==0||hourr%13==0||hourr%17==0||hourr%19==0){
        document.getElementById("imgcontainer").style.backgroundImage="url(./night.PNG)"
        document.getElementById("textcontainer1").innerHTML="Good Night !!";
        document.getElementById("textcontainer2").innerHTML="Good Night !!";
    }    


}


function settime(){


    img();
    
    Makediv();
}



// Possible soloutions

// var images = ["url(./pic-_1_.jpg)", "url(./lunch.PNG)", "url(./night.PNG)" ];

// var clickcounter = 0;

// var hourdata = new Date().getHours();

// var div = hourdata%clickcounter;

// function count(){
//     clickcounter++;
// }

// function settime(){

//     var imgcont = document.getElementById("imgcontainer");

//     document.querySelector("button").addEventListener("click", function(){
        
//          if(div==0){
//              imgcont.style.backgroundImage="url(./pic-_1_.jpg)";
//          }
     
//          if(div!==0){
//              imgcont.style.backgroundImage="url(./lunch.PNG)";
//          } 

//          if(hourdata>12){
//              imgcont.style.backgroundImage="url(./night.PNG)";
//          }


//           count();

          
//        setTimeout(() => {
           
//        }, timeout);   
        


//     })





// }


// function imagecontainer(selector){
    
//     var image = document.getElementById("imgcontainer"); 
//     switch(true){
//         case selector<=8:
//             image.style.backgroundImage="url(./pic-_1_.jpg)";
//             break;
//         case 8>selector<=17:
//            image.style.backgroundImage="url(./lunch.PNG)";
//             break;
//         case 17>selector<=24:
//             image.style.backgroundImage="url(./night.PNG)";
//             break;       
//     }
    
// }
 

// function settime(){
  
//   document.querySelector("#button").addEventListener("click", function(){
//       for(let i=0;i<25;i++){
//                 var selector = document.querySelectorAll("option")[i].value; 
//                 var image = document.getElementById("imgcontainer"); 
//                 switch(true){
//                     case selector<=8:
//                         image.style.backgroundImage="url(./pic-_1_.jpg)";
//                         break;
//                     case 8>selector<=17:
//                        image.style.backgroundImage="url(./lunch.PNG)";
//                         break;
//                     case 17>selector<=24:
//                         image.style.backgroundImage="url(./night.PNG)";
//                         break;       
//                 }
          

//       }
  

    
//   })
    
   

// }



  // var x=document.getElementById('wakeuptime').value;
    // var y = document.getElementById("lunch").value;
    // var z = document.getElementById("nighttime").value;
    // var hour = new Date().getHours();

    // if(x==hour){

    //     document.getElementById('imgcontainer').style.backgroundImage="url(./pic-_1_.jpg)"
    //     document.getElementById('textcontainer1').innerText='Wake Up !!';
    //     document.getElementById("smallbox").innerText="Good Morning !!";
    // }

    // if(y==hour){
    //     document.getElementById("imgcontainer").style.backgroundImage="url(./lunch.PNG)"
    //     document.getElementById("textcontainer1").innerText="Let's Have Some Lunch !!";
    //     document.getElementById("smallbox").innerText="Good Afternoon !!";
    // }

    // if(z==hour){
    //     document.getElementById("imgcontainer").style.backgroundImage="url(./night.PNG)"
    //     document.getElementById("textcontainer1").innerText="Good Night !!";
    //     document.getElementById("smallbox").innerText="Good Night !!";
    // }    



    // function settime(){

    //    var container = document.querySelector("#imgcontainer");

    //     for(let i =0;i<=24;i++){

    //         var wakeupvalue = document.querySelectorAll(".select1")[i].innerText.length;
    //         var lunch = document.querySelectorAll("#select .select2")[i].innerText.length;
    //         var naptime = document.querySelectorAll(".select3")[i].innerText.length;
    //         var night = document.querySelectorAll(".select4")[i].innerText.length;

    //         if(wakeupvalue!==0){
    //             container.style.backgroundImage="url(./pic-_1_.jpg)";
    //         }
            
            
    //         if(lunch!==0){
    //             container.style.backgroundImage="url(./lunch.PNG)";
    //         }

    //         if(night!==0||naptime!==0){
    //             container.style.backgroundImage="url(./night.PNG)";
    //         }

    //     }

               


    // }

    
