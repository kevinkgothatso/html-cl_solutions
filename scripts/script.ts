
 var date: Date = new Date();
  
 //setting the footer year
 var date_footer: any = date.getFullYear();
 var date_footer_ele = document.getElementById("year");
 date_footer_ele.innerText = date_footer;

 //getting and setting time frame to completion
 var currentDate: Date = new Date(2022,3,1,12,0,0);

 var timeFrame = setInterval(()=>{
      console.log('ohh well');
 },1000);
