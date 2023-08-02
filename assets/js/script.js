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
    choice: ["Comma (,)", "Colon (:)", "Colon (:)", "Semicolon (;)"],
    answer: "Semicolon (;)"
  },
  {
    title: "4.JavaScript ignores?",
    choice: ["newlines", "tabs", "spaces", "All of the above"],
    answer: "All of the above"
  },
  {
    title:"5.Which JavaScript method is used to access an HTML element by id?",
    choice: ["getElementById()", "getElement(id)", "getElementById(id)", "elementById(id)"],
    answer: "getElementById()"
    
  }
];