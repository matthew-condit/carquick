'use strict';
const STORE = {
    questions: [
    //question 1
    {options: ['Ford', 'General Motors', 'Cheverolet', 'Cadillac'], answer: 'Cheverolet'},
    //question 2
    {options: ['Lexus', 'Infiniti', 'Honda', 'Mitsubishi'], answer: 'Infiniti'},
    //question 3
    {options: ['Ferrari', 'Porche', 'Lamborghini', 'Jaguar'], answer: 'Ferrari'},
    //question 4
    {options: ['Lexus', 'Suburu', 'Lotus', 'Lincoln'], answer: 'Lexus'},
    //question 5
    {options: ['BMW', 'Nissan', 'Audi', 'Marcedes-Benz'], answer: 'Marcedes-Benz'},
    //question 6
    {options: ['Mazda', 'Toyota', 'Ford', 'General Motors'], answer: 'Toyota'},
    //question 7
    {options: ['BMW', 'Rolls Royce', 'Volkswagen', 'Bently'], answer: 'Volkswagen'},
    //question 8
    {options: ['Cadillac', 'Hummer', 'Jeep', 'Bucker'], answer: 'Cadillac'},
    //question 9
    {options: ['Bently', 'Acura', 'Audi', 'Mazda'], answer: 'Audi'},
    //question 10
    {options: ['Mini', 'Subaru', 'Ford', 'Chrysler'], answer: 'Subaru'},
    //question 11
    {options: ['Saturn', 'Fiat', 'Tatra', 'Tesla'], answer: 'Tesla'},
    //question 12
    {options: ['Maserati', 'Saturn', 'Lambougini', 'Mercury'], answer: 'Maserati'}
    ],
    currentQuestion: 0,
    totalScore: 0
}

const logo = ["../fotos/Chevrolet-logo.jpg", '../fotos/infiniti-logo.jpg', '../fotos/Ferrari-Logo.jpg',
'../fotos/Lexus-Logo.jpg', '../fotos/toyota.jpg', '../fotos/volkswagen.logo.jpg', '../fotos/cadillac-logo.jpg',
'../fotos/audi-logo.jpg', '../fotos/subaru-logo.jpg', '../fotos/tesla-logo.jpg', '../fotos/maserati-logo.jpg']



//function to track the current question and increase the score if the correct answer is selected
function increaseNumber(){
    STORE.currentQuestion++

}



function beginTheLogoQuiz(){
    /* when this button is activated, the <h1>, <h2>, paragraph tags, and button should disappear
    replaced with the content of the quiz (i.e. either removed or hidden). It should also be replaced
    with the first question of the form, including the <h1>Which logo is this</h1>, the logo image,
    and the four buttons to represent the options */
    $(".start_button").click(function(event){
        $("header").remove();
        $(".logo_question").toggle();
        $(".image_and_options").prepend(answerPrompt())
        $(".question_counter").append(
            STORE.currentQuestion + 1 + " / 12"
        )
    })
    console.log("`beginTheLogoQuiz` has executed")

}
function answerPrompt(){
    $(".image").append(
        `<div>
        <img src="${logo[STORE.currentQuestion]}">
        </div`
    )
    $(".question_options").append(
        `<div>
        <input type=radio id="button_option" name=test1 required>${STORE.questions[STORE.currentQuestion].options[0]}<br>
        <input type=radio id="button_option" name=test1 required>${STORE.questions[STORE.currentQuestion].options[1]}<br>
        <input type=radio id="button_option" name=test1 required>${STORE.questions[STORE.currentQuestion].options[2]}<br>
        <input type=radio id="button_option" name=test1 required>${STORE.questions[STORE.currentQuestion].options[3]}
        <div>
        <div>
            <button class="submit_answer">Submit!</button>
        </div>`
    ); 
    //$(".submit_answer").submit(submitAnswer())
}


function submitAnswer(){
    /* when this button is hit, the answer is highlighted in a green border, and the next button appears
    to go on to the next question. The score and question number will both update by 1  */
    $(".submit_answer").click(function(event){
        event.preventDefault()
            if ($("#button_option") === STORE.questions[STORE.currentQuestion].answer) {
                alert("hello, Dave")
            }
            else {
                alert(("testing wrong answer"))
            }
    })
}

function theNextButton(){
    /* when this button is hit, the next question will appear. Specifically, the title will stay the same, but the 
    logo as well as the four possible questions will update. The "next" button will dissapear again until the next
    answer is selected */
    console.log("`theNextButton` has executed")

}

function showMyResults(){
    /* at the end of the 12th question, the page will update and show one of 4 pages based on the score. 
    A score of between 0 and 3 will show the messed-up car. A score of between a 4 and a 7 will show an old
    minivan. A score of between 7-10 will show a nice gray car. A score of either 11 or 12 will show the 
    red sports car. There will also appear a personalized message as well as a button to restart the quiz*/
    console.log("`showMyResults` has executed")
}

function retryQuiz(){
    /* this button will be at the bottom of all of the final scores, and it will reshow the home page and will 
    restart the score at zero. It will allow the user to flip through the quiz all over again */
    console.log("`retryQuiz` has executed")
}

function thingyTest(){
    beginTheLogoQuiz();
    theNextButton();
    showMyResults();
    retryQuiz();
    submitAnswer();
}
$(thingyTest);