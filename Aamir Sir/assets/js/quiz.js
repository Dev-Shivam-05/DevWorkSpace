/**
 * Interactive Skills Assessment Quiz
 */

const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Management", "Home Tool Markup Language"],
        correct: 0
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["color", "bgcolor", "background-color", "fill"],
        correct: 2
    },
    {
        question: "How do you write 'Hello World' in an alert box in JavaScript?",
        options: ["msg('Hello World')", "alert('Hello World')", "prompt('Hello World')", "console.log('Hello World')"],
        correct: 1
    },
    {
        question: "Which Bootstrap class is used to create a responsive container?",
        options: ["container-fixed", "container-fluid", "container-responsive", "container-any"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const questionText = document.getElementById('question-text');
    const optionsArea = document.getElementById('options-area');
    
    if (!questionText) return;

    const currentQuiz = quizData[currentQuestion];
    questionText.textContent = `${currentQuestion + 1}. ${currentQuiz.question}`;
    
    optionsArea.innerHTML = '';
    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'btn btn-outline-secondary text-start p-3 rounded-3';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsArea.appendChild(button);
    });
}

function selectOption(index) {
    if (index === quizData[currentQuestion].correct) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('question-area').classList.add('d-none');
    document.getElementById('result-area').classList.remove('d-none');
    
    const scoreText = document.getElementById('score-text');
    const feedbackText = document.getElementById('feedback-text');
    
    const percentage = (score / quizData.length) * 100;
    scoreText.textContent = `${percentage}%`;
    
    if (percentage === 100) {
        feedbackText.textContent = "Perfect! You're a web development master!";
    } else if (percentage >= 75) {
        feedbackText.textContent = "Great job! You have a solid understanding of the basics.";
    } else {
        feedbackText.textContent = "Keep learning! Web development is a journey.";
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('question-area').classList.remove('d-none');
    document.getElementById('result-area').classList.add('d-none');
    loadQuiz();
}

function shareQuiz() {
    const text = `I just scored ${score}/${quizData.length} on Aamir Shaikh's Web Skills Quiz! Can you beat me?`;
    if (navigator.share) {
        navigator.share({
            title: 'My Quiz Results',
            text: text,
            url: window.location.href
        });
    } else {
        alert(text);
    }
}

document.addEventListener('DOMContentLoaded', loadQuiz);
