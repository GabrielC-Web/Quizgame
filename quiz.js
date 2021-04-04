// -------------------- VARIABLES -------------------- //
const startButton = document.getElementById('start-btn');
const initialDisplay = document.getElementById('initial-part');
const gamingDisplay = document.getElementById('gaming-part');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const counterBox = document.getElementById('counterBox');

let picQuestion, currentQuestionIndex
let pointsCountR = 0;
let pointsCountW = 0;

let questionElement = document.getElementById('question-box');
let questionItself = document.getElementById('question')

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion();
});

let answerBtn = document.getElementById('answerBtn-part')



// -------------------- Functions ------------------ //

function setNextQuestion() {
    resetState()
    showQuestion(picQuestion[currentQuestionIndex])
}

function startGame() {
    counterBox.classList.add('hide')
    initialDisplay.classList.add('hide');
    nextButton.classList.remove('hide')
    gamingDisplay.classList.remove('hide');
    restartButton.classList.add('hide')
    picQuestion = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    pointsCountW = 0;
    pointsCountR = 0;
    document.getElementById('counterR').innerHTML = ''
    document.getElementById('counterW').innerHTML = ''
    loadQuestion()
    
}

function loadQuestion() {
    resetState()
    showQuestion(picQuestion[currentQuestionIndex]);
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function showQuestion(questions) {
    questionItself.innerText = questions.question
    questionItself.style.textAlign = 'center'
    
    questions.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('answer')
        button.classList.add('btn')
        answerBtn.appendChild(button)
        questionElement.appendChild(answerBtn)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        answerBtn.addEventListener('click', answerQuestion);
    });
    
}

