alert("HELLO?????");
console.log("R U WORKINGG????");

// Linked to HTML
const mainScreen = document.querySelector(".main-screen");
const questionScreen = document.querySelector(".questions-screen");
const highscoresScreen = document.querySelector(".highscoreScreen");
const enterHighscores = document.querySelector(".enterUserscore");
const startButton = document.querySelector(".startQuizBtn");
const timerRight = document.querySelector(".scoreTracker");
const backButton1 = document.querySelector("back-btn1");
const backButton2 = document.querySelector("back-btn2");
const submitButton = document.querySelector("submitBtn");
const HSLeaderboard = document.querySelector(".highscoreTracker");
const userInitials = document.querySelector(".userInitials");
const userResult = document.querySelector(".userResult");
const userScore = document.querySelector(".userScore");
const clearHSLeaderboard = document.querySelector(".delHighscore");
const endQuiz = document.querySelector(".endQuiz");

// Question pages
const quizQuestion = document.querySelector(".questions");
const answerA = document.querySelector(".answer1");
const answerB = document.querySelector(".answer2");
const answerC = document.querySelector(".answer3");
const answerD = document.querySelector(".answer4");
const qAnswer = document.querySelector(".results");

// Global Variables
const userAnswer;
const timer;
const count;
const currentQ;
const rightAnswer;
const complete = false;
const selectedAnswer;
const highscores;

const questions = {
    questionOne: {
        Q: "What does JS stand for?",
        A: {
            a: "Just Swimming",
            b: "Javascript",
            c: "Java Script"
        },
        rightAnswer: "JavaScript"
    },
    questionTwo: {
        Q: "Javascrpit language is _?",
        A: {
            a: "Object-oriented",
            b: "High-level",
            c: "Assembly-language"
        },
        rightAnswer: "Object-based"
    },
    questionThree: {
        Q: "Conditional Expression is also known as _?",
        A: {
            a: "Alternative to if-else",
            b: "Switch statement",
            c: "if-then-else statement"
        },
        rightAnswer: "Immediate if"
    },
    questionFour: {
        Q: "What is a block statement?",
        A: {
            a: "Conditional block",
            b: "Both conditional block and a single statement",
            c: "Block that contains a single statement"
        },
        rightAnswer: "Block that combines a number of statements into a single compound statement"
    },
    questionFive: {
        Q: "When the interpreter encounters an empty statement, what will it do?",
        A: {
            a: "Shows a warning",
            b: "Prompts to complete the statement",
            c: "Throws an error"
        },
        rightAnswer: "Ignores the statements"
    },
    questionSix: {
        Q: "The 'function' and 'var' are known as _?",
        A: {
            a: "Keywords",
            b: "Data types",
            c: "Prototypes"
        },
        rightAnswer: "Declaration statements"
    },
    questionSeven: {
        Q: "Which of the following variables takes precedence over the others if the names are the same?",
        A: {
            a: "Global variable",
            b: "Two of the above",
            c: "None of the above"
        },
        rightAnswer: "The local element"
    },
    questionEight: {
        Q: "Which one of the following is the correct way for calling the JavaScript code?",
        A: {
            a: "Preprocessor",
            b: "Triggering Event",
            c: "RMI"
        },
        rightAnswer: "Function/Method"
    },
    questionNine: {
        Q: "Which of the following option is used as hexadecimal literal beginning?",
        A: {
            a: "00",
            b: "0x",
            c: "0X"
        },
        rightAnswer: "Both 0x and 0X"
    },
    questionTen: {
        Q: "Which of the following type of a variable is volatile?",
        A: {
            a: "Dynamic variable",
            b: "Volatile variable",
            c: "Immutable variable"
        },
        rightAnswer: "Mutable variable"
    },
};

