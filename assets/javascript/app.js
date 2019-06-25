//global variable
let intervalId
let timer = 45;
let score = 0;
let wrong = 0;
let unanswered = 0;
let numbOfQuestions = 5;
let answers = ['a', 'a', 'c', 'a', 'a'];

//when game start show only container1
$(document).ready( function() {


$('#container1').show();
$('#container2').hide();
$('#container3').hide();
$('#timerDiv').hide();

//when start button is click, show only container2
$('#startBtn').click(displayContainer2)

//show total time on DOM
$('#timer-text').text(timer)

function displayContainer2() {
    $('#container1').hide();
    $('#container2').show();
    $('#container3').hide();
    $('#timerDiv').show();

    //timer starts
    intervalId = setInterval(decrement, 1000)
};

function decrement() {
    timer--;
    //display time on DOM
    $('#timer-text').text(timer)

    // integer of timer change colors
    if(timer <= 30) {
        $('#timer-text').css('color', 'yellow')
    }
    if(timer <= 20) {
        $('#timer-text').css('color', 'orange')
    }
    if(timer <= 10) {
        $('#timer-text').css('color', 'red')
    }

    //when time is up
        //stop the time by running the stop function
        //show only container3
        //fire the result function
    if(timer === 0) {
        result()
    }
}

//stop timer
function stop() {
    clearInterval(intervalId)
}


//when you click the submit button
    //stop the timer
    //show the results
$('#submit-btn').on('click', result)


//logic of game are in a function that will be fire after time runs out
function result() {
    stop();
    $('#container1').hide();
    $('#container2').hide();
    $('#container3').show();

    let q1 = document.forms['quiz']['q1'].value;
    let q2 = document.forms['quiz']['q2'].value;
    let q3 = document.forms['quiz']['q3'].value;
    let q4 = document.forms['quiz']['q4'].value;
    let q5 = document.forms['quiz']['q5'].value;

    //check user's answer - loop through the numbOfQuestions
    for ( let i = 1; i <= numbOfQuestions; i++ ){
        if (eval('q' + i) == ''){
            unanswered++;
        }
   
        else if (eval('q' + i) == answers[i - 1]) {
            score++
        }
        else (
            wrong++
        )
    }

    //print results
    $('#correct-answers').text(score)
    $('#incorrect-answers').text(wrong)
    $('#unanswered').text(unanswered)

}

})