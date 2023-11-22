import { questions, index } from "./index.js"

let nameEdit = false
let questionEdit = false
let answerEdit = false
let answer1Edit = false
let answer2Edit = false
let answer3Edit = false
let answer4Edit = false

//Name editieren
document.getElementById('name-img').addEventListener('click', () => {
  const input = document.getElementById('name-input')
  const text = document.getElementById('name-text')
  
  if (!nameEdit) {
    nameEdit = true
    input.hidden = false
    input.addEventListener('keypress', e => {
    if (e.key === 'Enter'){
      questions[0].name = input.value; input.value = ``; input.hidden = true, nameEdit = false; text.innerHTML = `Quiz Name: ${questions[0].name}`}
})
  } else 
    {nameEdit = false; input.value = ``; input.hidden = true}
})

//Frage editieren
document.getElementById('question-img').addEventListener('click', () => {
  const input = document.getElementById('question-input')
  const text = document.getElementById('question-text')

  if (!questionEdit) {
    questionEdit = true
    input.hidden = false
    input.addEventListener('keypress', e => {
    if (e.key === 'Enter'){
      questions[index].question = input.value; input.value = ``; input.hidden = true, questionEdit = false; text.innerHTML = `Frage: ${questions[index].question}`}
})
  } else 
    {questionEdit = false; input.value = ``; input.hidden = true}
})

//Antwort Satz editieren
document.getElementById('answer-img').addEventListener('click', () => {
  const input = document.getElementById('answer-input')
  const text = document.getElementById('answer-text')
  
  if (!answerEdit) {
    answerEdit = true
    input.hidden = false
    input.addEventListener('keypress', e => {
    if (e.key === 'Enter'){
      questions[index].correctAnswer = input.value; input.value = ``; input.hidden = true, answerEdit = false; text.innerHTML =`Antwort Satz: ${questions[index].correctAnswer}`}
})
  } else 
    {answerEdit = false; input.value = ``; input.hidden = true}
})

//Antwort 1 editieren
document.getElementById('answer-1-img').addEventListener('click', () => {
  const input = document.getElementById('answer-1-input')
  const text = document.getElementById('answer-1-text')
  
  if (!answer1Edit) {
    answer1Edit = true
    input.hidden = false
    input.addEventListener('keypress', e => {
    if (e.key === 'Enter'){
      questions[index].answers[0].a = input.value; input.value = ``; input.hidden = true, answer1Edit = false; text.innerHTML = `Antwort 1: ${questions[index].answers[0].a}`}
})
  } else 
    {answer1Edit = false; input.value = ``; input.hidden = true}
})

//Antwort 2 editieren
document.getElementById('answer-2-img').addEventListener('click', () => {
  const input = document.getElementById('answer-2-input')
  const text = document.getElementById('answer-2-text')
  
  if (!answer2Edit) {
    answer2Edit = true
    input.hidden = false
    input.addEventListener('keypress', e => {
    if (e.key === 'Enter'){
      questions[index].answers[1].a = input.value; input.value = ``; input.hidden = true, answer2Edit = false; text.innerHTML = `Antwort 2: ${questions[index].answers[1].a}`}
})
  } else 
    {answer2Edit = false; input.value = ``; input.hidden = true}
})

//Antwort 3 editieren
document.getElementById('answer-3-img').addEventListener('click', () => {
  const input = document.getElementById('answer-3-input')
  const text = document.getElementById('answer-3-text')
  
  if (!answer3Edit) {
    answer3Edit = true
    input.hidden = false
    input.addEventListener('keypress', e => {
    if (e.key === 'Enter'){
      questions[index].answers[2].a = input.value; input.value = ``; input.hidden = true, answer3Edit = false; text.innerHTML = `Antwort 3: ${questions[index].answers[2].a}`}
})
  } else 
    {answer3Edit = false; input.value = ``; input.hidden = true}
})

//Antwort 4 editieren
document.getElementById('answer-4-img').addEventListener('click', () => {
  const input = document.getElementById('answer-4-input')
  const text = document.getElementById('answer-4-text')
  
  if (!answer4Edit) {
    answer4Edit = true
    input.hidden = false
    input.addEventListener('keypress', e => {
    if (e.key === 'Enter'){
      questions[index].answers[3].a = input.value; input.value = ``; input.hidden = true, answer4Edit = false; text.innerHTML = `Antwort 4: ${questions[index].answers[3].a}`}
})
  } else 
    {answer4Edit = false; input.value = ``; input.hidden = true}
})