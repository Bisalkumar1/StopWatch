let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".Reset");

let hours=document.querySelector(".hour");
let mins=document.querySelector(".min");
let secs=document.querySelector(".sec");
let milisecs=document.querySelector(".milisec");

let hour=0;
let min=0;
let sec=0;
let milisec=0;

let interval;

start.addEventListener("click",()=>{
    interval=setInterval(function(){
        if(milisec<100){
            milisec+=1;
            if(milisec<10){
                milisecs.innerHTML="0"+milisec;
            }
            else if(milisec>=10 && milisec<100) {
                milisecs.innerHTML=milisec;
            }
        }
        
        else{
            //  milisec=0;
            if(sec<59){
      
      sec+=1;
      secs.innerHTML=sec<10? "0"+sec+":":sec+":";

      milisec=0;

  }
else{

        if(min<59){
                min+=1;
                mins.innerHTML=min<10?"0"+min+":":min+":";
                sec=0;
            secs.innerHTML=sec<10?"0"+sec+":":sec+":";
                
              
            }
            else {

                hour+=1;
                hours.innerHTML=hour<10? "0" + hour + ":" : hour+ ":";
                min=0;
                mins.innerHTML=min<10?"0"+min+":":min+":";
            }
        }
    }
    });
start.style.pointerEvents="none";
});

stop.addEventListener("click",function(){
    clearInterval(interval);
    start.style.pointerEvents="visible";
});
reset.addEventListener("click",function(){
    sec=0;
    min=0;
    hour=0;
    milisec=0;
secs.innerHTML="0"+sec+":";
mins.innerHTML="0"+min+" :";
hours.innerHTML="0"+hour+" :";
milisecs.innerHTML="0"+milisec;
clearInterval(interval);
    start.style.pointerEvents="visible";

});