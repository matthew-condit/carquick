






const startQuizButtonClicked = () => {
  hideIntroSection();
  displayCurrentQuestion();
}


const showRetryButton = () => {

    };

showResultsSection = () => {
    $(imageOptions).hide();
    $(resultsSection).show();
    resultsSection.replaceWith(` same stuff you had before, it was all good.`);
    showRetryButton();
}

showResultsButton = () => {
  $(resultsButton).click((e) => {
  })
};

attachSubmitHandlerToButtonIRendered = () => {
  $(submitButton).click(() => {
    const guess = findAnswerFromUser();
    doStuffIfGuessIsRight();
    if (right) {
      showWooPrompt()
    } else {
      showBooPrompt()
    }
    if (lastQuestion) {
      showResultsButton();
    } else {
      showNExtButton();
    }

  });
}

const displayCurrentQuestion = () => {
  const currnetQuestionNumber = Store.currentNumber;
  const question = Store.options[currnetQuestionNumber]
  // only here can you replace stuff
  imageOtpions.replaceWith(`
    all my html
    for all of it
    including my submit button
  `);


  attachSubmitHandlerToButtonIRendered();
}



const restartButtonClicked = () => {
  hideResultsSection();
  resetStore();
  displayCurrentQuestion();
};




const setupQuiz = () => {
  // All dom is already in the html file, it's just hidden
  // try to minimally remove or replaceWIth
  setupAllMyEventHandlers();
};
