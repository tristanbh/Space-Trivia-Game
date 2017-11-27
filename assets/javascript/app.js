var currentQuestion = 0;
let correct = 0;
var wrong = 0;
var answers = [];
var myAnswers = [];

var timerNumber = 60;
var intervalId;

var myQuestion = document.getElementById("questions");
var myHeader = document.getElementById("questionHeader");

var answers_1 = document.getElementById("answers_1");
var answers_2 = document.getElementById("answers_2");
var answers_3 = document.getElementById("answers_3");
var answers_4 = document.getElementById("answers_4");

document.getElementById("answers_1").addEventListener("click", myAnswer1);
document.getElementById("answers_2").addEventListener("click", myAnswer2);
document.getElementById("answers_3").addEventListener("click", myAnswer3);
document.getElementById("answers_4").addEventListener("click", myAnswer4);

document.getElementById("nextButton").addEventListener("click", next);
// document.getElementById("prevButton").addEventListener("click", previous);

function timerRun() {
      intervalId = setInterval(decrement, 1000);
    }

function decrement() {

      //  Decrease number by one.
      timerNumber--;

      //  Show the number in the #show-number tag.
document.getElementById("timerFunction").innerHTML = timerNumber;

    if (timerNumber === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        endGame();
    function endGame(){
    document.getElementById("questionHeader").innerHTML = 'Number correct: ' + correct + '<br>' + 'Number wrong: ' + wrong ;
    document.getElementById("questions").innerHTML = 'Test';
    document.getElementById("nextButton").innerHTML = '<a href="index.html">Start Over</a>';
    document.getElementById("prevButton").innerHTML = '';

    }
}
}

    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }


console.log(timerNumber);

timerRun();

function next() {
    currentQuestion++;
    console.log('number correct: ' + correct);
    console.log('number wrong: ' + wrong);
    console.log(currentQuestion);
    if (currentQuestion === 10) {
        endGame();
        function endGame(){
    document.getElementById("questionHeader").innerHTML = 'Number correct: ' + correct + '<br>' + 'Number wrong: ' + wrong ;
    document.getElementById("questions").innerHTML = 'Test';
    document.getElementById("nextButton").innerHTML = '<a href="index.html">Start Over</a>';
    document.getElementById("prevButton").innerHTML = '';


}
    } else {


    myHeader.innerHTML = questionArray [currentQuestion][(0)];
    answers_1.innerHTML = questionArray[currentQuestion][(2)];
    answers_2.innerHTML = questionArray[currentQuestion][(3)];
    answers_3.innerHTML = questionArray[currentQuestion][(4)];
    answers_4.innerHTML = questionArray[currentQuestion][(5)];
}
}

// function previous() {
//     currentQuestion--;
//     console.log(currentQuestion);
//     myHeader.innerHTML = questionArray[currentQuestion][(0)];
//     answers_1.innerHTML = questionArray[currentQuestion][(2)];
//     answers_2.innerHTML = questionArray[currentQuestion][(3)];
//     answers_3.innerHTML = questionArray[currentQuestion][(4)];
//     answers_4.innerHTML = questionArray[currentQuestion][(5)];
//     // checkPage(currentQuestion);
// }

var questionArray = [
    ['What is the distance between the sun and earth?', 2, '66,550,000 miles', '92,960,000 miles', '1,000,000 miles', '26,320,000 miles'],
    ['What percent of the solar system’s mass does the Sun hold?', 4, '50.0%','12.6%', '64.5%', '99.8%'],
    ['When was the Sun born?', 1, '4.6 billion years ago', '1 million years ago', '13.4 Billion years ago', '70 Million years ago'],
    ['What is the diameter of Earth?', 3, '25,000 miles', '9,563 miles', '7,918 miles', '16,439 miles'],
    ['Which Planet Has the Most Moons?', 1, 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    ['What is the diameter of Jupiter', 2, '38,763 miles', '86,881 miles', '113,650 miles', '18,680 miles'],
    ['The first human-made object to land on the moon was launched by which country?', 4, 'USA', 'China', 'Canada', 'The Soviet Union'],
    ['Which planet in our solar system spins the fastest?', 3, 'Mercury', 'Earth', 'Jupiter', 'Neptune'],
    ['How many people have walked on the moon?', 2, '2', '12', '4', '8'],
    ['Which is the largest of Mars two moons', 4, 'Io', 'Deimos', 'Ganymede', 'Phobos'],

];

function myAnswer1() {
    var answerId_1 = document.getElementById("1");
    answerId_1=1;
    myAnswers[currentQuestion] = answerId_1;
    if (questionArray[currentQuestion][1] == answerId_1) {
        console.log('Correct Answer');
        correct++;
    } else {
        console.log('Wrong Answer');
        wrong++;
    }
}
function myAnswer2() {
    var answerId_2 = document.getElementById("2");
    answerId_2=2;
    myAnswers[currentQuestion] = answerId_2;
    if (questionArray[currentQuestion][1] == answerId_2) {
        console.log('Correct Answer');
        correct++;

    } else {
        console.log('Wrong Answer');
        wrong++;
    }
}
function myAnswer3() {
    var answerId_3 = document.getElementById("3");
    answerId_3 = 3;
    myAnswers[currentQuestion] = answerId_3;
    if (questionArray[currentQuestion][1] == answerId_3) {
        console.log('Correct Answer');
        correct++;
    } else {
        console.log('Wrong Answer');
        wrong++;
    }
}
function myAnswer4() {        
    var answerId_4 = document.getElementById("4");
    answerId_4 = 4;

    myAnswers[currentQuestion] = answerId_4;
    if (questionArray[currentQuestion][1] == answerId_4) {
        console.log('Correct Answer');
        correct++;
    } else {
        console.log('Wrong Answer');
        wrong++;
    }
}

    myHeader.innerHTML = questionArray[currentQuestion][0];
    answers_1.innerHTML = questionArray[currentQuestion][(2)];
    answers_2.innerHTML = questionArray[currentQuestion][(3)];
    answers_3.innerHTML = questionArray[currentQuestion][(4)];
    answers_4.innerHTML = questionArray[currentQuestion][(5)];