function answerQuestion(e) {
    counterBox.classList.remove('hide')
    const pressedButton = e.target
    const correct = pressedButton.dataset.correct
    setStatusClass(document.body, correct)
    answerBtn.removeEventListener('click', answerQuestion)
    Array.from(answerBtn.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)

    })

    if (pressedButton.dataset = correct) {
        pointsCountR++
        pointsCountW--
        document.getElementById('counterR').innerHTML = pointsCountR + ' - ✓'
    }

    if (pressedButton != correct) {
        pointsCountW++
        document.getElementById('counterW').innerHTML = pointsCountW + ' - X'
    }
    
    if (picQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        restartButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: '¿Qué disuelve mejor el azúcar, el agua fría o el agua caliente?',
        answers: [
            {text: 'El agua fria, daa', correct: false},
            {text: 'Es obvio que el agua caliente', correct: true},
            {text: 'Ambas, da igual', correct: false},
            {text: 'El agua no disuelve el azúcar', correct: false}
        ],
        position: '1'
    },
    {
        question: '¿Quién es Barney Stinson?',
        answers: [
            {text: 'El presidente Australia', correct: false},
            {text: 'Un personaje de una serie de comedia', correct: true},
            {text: 'El inventor de la silla de ruedas', correct: false},
            {text: 'Un famoso pintor', correct: false}
        ],
        position: 2
    },
    {
        question: '¿Quién es OmniMan?',
        answers: [
            {text: 'El mejor amigo de Superman', correct: false},
            {text: 'Una contraparte del Hombre de Acero', correct: true},
            {text: 'Uno de los enemigos de Batman', correct: false},
            {text: 'Un alienígena', correct: true}
        ],
        position: 3
    },
    {
        question: '¿Por qué los barcos flotan sobre al agua?',
        answers: [
            {text: 'Porque son menos densos que el agua', correct: true},
            {text: 'Porque pesan menos que el agua', correct: false},
            {text: 'Están hechos de materiales ligeros', correct: false},
            {text: 'Son más densos que el agua', correct: false}
        ],
        position: 4
    },
    {
        question: '¿Cuánto es 2x4-5?',
        answers: [
            {text: '-40', correct: false},
            {text: '2', correct: false},
            {text: '3', correct: true},
            {text: '-2', correct: false}
        ],
        position: 5
    },
    {
        question: '¿Quién interpreta a Steve Rogers, el Capitán América en el UCM?',
        answers: [
            {text: 'Chris Hensworth', correct: false},
            {text: 'Chris Pratt', correct: false},
            {text: 'Chris Evans', correct: true},
            {text: 'Anthony Mackie', correct: false}
        ],
        position: 6
    },
    {
        question: '¿Cuál es el país más pequeño del mundo?',
        answers: [
            {text: 'San Marino', correct: false},
            {text: 'Polonia', correct: false},
            {text: 'Portugal', correct: false},
            {text: 'El Vaticano', correct: true}
        ],
        position: 7
    },
    {
        question: '¿Cuánto es 5 + 5x2÷2 - 5?',
        answers: [
            {text: '1', correct: false},
            {text: '0', correct: false},
            {text: '5', correct: true},
            {text: '2', correct: false}
        ],
        position: 8
    },
    {
        question: '¿Cuál es la película menos taquillera del mundo?',
        answers: [
            {text: 'Zyzzyx Road', correct: true},
            {text: '4 Fantásticos', correct: false},
            {text: 'Green Lantern', correct: false},
            {text: 'Storage', correct: false}
        ],
        position: 9
    },
    {
        question: '¿Quién interpreta a Batman: The Dark Knight en la trilogía de Christopher Nolan?',
        answers: [
            {text: 'Chris Hensworth', correct: false},
            {text: 'Chris Pratt', correct: false},
            {text: 'Chris Evans', correct: false},
            {text: 'Chris Pine', correct: false}
        ],
        position: 10
    },
    {
        question: '¿A qué canción pertenece esta frase "I\'m just gonna dance all night"?',
        answers: [
            {text: 'Robyn  - Dancing On My Own', correct: true},
            {text: 'Fall Out Boys - Dance, Dance', correct: false},
            {text: 'Breaking Benjamin  - Dance With The Devil', correct: false},
            {text: 'TONES AND I - DANCE MONKEY', correct: false}
        ],
        position: 11
    },
    {
        question: '¿Para cuándo está previsto que salga el sexto libro de la saga de fantasía "Canción de Hielo y Fuego" de George R. R. Martin?',
        answers: [
            {text: 'Para el 2022', correct: false},
            {text: 'Nunca!', correct: true},
            {text: 'Ja, casi me engañas, ya salió!', correct: false},
            {text: 'No se sabe', correct: true}
        ],
        position: 12
    },
    {
        question: '¿En qué país fue la última presentación de Gustavo Cerati en un concierto?',
        answers: [
            {text: 'Mexico', correct: false},
            {text: 'Argentina', correct: false},
            {text: 'Colombia', correct: false},
            {text: 'Venezuela', correct: true}
        ],
        position: 13
    },
    {
        question: '¿En qué año se subió el primer video a Youtube?',
        answers: [
            {text: '2005', correct: true},
            {text: '2006', correct: false},
            {text: '2004', correct: false},
            {text: '2007', correct: false}
        ],
        position: 14
    },
    {
        question: '¿Quién dijo "You guys are the real heroes" ("Ustedes son los verdaderos héroes")?',
        answers: [
            {text: 'Capitan América', correct: false},
            {text: 'Superman', correct: false},
            {text: 'Homelander', correct: true},
            {text: 'Iron Man', correct: false}
        ],
        position: 15
    },
    {
        question: '¿En qué orden aparecieron las gemas del infinito en el UCM?',
        answers: [
            {text: 'Gema del espacio, mente, poder, realidad, tiempo y alma', correct: true},
            {text: 'Gema del espacio, poder, tiempo, mente, realidad y alma', correct: false},
            {text: 'Gema del espacio, realidad, mente, tiempo, poder y alma', correct: false},
            {text: 'Gema del espacio, mente, poder, tiempo, realidad y alma', correct: false}
        ],
        position: 16
    },
    {
        question: '¿Cómo se llamaba la máquina de Flint Loco que convertíe el agua en comida?',
        answers: [
            {text: 'FDLSMDFR', correct: false},
            {text: 'FLDSMDFR', correct: true},
            {text: 'FLDSDMFR', correct: false},
            {text: 'FLMSDRFR', correct: false}
        ],
        position: 17
    },
    {
        question: '¿Qué artista musical tiene un potente silbido?',
        answers: [
            {text: 'Lady Gaga', correct: false},
            {text: 'Laura Pergolizzi', correct: true},
            {text: 'Chris Evans', correct: false},
            {text: 'Freddie Mercury', correct: false}
        ],
        position: 18
    },
    {
        question: '¿Qué importa más en una cámara fotográfica?',
        answers: [
            {text: 'Obvio que los megapixeles', correct: false},
            {text: 'El tamaño del sensor', correct: true},
            {text: 'La potencia del flash', correct: false},
            {text: 'El software de procesado', correct: false}
        ],
        position: 19
    },
    {
        question: '¿Cuál es el país con mayor población en el mundo?',
        answers: [
            {text: 'Rusia', correct: false},
            {text: 'China', correct: true},
            {text: 'Estados Unidos', correct: false},
            {text: 'India', correct: false}
        ],
        position: 20
    }

]