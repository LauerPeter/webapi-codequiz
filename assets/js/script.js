///html variables

const startButton = document.getElementById("start");
const displayTimer = document.getElementById("time");
const questionTitle = document.getElementById("question-title");
const choicesContainer = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const endScreen = document.getElementById("end-screen");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");

///quiz let logic 

let currentQuestion = 0;
let time = 100; 
let score = 0;

let quizStart = false;
let quizEnd = false;


///questions for the quiz
const questions = [
  {
    title: "1.Which of the following is not javascript data types?",
    choices: ["Null type", "Undefined type", "Number type", "All of the mentioned"],
    answer: "Null type"
  },
  {
    title: "2.JavaScript code can be written in ____.",
    choices: ["JavaScript file (.js file)","HTML document directly","JavaScript file and in HTML document directly","In style sheets (.css file)"],
    answer: "JavaScript file and in HTML document directly"
  },
  {
    title: "3.Which symbol is used separate JavaScript statements?",
    choices: ["Comma (,)", "Colon (:)", "Colon (:)", "Semicolon (;)"],
    answer: "Semicolon (;)"
  },
  {
    title: "4.JavaScript ignores?",
    choices: ["newlines", "tabs", "spaces", "All of the above"],
    answer: "All of the above"
  },
  {
    title:"5.Which JavaScript method is used to access an HTML element by id?",
    choices: ["getElementById()", "getElement(id)", "getElementById(id)", "elementById(id)"],
    answer: "getElementById()"
    
  }
];

startButton.addEventListener("click", startQuiz);

////hides the questions until quiz starts
function startQuiz(){

  const startScreen = document.getElementById("start-screen");
  
  startScreen.style.display = "none";
  
  const questionsSection = document.getElementById("questions");
  
  questionsSection.style.display = "block";
  
  quizStart = true;

  displayQuestion();
  
  startTimer();

}

////questions appear when startquiz is activated 
function displayQuestion(){
  
  const currentQuestionNum = questions[currentQuestion];

  questionTitle.textContent = currentQuestionNum.title;

  choicesContainer.innerHTML = '';

  for (let i = 0; i < currentQuestionNum.choices.length; i++) {
    
    const choice = currentQuestionNum.choices[i];
    
    const choiceButton = document.createElement('button');
    
    choiceButton.textContent = choice;
    
    choiceButton.classList.add('choice'); 

    choiceButton.addEventListener('click', function () {
      checkAnswer(choice);
    });
    choicesContainer.appendChild(choiceButton);
  }
}

///timer functionality
function startTimer() {
  
  const clock = setInterval(function () {
    
    time -= 1; 
    
    updateClockHtml(); 

    if (time <= 0 || quizEnd) {
      
      clearInterval(clock); 
      
      endQuiz(); 
    }
  }, 1000); 
}
///
function updateClockHtml() {
  displayTimer.textContent = time;
}


 


function checkAnswer (userChoice) {
  
  const currentQuestionNum = questions[currentQuestion];

  if (userChoice === currentQuestionNum.answer){

    score += 10;

    alert("Correct! 10 points!");

    currentQuestion++ 
  }
  
  else {

    time -= 5;

    alert("Incorrect! 5 seconds has been removed from the timer!");
  
  }

  if (currentQuestion === questions.length)

  endQuiz()


  else {
  displayQuestion();
 
  }

}








