

var timeFrame = setInterval(function(){
    var currentDatex = new Date(2022,02,01,12,3,33);
var datex = new Date();
    var diff = currentDatex - datex;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    
    var dd= document.getElementById("days"); 
    dd.innerText = days;
    var hh = document.getElementById("hours"); 
    hh.innerText = hours;
    var mm = document.getElementById("minutes"); 
    mm.innerText =  minutes;
    var ss = document.getElementById("seconds");
     ss.innerText = seconds;
  
},1);