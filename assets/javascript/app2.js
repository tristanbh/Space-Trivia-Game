const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function createQuiz(){}

function showResults(){}

// display quiz right away
createQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);




const questionCollection = [
{
	question: "What is the distance between the sun and earth?",
	answers: {
		a: "66,550,000 miles",
		b: "92,960,000 miles",
		c: "1,000,000 miles",
		d: "26,320,000 miles"

	},
	correctAnswer: "b"
},
{
	question: "What percent of the solar system’s mass does Sun holds?",
	answers: {
		a: "50.0%",
		b: "12.6%",
		c: "64.5%",
		d: "99.8%"

	},
	correctAnswer: "d"
},
{
	question: "When was Sun born?",
	answers: {
		a: "4.6 billion years ago",
		b: "1 million years ago,",
		c: "13.4 Billion years ago",
		d: "70 Million years ago"

	},
	correctAnswer: "a"
},
{
	question: "When was Sun born?",
	answers: {
		a: "4.6 billion years ago",
		b: "1 million years ago,",
		c: "13.4 Billion years ago",
		d: "70 Million years ago"

	},
	correctAnswer: "a"
},
{
	question: "What is the diameter of Earth?",
	answers: {
		a: "25,000 miles",
		b: "9,563 miles",
		c: "7,918 miles",
		d: "16,439 miles"

	},
	correctAnswer: "c"
},
{
	question: "Which Planet Has the Most Moons?",
	answers: {
		a: "Jupiter",
		b: "Saturn",
		c: "Uranus",
		d: "Neptune"

	},
	correctAnswer: "a"
},
{
	question: "What is the diameter of Jupiter",
	answers: {
		a: "38,763 miles",
		b: "86,881 miles",
		c: "113,650 miles",
		d: "18,680 miles"

	},
	correctAnswer: "b"
},
{
	question: "The first human-made object to land on the moon was launched by what country?",
	answers: {
		a: "The United States of America",
		b: "China",
		c: "Canada",
		d: "The Soviet Union"

	},
	correctAnswer: "d"
},
{
	question: "Which planet in our solar system spins the fastest?",
	answers: {
		a: "Mercury",
		b: "Earth",
		c: "Jupiter",
		d: "Neptune"

	},
	correctAnswer: "c"
},
{
	question: "How many people have walked on the moon?",
	answers: {
		a: "2",
		b: "12",
		c: "4",
		d: "8"

	},
	correctAnswer: "b"
},
{
	question: "Which is the largest of Mars' two moons?",
	answers: {
		a: "Io",
		b: "Deimos",
		c: "Ganymede",
		d: "Phobos"

	},
	correctAnswer: "d"
},
];

function createQuiz(){
  // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  questionCollection.forEach(
    (currentQuestion, questionNumber) => {

      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}


questionCollection.forEach( (currentQuestion, questionNumber) => {
  // here goes the code we want to run for each question
});

// we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for(letter in currentQuestion.answers){

  // ...add an html radio button
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

// add this question and its answers to the output
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

quizContainer.innerHTML = output.join('');

function showResults(){

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  questionCollection.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of ' + questionCollection.length;
}

// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
let numCorrect = 0;

// for each question...
questionCollection.forEach( (currentQuestion, questionNumber) => {

  // find selected answer
  const answerContainer = answerContainers[questionNumber];
  const selector = `input[name=question${questionNumber}]:checked`;
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;

  // if answer is correct
  if(userAnswer===currentQuestion.correctAnswer){
    // add to the number of correct answers
    numCorrect++;

    // color the answers green
    answerContainers[questionNumber].style.color = 'lightgreen';
  }
  // if answer is wrong or blank
  else{
    // color the answers red
    answerContainers[questionNumber].style.color = 'red';
  }
});

// find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

// if answer is correct
if(userAnswer===currentQuestion.correctAnswer){
  // add to the number of correct answers
  numCorrect++;

  // color the answers green
  answerContainers[questionNumber].style.color = 'lightgreen';
}
// if answer is wrong or blank
else{
  // color the answers red
  answerContainers[questionNumber].style.color = 'red';
}

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${questionCollection.length}`;