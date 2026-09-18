const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which language is used to style a webpage?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        correct: 1
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            "variable",
            "var",
            "string",
            "declare"
        ],
        correct: 1
    },

    {
        question: "Which method adds an element to the end of an array?",
        answers: [
            "push()",
            "pop()",
            "shift()",
            "remove()"
        ],
        correct: 0
    },

    {
        question: "Which method is used to select an element by ID?",
        answers: [
            "getElementById()",
            "getElement()",
            "selectById()",
            "findElement()"
        ],
        correct: 0
    }
];


let currentQuestion = 0;
let userScore = 0;


const questionElement = document.getElementById("question");

const answersElement = document.getElementById("answers");

const nextButton = document.getElementById("nextBtn");

const questionNumberElement =
    document.getElementById("questionNumber");

const scoreElement =
    document.getElementById("score");

const resultElement =
    document.getElementById("result");


function showQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    questionNumberElement.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    scoreElement.textContent =
        `Score: ${userScore}`;

    answersElement.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer-btn");

        button.addEventListener("click", () => {

            checkAnswer(index, button);

        });

        answersElement.appendChild(button);
    });
}


function checkAnswer(selectedAnswer, selectedButton) {

    const correctAnswer =
        questions[currentQuestion].correct;

    const allButtons =
        document.querySelectorAll(".answer-btn");

    allButtons.forEach(button => {

        button.disabled = true;

    });


    if (selectedAnswer === correctAnswer) {

        selectedButton.classList.add("correct");

        userScore++;

        scoreElement.textContent =
            `Score: ${userScore}`;

    } else {

        selectedButton.classList.add("wrong");

        allButtons[correctAnswer].classList.add("correct");
    }
}


nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();
    }

});


function showResult() {

    questionElement.textContent =
        "Quiz Completed! 🎉";

    answersElement.innerHTML = "";

    questionNumberElement.textContent =
        "Finished";

    nextButton.style.display = "none";

    resultElement.textContent =
        `Your Score: ${userScore} / ${questions.length}`;
}


showQuestion();