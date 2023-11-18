import { renderQuiz } from "./index.js";

export {quiz}

let quiz = 0;


document.querySelector('.js-next').addEventListener('click', ()=> {
  quiz ++;
  console.log(quiz)
  renderQuiz (quiz)
})
