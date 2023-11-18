let questions = [
  { Number: 0,
    question: 'Nenne den ersten Präsidenten der USA',
    answers: [
    {a: 'George Washington', i: 0},
    {a: 'Abraham Lincoln', i: 1},
    {a: 'Christoph Columbus', i: 2},
    {a: 'James Washington', i: 3},
    ]
     
     
  }
]

questions[0].answers.forEach((o, i) => {
  const html = `<div class="answer-${i}">${o.a}</div>`

  document.querySelector('.js-answer-container').innerHTML += html; 
})

  
  