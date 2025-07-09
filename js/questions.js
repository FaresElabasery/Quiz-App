import { quiz, quizResults, quizSection, quizResult } from "./index.js";

export class Question {
    constructor(index) {
        this.index = index
        this.question = quizResults[index].question
        this.category = quizResults[index].category
        this.questionLen = quizResults.length
        this.correct_answer = quizResults[index].correct_answer
        this.incorrect_answers = quizResults[index].incorrect_answers
        this.allChoices = [...this.incorrect_answers, this.correct_answer].sort(() => Math.random() - 0.5)
        this.isAnswered = false

    }

    displayQuestion() {
        let cartona = `<div class="animations animate__animated animate__zoomIn  d-flex flex-column bg-white p-3 rounded-3 text-center gap-3 shadow-sm">
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="bg-green p-2 text-white rounded-2">${this.category}</span>
                                <span class="bg-blue p-2 text-white rounded-2">${this.index + 1} of ${this.questionLen}</span>
                            </div>
                            <h3>${this.question}</h3>
                            <div class="row g-3" id="choices">
                                ${this.allChoices.map(choice => {
            return `
                                        <div class="col-lg-6">
                                        <button class=" custom-btn">${choice}</button>
                                        </div>`
        }).join('')}
                            </div>
                        </div>`
        quizSection.innerHTML = cartona
        quizSection.classList.remove('d-none')
        const choices = document.querySelectorAll('#choices div button')
        choices.forEach((choice) => {
            choice.addEventListener('click', (e) => {
                this.checkAnwser(e.target);
            })
        })

    }
    checkAnwser(answer) {
        if (this.isAnswered == true) return;
        if (answer.innerText == this.correct_answer) {
            answer.classList.add('bg-success');
            answer.classList.add('text-white');
            quiz.score++;

        } else {
            answer.classList.add('text-white');
            answer.classList.add('bg-danger');
        }
        this.isAnswered = true;
        this.index++;
        this.disableChoices(document.querySelectorAll('#choices div button'));
        setTimeout(() => {
            this.animationQuestion(answer);
        }, 1000)
        setTimeout(() => {
            this.nextQuestion();
        }, 2000)
    }
    disableChoices(allElements) {
        allElements.forEach(element => {
            element.disabled = true;
        })
    }
    animationQuestion(element) {
        element.closest('.animations').classList.add('animate__backOutLeft');
        element.closest('.animations').classList.remove('animate__zoomIn');
    }
    nextQuestion() {
        if (this.index < this.questionLen) {
            let newQuestion = new Question(this.index)
            newQuestion.displayQuestion();
        } else {
            this.endQuiz();
        }
    }
    endQuiz() {
        let cartona = `<h3 id="score">Your Score is <span class="score-result"> ${quiz.score} </span> of ${this.questionLen} questions</h3>
                    <button class="btn btn-danger fs-4 w-75 mx-auto " id='playAgain'>Try Again</button>`
        quizResult.innerHTML = cartona
        quizResult.classList.remove('d-none')
        quizSection.classList.add('d-none')
        if (quiz.score == this.questionLen) {
            document.getElementById('score').innerHTML = `Congratulation 🎉👏
 <p>Perfect Score:<span class='score-result'> ${quiz.score}</span> </p>`
            document.getElementById('playAgain').innerText = 'Play Again'
            document.querySelector('.confetti').classList.remove('d-none');
        }
        document.getElementById('playAgain').addEventListener('click', () => location.reload())
    }
}
