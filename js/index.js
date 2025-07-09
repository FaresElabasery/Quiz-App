
import { Quiz } from "./quiz.js";
import { Question } from './questions.js';
'use strict';
export const errorAlert = document.querySelector("#errorAlert");
const categoryOption = document.querySelector("#categoryOption");
const difficultyOption = document.querySelector("#difficultyOption");
const numOfQuestions = document.querySelector("#numOfQuestions");
export const quizSection = document.querySelector("#quizSection");
export const quizResult = document.querySelector("#quizResult");
const form = document.forms[0];
export let quizResults;
export let quiz;

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (numOfQuestions.value < 1 || numOfQuestions.value == '') {
        errorAlert.innerText = "Please enter a number greater than 1";
        errorAlert.classList.add("alert-show")
        // setTimeout(() => {
        //     errorAlert.classList.remove("alert-show")
        // }, 3000);
        return;
    }
    form.classList.add("d-none")
    quiz = new Quiz(numOfQuestions.value == '' ? 5 : numOfQuestions.value, categoryOption.value == 'any' ? 9 : categoryOption.value, difficultyOption.value);
    quizResults = await quiz.getAllQuestions();
    const question = new Question(0);
    question.displayQuestion();
    console.log(quizResults);
    console.log(numOfQuestions.value, categoryOption.value, difficultyOption.value);
})


