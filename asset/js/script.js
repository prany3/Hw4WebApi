//Timer
document.addEventListener('DOMContentLoaded', () => {
})    
const timeLeftDisplay = document.getElementById('time-left')
console.log(timeLeftDisplay)
const startBtn = document.querySelector('#start-button')
const decreaseBtn = document.querySelector('#decrease-button')
var timerInterval 
var timeLeft = 360

//coding questions, answers, correctAnswers
var questions =[
    {
        question: "What is the purpose of html?",
        answers:{
            a: styling of page,
            b: interaction of page,
            c: ,
            d: framework of page,
        },
         correctAnswer: "d"
    },
    {
        question: "What is the purpose of css?",
        answers:{
            a: 1,
            b: 2,
            c: styling the page,
            d 4,
        },
         correctAnswer: "c"
    },
    {
        question: "What is the purpose of javascript?",
        answers:{
            a: 1,
            b: to make page interactive,
            c: 3,
            d: 4,
        },
        correctAnswer: "b"
    },
    {
        question: "Which program uses semantic tags?",
        answers:{
            a: html,
            b: javascript,
            c: ,
            d: css,
        }, 
        correctAnswer: "a"
    },
    {
        question: "Which function is used to push data at the end of an array?",
         answers:{
            a: push(),
            b: ,
            c: 3,
            d: 4,
         },
         correctAnswer: "a"
    },
    {
        question: "How would you remove the end of an array?", 
        answers:{
            a: 1,
            b: console.log(),
            c: shift(),
            d: pop(),
        }, 
        correctAnswer: "d"
    },
];



 
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}








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