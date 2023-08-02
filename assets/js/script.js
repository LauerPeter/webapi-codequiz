///html variables

const startButton = document.getElementById("start");
const timerDisplay = document.getElementById("time");
const questionTitle = document.getElementById("question-title");
const choicesContainer = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const endScreen = document.getElementById("end-screen");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");

///quiz let logic 

let currentQuestionIndex = 0;
let time = 100; 
let score = 0;