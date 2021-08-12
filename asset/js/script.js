//Timer
let cTime = 120;
function myTimer(){
  if(cTime == 0){
    document.getElementById("timerButton").innerHTML = "Start";
  } else{
    document.getElementById("timerButton").innerHTML = cTime;
    cTime = cTime - 1;
    setTimeout(myTimer, 1000);
  }
}