let numberOfQuestions = 10;
let currentQuestionIndex = 0;
let rightAnswer;
let timeLimit;
let rightAnswers = 0;
let wrongAnswers = 0;
let answers;
let tagSubject;
let cuestionary = [];

const easyCuestionary = [
    {
        'question': 'Dónde se creó el taekwondo?',
        /* 'img': './media/tkd.png',
        'audio': './media/tkd.mp3', */
        'answers': ['Corea','China','Japón','Argentina']
    },
    {
        'question': 'Cuando se creó la Escuela Dung San?',
        'answers': ['2010','2006','2008','2012']
    },
    {
        'question': 'Dónde se creó el estilo de taekwondo ITF?',
        'answers': ['Corea del Norte','Corea del Este','Corea del Oeste','Corea del Sur']
    },
    {
        'question': 'Qué significa Dung San?',
        'answers': ['escalar montañas','montañas','caminar montañas','saltar montañas']
    },
    {
        'question': 'Cuál es la traducción de 태권도 o 跆拳道?',
        'answers': ['Taekwondo','ITF','Dung San','WTF']
    },
    {
        'question': 'Con qué parte del cuerpo pega la patada de costado?',
        'answers': ['Talón','Empeine','Metatarso','Dedos del pie']
    },
    {
        'question': 'Qué estilo de taekwondo practicas?',
        'answers': ['ITF: International Taekwondo Federation','IT: International Taekwondo','WT: World Taekwondo','WTF: World Taekwondo Federation']
    },
    {
        'question': 'Cuándo se creó el taekwondo?',
        'answers': ['1955','1945','1965','1966']
    },
    {
        'question': 'Qué representa el color amarillo?',
        'answers': ['tierra donde se planta la semilla','semilla donde sale la planta','Sol','flor amarilla']
    },
    {
        'question': 'Cuántos tules o formas existen en total?',
        'answers': ['24','10','9','15']
    },
    {
        'question': 'Cúando se trajo el taekwondo a Argentina?',
        'answers': ['1967','1955','1965','1967']
    },
    {
        'question': 'Cuántos competidores hay en un cuadrilatero?',
        'answers': ['2','1','3','5']
    },
    {
        'question': 'Cúal es la distribución del peso de la posición en L?',
        'answers': ['70%-30%','90%-10%','50%-50%','80%-20%']
    },
    {
        'question': 'Cómo se dice profesor en coreano?',
        'answers': ['sabonim','sabom','bu sabonim','tae']
    }
];
const hardCuestionary = [
    {
        'question': 'Qué significa chumok?',
        'answers': ['Golpe de puño','Nudillo','Mano','Puño']
    },
    {
        'question': 'Qué significa dojang?',
        'answers': ['Habitación','Lugar de práctica','Escuela','Escudo']
    },
    {
        'question': 'Cúal no es una advertencia en combate?',
        'answers': ['Golpe al pecho con salto y giro','Salida del cuadrilatero','Golpe a la espalda','Exceso de contacto']
    },
    {
        'question': 'Cúal no es una prenda del dobook?',
        'answers': ['Remera','Chaqueta','Cinturón','Pantalón']
    },
    {
        'question': 'Qué significa maki?',
        'answers': ['defensa','ataque','giro','guardia']
    },
    {
        'question': 'Cómo se dice posición en coreano?',
        'answers': ['sogui','niunja','annun','debi']
    },
    {
        'question': 'Cómo se dice 10 en coreano?',
        'answers': ['yol','hana','dul','net']
    },
    {
        'question': 'Cómo se dice 3 en coreano?',
        'answers': ['set','dasot','ilgob','ahob']
    },
    {
        'question': 'Qué significa hong?',
        'answers': ['rojo','competidor','referi','azul']
    },
    {
        'question': 'Cómo se dice azul en coreano?',
        'answers': ['chong','rojo','competidor','referi']
    },
    {
        'question': 'Cómo se dice mano en coreano?',
        'answers': ['son','palmok','sonnal','chumok']
    },
    {
        'question': 'Cómo se dice patada en coreano?',
        'answers': ['chagui','sogui','chirigui','tae']
    },
    {
        'question': 'Cómo se dice rodilla en coreano?',
        'answers': ['morup','chagui','palkup','tae']
    },
    {
        'question': 'En qué año nació el general Choi Hong Gi?',
        'answers': ['1918','1750','1820','1950']
    },
    {
        'question': 'En qué año falleció el general Choi Hong Gi?',
        'answers': ['2002','2001','1967','1918']
    },
    {
        'question': 'Qué no pertenece al juramento del taekwondista?',
        'answers': ['Yo cumpliré mis objetivos','Yo crearé un mundo de paz','Yo respetaré al instructor','Yo nunca abusaré del Taekwondo-Do']
    }
];

