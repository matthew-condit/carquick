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
'../fotos/Lexus-Logo.jpg','../fotos/marcedes-benz-logo.jpg', '../fotos/toyota.jpg', '../fotos/volkswagen.logo.jpg', '../fotos/cadillac-logo.jpg',
'../fotos/audi-logo.jpg', '../fotos/subaru-logo.jpg', '../fotos/tesla-logo.jpg', '../fotos/maserati-logo.jpg']



//function to track the current question and increase the score if the correct answer is selected
function increaseNumber(){
    STORE.currentQuestion++
}

function increaseScore(){
    STORE.totalScore++
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
        $(".question_counter").html(STORE.currentQuestion + 1 + " / " + STORE.questions.length)
        $(".score_counter").html(STORE.totalScore + " / " + STORE.questions.length)
    })
    console.log("`beginTheLogoQuiz` has executed")
}

function answerPrompt(){
    $(".image").append(
        `<img class="current_logo" src="${logo[STORE.currentQuestion]}">`
    )
    $(".question_options").append(
        `<div class="button_container">
            <input type=radio id="button_option" name=test1 required unchecked value="${STORE.questions[STORE.currentQuestion].options[0]}">${STORE.questions[STORE.currentQuestion].options[0]}<br>
            <input type=radio id="button_option" name=test1 required unchecked value="${STORE.questions[STORE.currentQuestion].options[1]}">${STORE.questions[STORE.currentQuestion].options[1]}<br>
            <input type=radio id="button_option" name=test1 required unchecked value="${STORE.questions[STORE.currentQuestion].options[2]}">${STORE.questions[STORE.currentQuestion].options[2]}<br>
            <input type=radio id="button_option" name=test1 required unchecked value="${STORE.questions[STORE.currentQuestion].options[3]}">${STORE.questions[STORE.currentQuestion].options[3]}<br>
        </div>
        <div>
            <button class="submit_answer">Submit!</button>
        </div>`
    ); 
    $(".submit_answer").submit(submitAnswer(), event.preventDefault())
}
function submitAnswer(){
    /* when this button is hit, the answer is highlighted in a green border, and the next button appears
    to go on to the next question. The score and question number will both update by 1  */
    $(".submit_answer").click(function(event){
        event.preventDefault();
            if (($("input[name='test1']:checked").val()) === STORE.questions[STORE.currentQuestion].answer) {
                $(".question_options").prepend(
                    `<div id="given_answer">
                        <p>That's right! Good Job!</p>
                    </div>`
                ), increaseScore();
                theNextButton();
                $(".score_counter").html(STORE.totalScore + " / " + STORE.questions.length)
            } else if (!$("input[name='test1']:checked").val()) {
                alert('Please choose an option')
             }
            else {
                $(".question_options").prepend(
                `<div id="given_answer">
                    <p>WRONG! This is the ${STORE.questions[STORE.currentQuestion].answer} logo</p>
                </div>`
                ), theNextButton();
            }
    })
}

function theNextButton(){
    /* when this button is hit, the next question will appear. Specifically, the title will stay the same, but the 
    logo as well as the four possible questions will update. The "next" button will dissapear again until the next
    answer is selected */
    console.log("`theNextButton` has executed")
    if (STORE.currentQuestion < 11){
        $(".submit_answer").replaceWith(`<button class="next_question">Next Question!</button>`)
        loadNextQuestion();
        } else {
            $(".submit_answer").replaceWith(`<button class="final_question">Show My Results!</button>`)
            showMyResults();
    }
}

function loadNextQuestion(){
    $(".next_question").click(function(event){
        $("img").remove();
        $(".button_container").remove();
        $("#given_answer").remove();
        $(this).remove();
        increaseNumber();
        answerPrompt();
        $(".question_counter").html(STORE.currentQuestion + 1 + " / " + STORE.questions.length)
    })
}

function showMyResults(){
    /* at the end of the 12th question, the page will update and show one of 4 pages based on the score. 
    A score of between 0 and 3 will show the messed-up car. A score of between a 4 and a 7 will show an old
    minivan. A score of between 8-11 will show a nice gray car. A score of 12 will show the 
    red sports car. There will also appear a personalized message as well as a button to restart the quiz*/
    $(".final_question").click(function(event){
        $(".image_and_options").remove()
        $(".logo_question").replaceWith(
            `<h2>You got ${STORE.totalScore} / ${STORE.questions.length} car logos!`)
        if (STORE.totalScore >= 11){
            $(".results").append(
                `<div>
                    <img src="../fotos/yellow-sports-car.jpg">
                </div>
                <div>
                    <p>Incredible! You knew every logo! Outstanding job!</p>
                </div>
                
                <button class="reset">Click to take another lap!</button>`
            )
        } else if (STORE.totalScore >= 8){
            $(".results").append(
                `<div>
                    <img src="../fotos/not-too-shabby-car.jpg">
                </div>
                <div>
                    <p>Pretty good, pretty good. Not perfect but still pretty good</p>
                </div>
                
                <button class="reset">Click to take another lap!</button>`
            )
        } else if (STORE.totalScore >=4){
            $(".results").append(
                `<div>
                    <img src="../fotos/old-minivan.jpg">
                </div>
                <div>
                    <p>That was....mehhh. You're fine....not great, just....fine</p>
                </div>
                
                <button class="reset">Click to take another lap!</button>`
            )
        } else {
            $(".results").append(
            `<div>
                    <img src="../fotos/clunker.jpg">
                </div>
                <div>
                    <p>That was awful! You should study up on your car logos</p>
                </div>
                
                <button class="reset">Click to take another lap!</button>`
            )
        }
 })
}

function retryQuiz(){
    /* this button will be at the bottom of all of the final scores, and it will reshow the home page and will 
    restart the score at zero. It will allow the user to flip through the quiz all over again */
    console.log("`retryQuiz` has executed")
    $(".reset").click(function(event){
        alert("peter these are parachusetes")
        /*STORE.currentQuestion = 0
        STORE.totalScore = 0
        $(".question_counter").html(STORE.currentQuestion + 1 + " / " + STORE.questions.length)
        $(".score_counter").html(STORE.totalScore + " / " + STORE.questions.length)
        $(".results").remove()
        $(".image_and_options").prepend(answerPrompt()) */
    })
}

function thingyTest(){
    beginTheLogoQuiz();
    theNextButton();
    retryQuiz();
    submitAnswer();
}
$(thingyTest);




