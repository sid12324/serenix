let questions = [
  {question: 'Have you experienced persistent feelings of sadness or hopelessness for more than two weeks?'},
  {question: 'Are you often anxious or scared about aspects of your life?'},
  {question: 'Do you have trouble sleeping or relaxing?'},
  {question: 'Do you ever feel hopeless at times?'},
  {question: 'Do you ever have thoughts of hurting yourself?'},
  {question: 'Have you ever been questioning your own sexuality?'},
  {question: 'Have you ever noticed sudden changes in your personality?'},
  {question: 'Have you experienced discrimination based your own sexual orientation ot gender identity'},
  {question: 'Do you ever feel isolated from your peers or family?'},
  {question: 'Do you have dificulty maintaining healthy relationships'},
  {question: 'Have you been denied mental health care or are unable to get it?'},
  {question: 'Have you experienced abuse or witnessed it in your household'},
  {question: '13Have you been feeling down lately?'},
]

let count = 0, points = 0, question, length = questions.length;


function revealButtons() {
  document.getElementsByClassName('answerButtons')[1].style.display = "";
  document.getElementsByClassName('answerButtons')[0].style.display = "";
  document.getElementById('count').style.display = "";
  document.getElementById('count-number').innerHTML= (++count) + ' \/ ' + (length-1);
}

function hideButtons() {
  document.getElementsByClassName('answerButtons')[1].style.display = "none";
  document.getElementsByClassName('answerButtons')[0].style.display = "none";
  document.getElementById('count').style.display = "none";
  document.getElementById('count-number').innerHTML= (++count) + ' \/ ' + (length-1);
  document.getElementById('quest').style.display = "none";
}

function revealResources() {
  let list = document.getElementsByClassName('resource');
  for (let i = 0; i < list.length; i++) {
    list[i].style.display = '';
  }
  document.getElementById('percent1').innerHTML = points;
}

function revealMessage() {
  document.getElementById('percent2').innerHTML = points;
  document.getElementById('message').style.display = '';
  let list = document.getElementsByClassName('resource');
  list[1].style.display = '';
  list[4].style.display = '';
  list[5].style.display = '';  
  
}

function startQuiz() {
  document.getElementById('start').style.display = 'none';
  revealButtons();
  document.getElementById('quest').innerHTML = questions[count-1].question;
}

function answer(value) {
  if (count < length) {
    points += value;
    document.getElementById('count-number').innerHTML = (++count) + ' \/ ' + (length-1);
    document.getElementById('quest').innerHTML = questions[count - 1].question;
  }
  
  if (count >= length) {
    
    hideButtons();
    if (points > 3) {
      revealResources();
    }
    else {
      revealMessage();
    }
  }
}