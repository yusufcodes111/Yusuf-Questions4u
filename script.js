const questions = [
    {
        question: "What is  my other name?",
        answers: [
            { text: "Ayomide", correct: false},
            { text: "Adeposi", correct: false},
            { text: "Adewale", correct: true},
            { text: "Adedapo", correct: false},
        ]
    },
    {
        question: "What is my favorite sport?",
        answers: [
            { text: "Football", correct: false},
            { text: "Basket ball", correct: false},
            { text: "Relay race", correct: true},
            { text: "Ludo", correct: false},
        ]
    },
    {
        question: "My love name?",
        answers: [
            { text: "Toyin", correct: false},
            { text: "Nofisat", correct: false},
            { text: "Toyosi", correct: true},
            { text: "Islamiat", correct: false},
        ]
    },
    {
        question: "My nickname in secondary school?",
        answers: [
            { text: "Yuslove", correct: false},
            { text: "Imported", correct: true},
            { text: "Wale", correct: false},
            { text: "Prince", correct: false},
        ]
    },
    {
        question: "My love language?",
        answers: [
            { text: "Loyalty", correct: true},
            { text: "Money", correct: false},
            { text: "Sex", correct: false},
            { text: "Food", correct: false},
        ]
    },
    {
        question: "My sisters name?",
        answers: [
            { text: "Tosin & Kemi", correct: false},
            { text: "Aminat & Zainob", correct: false},
            { text: "Adiat & Idayat", correct: true},
            { text: "Adiat & Aishat", correct: false},
        ]
    },
    {
        question: "My favorite place?",
        answers: [
            { text: "The beach", correct: false},
            { text: "Eatery", correct: false},
            { text: "The pool", correct: true},
            { text: "Club", correct: false},
        ]
    },
    {
        question: "My birthday?",
        answers: [
            { text: "July 22", correct: true},
            { text: "June 21", correct: false},
            { text: "June 27", correct: false},
            { text: "June 7", correct: false},
        ]
    },
    {
        question: "Brand name of my laptop?",
        answers: [
            { text: "Apple", correct: false},
            { text: "Dell", correct: true},
            { text: "Acer", correct: false},
            { text: "HP", correct: false},
        ]
    },
    {
        question: "My age?",
        answers: [
            { text: "24", correct: false},
            { text: "26", correct: false},
            { text: "27", correct: false},
            { text: "25", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "Test Completed!";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.lenght){
        startQuiz();
    }else{
      handleNextButton(); 
    }
});


startQuiz();


