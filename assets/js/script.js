///html variables

const startButton = document.getElementById("start");
const displayTimer = document.getElementById("time");
const questionTitle = document.getElementById("question-title");
const choicesContainer = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const endScreen = document.getElementById("end-screen");
const initialsForm = document.getElementById("initials-form");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const viewHighScoreButton = document.getElementById("high-scores-button");
const highScoresList = document.getElementById("high-scores-list");
const finalScore = document.getElementById("final-score");

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
///upadtes the html to display time
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

    score -= 5

    alert("Incorrect! 5 seconds has been removed from the timer!");
  
  }

  if (currentQuestion === questions.length)

  endQuiz()


  else {
  displayQuestion();
 
  }

}

function endQuiz() {
  
  const questionStopDisplay = document.getElementById("questions");
  
  questionStopDisplay.style.display = "none";

  const endScreen = document.getElementById("end-screen");
  
  endScreen.style.display = "block";

  const finalScore = document.getElementById("final-score");
  
  finalScore.textContent = score;

}


viewHighScoreButton.addEventListener("click", function () {
  
  displayHighScores();

});


function displayHighScores() {
  
  highScoresList.innerHTML = "";
  
  highScoresList.style.display = "block";

  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  highScores.forEach((scoreObj, index) => {
    
    const listItem = document.createElement("li");
    
    listItem.textContent = `${index + 1}. ${scoreObj.initials} - ${scoreObj.score}`;
    
    highScoresList.appendChild(listItem);
  
  });
}



endScreen.addEventListener("submit", function (event) {
 
  event.preventDefault();
  
  const initials = initialsInput.value.trim().toUpperCase();
  
  const score = parseInt(finalScore.textContent);

  if (initials !== "" && !isNaN(score)) {
    
    saveScore(initials, score);
    
    alert("High-Score has been saved! Click 'Home Page' if you would like to try the quiz again")
  
  }

});

function saveScore(initials, score) {
  
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
  highScores.push({ initials, score });
  
  localStorage.setItem("highScores", JSON.stringify(highScores));

  console.log(initials, score)

}

const sendBackButton = document.getElementById("send-back");

sendBackButton.addEventListener("click", function () {
  window.location.href = "index.html"; 
});