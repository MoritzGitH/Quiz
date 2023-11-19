import { questions } from "./index.js"

let submited

export function choseAnswer () {
  submited = false
document.querySelectorAll('.js-answer').forEach((answer, i) => {
  const index = i
  onAnswerClick (answer, index)

})
}

function onAnswerClick (answer, index) {
  answer.addEventListener('click', () => {

    if (!submited) {

    document.querySelectorAll('.js-answer').forEach((a, i) => {
      a.classList.remove('opacity-60')
    })


    questions[answer.dataset.id].answers.forEach((a) => {
      
      if (a.i === index) {
        
        document.querySelector('.js-submit-container').innerHTML = `<div class="submit-button js-submit-button">Bestätigen</div>`
        
        document.querySelector('.js-submit-button').addEventListener('click', () => {
          submitAnswer(a.correct, answer.dataset.id)}, 
          
          { once: true}
        )

      }
      else {
        document.querySelector(`.answer-${a.i}`).classList.add('opacity-60')
      }
      
    }) 
    }
  })
}

function submitAnswer (outcome, i) {
 document.querySelector('.js-submit-container').innerHTML = ``
 submited = true

 if (outcome) {
  document.querySelector('.js-question-number').innerHTML = 'Richtig!'
  
 } else {
  document.querySelector('.js-question-number').innerHTML = 'Vielleicht nächstes Mal.'
 }

 document.querySelector('.js-question-text').innerHTML = questions[i].correctAnswer
}