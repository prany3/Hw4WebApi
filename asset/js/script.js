//Timer
document.addEventListener('DOMContentLoaded', () => {

})    
const timeLeftDisplay = document.getElementById('time-left')
console.log(timeLeftDisplay)
const startBtn = document.querySelector('#start-button')
const decreaseBtn = document.querySelector('#decrease-button')
var timerInterval 
var timeLeft = 360


var questions =[
    {question:"what is 1+1", answers:[1,2,3,4], correctAnswer: 2},
    {question:"what is 1+1", answers:[1,2,3,4], correctAnswer: 2},
    {question:"what is 1+1", answers:[1,2,3,4], correctAnswer: 2}

]










function countDown() {
   timerInterval = setInterval(function() {
        console.log(timeLeft)
        if(timeLeft <= 0 ) {
            clearInterval(timerInterval)
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -=1
        
    }, 1000);
}
function decreaseCount() {
    timeLeft -=5    
    timeLeftDisplay.innerHTML = timeLeft
}
startBtn.addEventListener('click', countDown)            
decreaseBtn.addEventListener('click', decreaseCount)            