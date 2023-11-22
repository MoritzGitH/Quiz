import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://quiz-projekt-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const quizzesInDB = ref(database, "quizzes")

let number = 1;
let index = 1;
let step = 1;
let start = false;

let questions = [
  {name: ``}
]




document.querySelector('.js-submit-button').addEventListener('click', () => {
  if (!start) {
    questions[0].name = document.querySelector('.js-input').value
    start = true
  } else {updatePage()}
  
  
})

document.querySelector('.js-backwards').addEventListener('click', () => {
  step = step - 2;
  updatePage()
})

function updatePage () {
  if (step < 8) {
  if (step === 1) {
    
    questions.push({ 
      number: number,
      question: '',
      answers: [
      {a: '', i: 0, correct: true},
      {a: '', i: 1, correct: false},
      {a: '', i: 2, correct: false},
      {a: '', i: 3, correct: false},
      ],
      correctAnswer: '' 
    },)

    document.querySelector('.js-text-box').innerHTML = 'Wie lautet deine 1. Frage?';
    document.querySelector('.js-input').placeholder = 'z.B. Nenne den ersten Präsidenten der USA '
    document.querySelector('.js-backwards').classList.remove('display-flex')
    
    
    document.querySelector('.js-input').value = ``
  }

  if (step === 2) {
    document.querySelector('.js-text-box').innerHTML = 'Formuliere eine korrekte Antwort auf deine Frage';
    document.querySelector('.js-input').placeholder = 'z.B. Die Antwort ist George Washington'
    document.querySelector('.js-backwards').classList.add('display-flex')
   
    questions[index].question = document.querySelector('.js-input').value
    document.querySelector('.js-input').value = ``
  }

  if (step === 3) {
    document.querySelector('.js-text-box').innerHTML = 'Wähle insgesamt 4 mögliche Antworten';
    document.querySelector('.js-input').placeholder = 'Möglickeit 1'

    questions[index].correctAnswer = document.querySelector('.js-input').value
    document.querySelector('.js-input').value = ``
  }

  if (step === 4) {
    document.querySelector('.js-text-box').innerHTML = 'Wähle insgesamt 4 mögliche Antworten';
    document.querySelector('.js-input').placeholder = 'Möglickeit 2'

    questions[index].answers[0].a = document.querySelector('.js-input').value
    document.querySelector('.js-input').value = ``
  }

  if (step === 5) {
    document.querySelector('.js-text-box').innerHTML = 'Wähle insgesamt 4 mögliche Antworten';
    document.querySelector('.js-input').placeholder = 'Möglickeit 3'

    questions[index].answers[1].a = document.querySelector('.js-input').value
    document.querySelector('.js-input').value = ``
  }

  if (step === 6) {
    document.querySelector('.js-text-box').innerHTML = 'Wähle insgesamt 4 mögliche Antworten';
    document.querySelector('.js-input').placeholder = 'Möglickeit 4'

    questions[index].answers[2].a = document.querySelector('.js-input').value
    document.querySelector('.js-input').value = ``
  }

  if (step === 7) {
    document.querySelector('.js-text-box').innerHTML = 'Möchtest du eine weitere Frage hinzufügen?';
    document.querySelector('.js-input').placeholder = 'Möglickeit 4'
    document.querySelector('.js-save-button').classList.add('display-flex')

    questions[index].answers[3].a = document.querySelector('.js-input').value
    document.querySelector('.js-input').value = ``
    console.log(questions)
  }
  step++;
} else {

  if (step === 8) {
    step = 1
    document.querySelector('.js-save-button').classList.remove('display-flex')
    updatePage()
    document.querySelector('.js-input').value = ``
    index++;
  }
}
  
  
}