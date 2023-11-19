import { renderQuiz } from "./index.js";
import { choseAnswer } from "./select.js";

export {quiz, onNext}

let quiz = 0;

function onNext () {
document.querySelector('.js-next').addEventListener('click', ()=> {
  quiz ++;
  renderQuiz (quiz)
  choseAnswer ()
})
}