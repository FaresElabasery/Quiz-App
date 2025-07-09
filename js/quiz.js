import { errorAlert } from "./index.js";

export class Quiz {
    constructor(amount = 5, category, difficulty) {
        this.amount = amount
        this.category = category
        this.difficulty = difficulty
        this.score = 0
    }
    async getAllQuestions() {
        try {
            const response = await fetch(`https://opentdb.com/api.php?amount=${this.amount}&category=${this.category}&difficulty=${this.difficulty}`)
            const data = await response.json()
            console.log(data);
            console.log(this.amount, this.category, this.difficulty);

            return data.results
        } catch (error) {
            errorAlert.classList.add("alert-show")
            console.log(error);
        } finally {
            // setTimeout(() => {
            //     errorAlert.classList.remove("alert-show")
            // }, 3000);
        }
    }
}