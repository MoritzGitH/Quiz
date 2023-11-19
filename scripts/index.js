import {quiz, onNext} from './next.js'
import { choseAnswer } from './select.js'

export { questions }

let questions = [
  { 
    number: 1,
    question: 'Nenne den ersten Präsidenten der USA',
    answers: [
    {a: 'George Washington', i: 0, correct: true},
    {a: 'Abraham Lincoln', i: 1, correct: false},
    {a: 'Christoph Columbus', i: 2, correct: false},
    {a: 'James Washington', i: 3, correct: false},
    ],
    correctAnswer: 'George Washington war der 1. Präsident' 
  },
  { 
    number: 2,
    question: 'Wähle den Staat in Kanda',
    answers: [
    {a: 'Alberta', i: 0, correct: false},
    {a: 'Nebreska', i: 1, correct: true},
    {a: 'Alaska', i: 2, correct: false},
    {a: 'Vermont', i: 3, correct: false},
    ],
    correctAnswer: 'Die Antwort ist Nebreska' 
  },
]

renderQuiz(quiz)

export function renderQuiz (quiz) {
  let html = ''
  questions[quiz].answers.forEach((o, i) => {
    
    html = html + `<div class="answer-${i} js-answer" data-id="${quiz}">${o.a}</div>`
    
  })

  html += `<div class="js-submit-container"></div>
  <div><img src="images/Polygon 1.png" class="next-img js-next "></div>
`




  document.querySelector('.js-answer-container').innerHTML = html; 

  document.querySelector('.js-question-text').innerHTML = questions[quiz].question
  document.querySelector('.js-question-number').innerHTML = `Quiz Frage ${questions[quiz].number}:`
}

choseAnswer()
onNext()