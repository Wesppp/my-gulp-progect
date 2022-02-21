const quizData = [
    {
        question: 'The well - known code from the Matrix actually denotes..',
        a: "director's name",
        b: 'year of release',
        c: 'sushi recipe',
        d: 'nothing',
        correct: 'c'
    },
    {
        question: 'Name the country with the highest life expectancy',
        a: 'China',
        b: 'Russia',
        c: 'Japan',
        d: 'USA',
        correct: 'a'
    },
    {
        question: 'At what age does longevity begin?',
        a: '60',
        b: '90',
        c: '70',
        d: '80',
        correct: 'b'
    },
    {
        question: 'How many kilometers in one mile?',
        a: '1.5 km',
        b: '1.6 km',
        c: '1.4 km',
        d: '1.7 km',
        correct: 'b'
    },
    {
        question: "How long did the Hundred Years' War last?",
        a: '100 years',
        b: '110 years',
        c: '117 years',
        d: '116 years',
        correct: 'd'
    }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.querySelector('.submit')

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach( (answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;
}

function deselectAnswers() {
    answerEls.forEach( (answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>
            Your result -> ${score}/${quizData.length}
            </h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
})