// Question's answers options
function generateQuestion() {
    if (currentQ == 0) {
        quizQuestion.textContent = questions.questionOne.Q;
        answerA.textContent = questions.questionOne.A.a;
        answerB.textContent = questions.questionOne.A.b;
        answerC.textContent = questions.questionOne.A.rightAnswer;
        answerD.textContent = questions.questionOne.A.c;
        rightAnswer = questions.questionOne.rightAnswer;
        currentQ++;
    } else if (currentQ == 1) {
        quizQuestion.textContent = questions.questionTwo.Q;
        answerA.textContent = questions.questionTwo.A.a;
        answerB.textContent = questions.questionTwo.A.b;
        answerC.textContent = questions.questionTwo.A.rightAnswer;
        answerD.textContent = questions.questionTwo.A.c;
        rightAnswer = questions.questionOne.rightAnswer;
        currentQ++;
    } else if (currentQ == 1) {
        quizQuestion.textContent = questions.questionTwo.Q;
        answerA.textContent = questions.questionTwo.A.a;
        answerB.textContent = questions.questionTwo.A.b;
        answerC.textContent = questions.questionTwo.A.rightAnswer;
        answerD.textContent = questions.questionTwo.A.c;
        rightAnswer = questions.questionOne.rightAnswer;
        currentQ++;
    } else if (currentQ == 1) {
        quizQuestion.textContent = questions.questionTwo.Q;
        answerA.textContent = questions.questionTwo.A.a;
        answerB.textContent = questions.questionTwo.A.b;
        answerC.textContent = questions.questionTwo.A.rightAnswer;
        answerD.textContent = questions.questionTwo.A.c;
        rightAnswer = questions.questionOne.rightAnswer;
        currentQ++;
    } else if (currentQ == 1) {
        quizQuestion.textContent = questions.questionTwo.Q;
        answerA.textContent = questions.questionTwo.A.a;
        answerB.textContent = questions.questionTwo.A.b;
        answerC.textContent = questions.questionTwo.A.rightAnswer;
        answerD.textContent = questions.questionTwo.A.c;
        rightAnswer = questions.questionOne.rightAnswer;
        currentQ++;
    } else if (currentQ == 1) {
        quizQuestion.textContent = questions.questionTwo.Q;
        answerA.textContent = questions.questionTwo.A.a;
        answerB.textContent = questions.questionTwo.A.b;
        answerC.textContent = questions.questionTwo.A.rightAnswer;
        answerD.textContent = questions.questionTwo.A.c;
        rightAnswer = questions.questionOne.rightAnswer;
        currentQ++;
    } else if (currentQ == 1) {
        quizQuestion.textContent = questions.questionTwo.Q;
        answerA.textContent = questions.questionTwo.A.a;
        answerB.textContent = questions.questionTwo.A.b;
        answerC.textContent = questions.questionTwo.A.rightAnswer;
        answerD.textContent = questions.questionTwo.A.c;
        rightAnswer = questions.questionOne.rightAnswer;
        currentQ++;
    } else if (currentQ == 1) {
        quizQuestion.textContent = questions.questionTwo.Q;
        answerA.textContent = questions.questionTwo.A.a;
        answerB.textContent = questions.questionTwo.A.b;
        answerC.textContent = questions.questionTwo.A.rightAnswer;
        answerD.textContent = questions.questionTwo.A.c;
        rightAnswer = questions.questionOne.rightAnswer;
        currentQ++;
    } else if (currentQ == 1) {
        quizQuestion.textContent = questions.questionTwo.Q;
        answerA.textContent = questions.questionTwo.A.a;
        answerB.textContent = questions.questionTwo.A.b;
        answerC.textContent = questions.questionTwo.A.rightAnswer;
        answerD.textContent = questions.questionTwo.A.c;
        rightAnswer = questions.questionOne.rightAnswer;
        currentQ++;
    } else if (currentQ == 1) {
        quizQuestion.textContent = questions.questionTwo.Q;
        answerA.textContent = questions.questionTwo.A.a;
        answerB.textContent = questions.questionTwo.A.b;
        answerC.textContent = questions.questionTwo.A.rightAnswer;
        answerD.textContent = questions.questionTwo.A.c;
        rightAnswer = questions.questionOne.rightAnswer;
        currentQ++;
    } else if (currentQ == 11) {
        renderenterHighscores();
        complete = true;
    }
}


function init() {
    rendermainScreen();
    generateQuestion();
    getHighscores;
};

// Timer for quiz
function qTimer() {
    timer = setInterval(function () {
        count--;
        timerElement.textContent = "Score: " + count;
        if (count < 0) {
            count = 0;
        }
        if (count <= 0 || complete === true) {
            timerElement.textContent = "Score: " + count;
            clearInterval(timer);
            renderenterHighscores();
        }


    }, 150);
};


// Stores user scores
function storeScores() {
    return JSON.parse(localStorage.getItem("highscores")) || [];
};

