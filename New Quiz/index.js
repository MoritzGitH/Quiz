import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://quiz-projekt-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const quizzesInDB = ref(database, "quizzes")

let number = 1;
export let index = 1;
let step = 1;
let started = false;

export let questions = [
  {name: ``}
]


document.querySelector('.js-input').addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    nextStep()
  }
})

document.querySelector('.js-submit-button').addEventListener('click', () => {
  nextStep()
})

function nextStep () {
  if (!started) {
    questions[0].name = document.querySelector('.js-input').value
    started = true
    document.getElementById('name-text').innerHTML = `Quiz Name: ${questions[0].name}`
    document.getElementById('list-1').hidden = false
  }
  updatePage()
}

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
    
    
    document.querySelector('.js-input').value = ``
    
  }

  if (step === 2) {
    document.querySelector('.js-text-box').innerHTML = 'Formuliere eine korrekte Antwort auf deine Frage';
    document.querySelector('.js-input').placeholder = 'z.B. Die Antwort ist George Washington'
   
    questions[index].question = document.querySelector('.js-input').value
    document.querySelector('.js-input').value = ``;
    document.getElementById('question-text').innerHTML = `Frage: ${questions[index].question}`
    document.getElementById('list-2').hidden = false
  }

  if (step === 3) {
    document.querySelector('.js-text-box').innerHTML = 'Wähle insgesamt 4 mögliche Antworten';
    document.querySelector('.js-input').placeholder = 'Möglickeit 1'

    questions[index].correctAnswer = document.querySelector('.js-input').value
    document.querySelector('.js-input').value = ``
    document.getElementById('answer-text').innerHTML = `Antwort Satz: ${questions[index].correctAnswer}`
    document.getElementById('list-3').hidden = false
  }

  if (step === 4) {
    document.querySelector('.js-text-box').innerHTML = 'Wähle insgesamt 4 mögliche Antworten';
    document.querySelector('.js-input').placeholder = 'Möglickeit 2'

    questions[index].answers[0].a = document.querySelector('.js-input').value
    document.querySelector('.js-input').value = ``
    document.getElementById('answer-1-text').innerHTML = `Antwort 1: ${questions[index].answers[0].a}`
    document.getElementById('list-4').hidden = false
  }

  if (step === 5) {
    document.querySelector('.js-text-box').innerHTML = 'Wähle insgesamt 4 mögliche Antworten';
    document.querySelector('.js-input').placeholder = 'Möglickeit 3'

    questions[index].answers[1].a = document.querySelector('.js-input').value
    document.querySelector('.js-input').value = ``
    document.getElementById('answer-2-text').innerHTML = `Antwort 2: ${questions[index].answers[1].a}`
    document.getElementById('list-5').hidden = false
  }

  if (step === 6) {
    document.querySelector('.js-text-box').innerHTML = 'Wähle insgesamt 4 mögliche Antworten';
    document.querySelector('.js-input').placeholder = 'Möglickeit 4'

    questions[index].answers[2].a = document.querySelector('.js-input').value
    document.querySelector('.js-input').value = ``
    document.getElementById('answer-3-text').innerHTML = `Antwort 3: ${questions[index].answers[2].a}`
    document.getElementById('list-6').hidden = false
  }

  if (step === 7) {
    document.querySelector('.js-text-box').innerHTML = 'Möchtest du eine weitere Frage hinzufügen?';
    document.getElementById('input-box').classList.add('display-none')
    document.getElementById('line-decoration').classList.add('display-none')
    document.querySelector('.js-save-button').classList.add('display-flex')

    questions[index].answers[3].a = document.querySelector('.js-input').value
    document.querySelector('.js-input').value = ``
    document.getElementById('answer-4-text').innerHTML = `Antwort 4: ${questions[index].answers[3].a}`
    document.getElementById('list-7').hidden = false
    console.log(questions)
  }
  step++;
} else {

  if (step === 8) {
    step = 1
    document.querySelector('.js-save-button').classList.remove('display-flex')
    document.getElementById('input-box').classList.remove('display-none')
    document.getElementById('line-decoration').classList.remove('display-none')
    updatePage()
    document.querySelector('.js-input').value = ``
    index++;
    
    document.getElementById('list-2').hidden = true
    document.getElementById('list-3').hidden = true
    document.getElementById('list-4').hidden = true
    document.getElementById('list-5').hidden = true
    document.getElementById('list-6').hidden = true
    document.getElementById('list-7').hidden = true
  }
}
  
  
}