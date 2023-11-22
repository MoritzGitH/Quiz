import { renderQuiz } from "./index.js";
import { choseAnswer, length, correct } from "./select.js";

export {quiz, onNext}

let quiz = 0;

function onNext () {
document.querySelector('.js-next').addEventListener('click', ()=> {
  quiz ++;

  if (quiz < length) {
    renderQuiz (quiz)
    choseAnswer ()
    onNext() 
  }
  else if (quiz >= length) {
    document.querySelector('.js-answer-container').innerHTML = ``

    document.querySelector('.js-question-number').innerHTML = `Dein Ergebnis:`
    document.querySelector('.js-question-text').innerHTML = `
    ${correct}/${length} Richtig`
  }
    
   
})
}


 