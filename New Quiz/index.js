//import { questions } from '/scripts/index.js'

let step = 1

document.querySelector('.js-submit-button').addEventListener('click', () => {
  updatePage()
})

document.querySelector('.js-backwards').addEventListener('click', () => {
  step = step - 2;
  updatePage()
})

function updatePage () {
  if (step < 8) {
  if (step === 1) {
    document.querySelector('.js-text-box').innerHTML = 'Wie lautet deine 1. Frage?';
    document.querySelector('.js-input').placeholder = 'z.B. Nenne den ersten Präsidenten der USA '
    document.querySelector('.js-backwards').classList.remove('display-flex')
  }

  if (step === 2) {
    document.querySelector('.js-text-box').innerHTML = 'Formuliere eine korrekte Antwort auf deine Frage';
    document.querySelector('.js-input').placeholder = 'z.B. Die Antwort ist George Washington'
    document.querySelector('.js-backwards').classList.add('display-flex')
  }

  if (step === 3) {
    document.querySelector('.js-text-box').innerHTML = 'Wähle insgesamt 4 mögliche Antworten';
    document.querySelector('.js-input').placeholder = 'Möglickeit 1'
  }

  if (step === 4) {
    document.querySelector('.js-text-box').innerHTML = 'Wähle insgesamt 4 mögliche Antworten';
    document.querySelector('.js-input').placeholder = 'Möglickeit 2'
  }

  if (step === 5) {
    document.querySelector('.js-text-box').innerHTML = 'Wähle insgesamt 4 mögliche Antworten';
    document.querySelector('.js-input').placeholder = 'Möglickeit 3'
  }

  if (step === 6) {
    document.querySelector('.js-text-box').innerHTML = 'Wähle insgesamt 4 mögliche Antworten';
    document.querySelector('.js-input').placeholder = 'Möglickeit 4'
  }

  if (step === 7) {
    document.querySelector('.js-text-box').innerHTML = 'Möchtest du eine weitere Frage hinzufügen?';
    document.querySelector('.js-input').placeholder = 'Möglickeit 4'
    document.querySelector('.js-save-button').classList.add('display-flex')
  }
  step++;
} else {

  if (step === 8) {
    step = 1
    document.querySelector('.js-save-button').classList.remove('display-flex')
    updatePage()
  }
}
  
  
}