//user highscores
function getHighscores() {
    highscores = storeScores();
    userResult.innerHTML = highscores.map(score => {
        return `<li class="highscore">${score.user}</li>`;
    }).join("");
    userScore.innerHTML = highscores.map(score => {
        return `<li class="highscore">${score.score}</li>`;
    }).join("");
};

function setHighscores() {
    highscores = storeScores();
    const score = {
        user: userInitials.value,
        score: count,
    }
    highscores.push(score);
    localStorage.setItem(highscores, JSON.stringify(highscores));
};

// first screen
function rendermainScreen() {
    mainScreen.setAttribute("style", "display: flex;");
    questionScreen.setAttribute("style", "display: none;");
    highscoresScreen.setAttribute("style", "display: none;");
    enterHighscores.setAttribute("style", "display: none;");
    timerRight.textContent = "Score: 200";
};

// question screens
function renderquestionScreen() {
    questionScreen.setAttribute("style", "display: flex;");
    mainScreen.setAttribute("style", "display: none;");
    highscoresScreen.setAttribute("style", "display: none;");
    enterHighscores.setAttribute("style", "display: none;");
};

//highscore screens
function renderhighscoreScreen() {
    getHighscores();
    highscoreScreen.setAttribute("style", "display: flex;");
    mainScreen.setAttribute("style", "display: none;");
    questionScreen.setAttribute("style", "display: none;");
    enterHighscores.setAttribute("style", "display: none;");
};

function renderenterHighscores() {
    enterHighscores.setAttribute("style", "display: flex;");
    mainScreen.setAttribute("style", "display: none;");
    questionScreen.setAttribute("style", "display: none;");
    highscoreScreen.setAttribute("style", "display: none;");
    complete = false;
    currentQ = 0;
    generateQuestion();
};

//starts the quiz
function startQuiz() {
    count = 100;
    renderquestionScreen();
    timerRight();
    qAnswer.setAttribute("style", "display: none;");
};

//user chooses correct answer
function correctAnswer() {
    qAnswer.textContent = "You got it right!";
    qAnswer.setAttribute("style", "display: inline;");
};

//user chooses wrong answer
function wrongAnswer() {
    qAnswer.textContent = "Try again next time!";
    qAnswer.setAttribute("style", "display: inline;");
    count = count - 10;
};

// highscore leaderboard
function HSLeaderboard() {
    localStorage.removeItem("highscores");
};

// quiz start button
startButton.addEventListener("click", startQuiz);

//highscore leaderboard button
HSLeaderboard.addEventListener("click", function() {
    renderhighscoresScreen();
    clearInterval(timer);
    count = 200;
    timerElement.textContent = "Score: " + count;
});

// back buttons
backButton1.addEventListener("click", function() {
    rendermainScreen();
});

backButton2.addEventListener("click", function () {
    rendermainScreen();
    currentQ = 0; 
    generateQuestion();
});

//answer buttons
answerA.addEventListener("click", function() {
    if (answerA.textContent == rightAnswer) {
        correctAnswer();
        generateQuestion();
    } else {
        wrongAnswer();
        generateQuestion();
    }
});

answerB.addEventListener("click", function() {
    if (answerB.textContent == rightAnswer) {
        correctAnswer();
        generateQuestion();
    } else {
        wrongAnswer();
        generateQuestion();
    }
});

answerC.addEventListener("click", function() {
    if (answerC.textContent == rightAnswer) {
        correctAnswer();
        generateQuestion();
    } else {
        wrongAnswer();
        generateQuestion();
    }
});

answerD.addEventListener("click", function() {
    if (answerD.textContent == rightAnswer) {
        correctAnswer();
        generateQuestion();
    } else {
        wrongAnswer();
        generateQuestion();
    }
});

//submit button
submitButton.addEventListener("click", function() {
    setHighscores();
    renderhighscoreScreen();
    getHighscores();
    userInitials.value = "";
});

//clear HS leaderboard button
clearHSLeaderboard.addEventListener("click", function () {
    HSLeaderboard();
    renderhighscoreScreen();
});

//ends the quiz
endQuiz.addEventListener("click", function () {
    currentQ = 0; 
    generateQuestion();
    clearInterval(timer);
    count = 200;
    timerElement.textContent = "Score: " + count;
    rendermainScreen();
});

init();