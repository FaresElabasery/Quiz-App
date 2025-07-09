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
            if (!response.ok) {
                throw new Error(`${response.status}`)
            }
            const data = await response.json()
            return data.results
        } catch (error) {
            errorAlert.innerText = "Something Went Wrong ! Check network Connection";
            errorAlert.classList.add("alert-show")
        } finally {
            setTimeout(() => {
                errorAlert.classList.remove("alert-show")
            }, 3000);
        }
    }
}