document.querySelector('#easyBtn').addEventListener('click', () => {
    cuestionary = easyCuestionary;
    numberOfQuestions = 10;
    // timeLimit = 30;
    start();
});
document.querySelector('#hardBtn').addEventListener('click', () => {
    cuestionary = hardCuestionary;
    numberOfQuestions = 15;
    // timeLimit = 20;
    start();
});

const printQuestion = (i) => {
    currentQuestionIndex++;
    const quiz  = cuestionary[i];
    let   ans   = quiz.answers;
    rightAnswer = ans[0];

    //* Metodo random:
    ans  = ans.sort(() => Math.floor(Math.random() * 3) - 1);

    /* //* Tiempo limite:
    let time = timeLimit;
    let timeInterval = setInterval(() => {
        if(time === 0) {
            clearInterval(timeInterval);
            time = timeLimit;
            next();
        } else {
            document.querySelector('.time').innerHTML = time--;
        }
    }, timeLimit);*/

    const htmlAnswersArray = ans.map(currentAnswer => `
        <p class="answersBtn">
            <a class="answer" 
                onClick="evaluateAnswer('${ currentAnswer }', this)">
                ${ currentAnswer }</a>
        </p>
    `);
    const htmlAnswers = htmlAnswersArray.join('');

    let htmlQuestionCode = `
        <h2>TKD Game-Do</h2>
        <h3 class="questionText">${ cuestionary[i].question }</h3>
        <div class="htmlAnswers">${ htmlAnswers }</div>
    `;

    document.querySelector('.question').innerHTML = htmlQuestionCode;
};

const evaluateAnswer = (answer, obj) => {
    document.querySelectorAll('.answer')
            .forEach(selected => selected.classList.remove('right', 'wrong'));
    if (answer == rightAnswer) {
        obj.parentNode.classList.add('right');
        rightAnswers++;
        document.querySelector(".rightCounter").innerHTML = rightAnswers;
    } else {
        obj.parentNode.classList.add('wrong');
        wrongAnswers++;
        document.querySelector(".wrongCounter").innerHTML = wrongAnswers;
    }
    const totalAnswers = parseInt(rightAnswers + wrongAnswers);
    if(totalAnswers === numberOfQuestions) {
        const finishText = document.createElement('div');
        finishText.setAttribute('id', 'finishText');
        document.body.appendChild(finishText);
        document.querySelector('#finishText').innerHTML= `
            <h2 class="finish">Fin!</h2><br>
            <p>Juega de nuevo o comparte tus resultados con tus compañeros.</p><br>
            <p>Respuestas correctas: ${ rightAnswers } de ${ totalAnswers }</p>
            <button id="resetBtn" onClick="reset()">
                <i class="fas fa-undo-alt"></i>
            </button>
        `;
        document.querySelector('#finishText').style.display = 'block';
        document.querySelector('.everything').style.display = 'none';
    };
};

//* Background:
const setBackground = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.querySelector("body").style.background = `rgb(${ r }, ${ g }, ${ b })`;
    // console.log(`rgb(${ r }, ${ g }, ${ b })`);
}
setBackground();

/* //* Tag for subject
for (let i = 0; i < easyCuestionary.length; i++) {
    let question = easyCuestionary[i].question;
    if (question.includes("patada")) {
        tagSubject = `combate`;
    } else if(question.includes("tul")) {
        tagSubject = `tules`;
    }  else if(question.includes("patada")) {
        tagSubject = `tecnicas`;
    } else if(question.includes("escuela")) {
        tagSubject = `institucional`;
    } else if(question.includes("año")) {
        tagSubject = `historia`;
    } else {
        tagSubject = `general`;
    }
} */

//* Start cuestionary, reload cuestionary, next question:
const next = () => {
    try {
        printQuestion(currentQuestionIndex);
        setBackground();
        console.log(`Tema: #${ tagSubject }`);
    } catch(error) {
        console.error(`Error! Favor intentar de nuevo para ir a la siguiente pregunta | ${ error }`);
    }
};
const start = () => {
    try {
        printQuestion(currentQuestionIndex++);
        setBackground();
        console.log(`Tema: #${ tagSubject }`);
        document.querySelector('.home')      .style.display = 'none';
        document.querySelector('.everything').style.display = 'block';
    } catch(error) {
        console.error(`Error! Favor intentar de nuevo para comenzar a jugar | ${ error }`);
    }
};
let reset = () => {
    try {
        rightAnswers = 0;
        wrongAnswers = 0;
        localStorage.clear();
        let windowLoc  = window.location;
        windowLoc.href = windowLoc.origin + windowLoc.pathname;
    } catch(error) {
        console.error(`Error! Favor intentar de nuevo para reiniciar el juego | ${ error }`);
    }
};

window.onload = start();