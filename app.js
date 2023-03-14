let rightAnswer;
let currentQuestionIndex = 0;
let rightAnswers = 0;
let wrongAnswers = 0;

// Tiempo limite;
let timeInterval;
let time = 10;

const cuestionary = [
    {
        'question': 'Dónde se creó el taekwondo?',
        // 'img': './media/tkd.png',
        // 'audio': './media/tkd.mp3',
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
        'question': 'Cuándo se creó A.CE.T.?',
        'answers': ['2002','1960','2011','1999']
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
        'question': 'Quién es el presidente de la Escuela Dung San?',
        'answers': ['Sabonim Daniel Reartes IV dan','Sabonim Claudio Defelice VI dan','Sagiumnim Héctor Hernandez VIII dan','Sabonim Federico Hernandez VI dan']
    },
    {
        'question': 'Cúando se trajo el taekwondo a Argentina?',
        'answers': ['1967','1955','1965','1967']
    },
    {
        'question': 'A qué asociación de taekwondo perteneces?',
        'answers': ['A.CE.T.','Yom Chi','Dung San','U.E.N.A.T.']
    },
    {
        'question': 'Quién es el presidente de A.CE.T.?',
        'answers': ['Sagiumnim Héctor Hernandez VIII dan','Sabonim Claudio Defelice VI dan','Sabonim Daniel Reartes IV dan','Sabonim Federico Hernandez VI dan']
    },
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
        'question': 'Cuántos competidores hay en un cuadrilatero?',
        'answers': ['2','1','3','5']
    },
    {
        'question': 'Cúal es la distribución del peso de la posición en L?',
        'answers': ['70%-30%','90%-10%','50%-50%','80%-20%']
    }
]

const printHtmlQuestion = (i) => {
    currentQuestionIndex++;
    const q = cuestionary[i];
    let   a = q.answers;
    rightAnswer = a[0];

    // Metodo random:
    a = a.sort((a,b) => Math.floor(Math.random()*3)-1);

    // Tiempo limite:
    timeInterval = setInterval(() => {
        time--;
        if(time === 0) {
            clearInterval(timeInterval);
            next();
            time = 10;
        } else {
            document.querySelector('.time').innerHTML = time;
        }
    },5000);
    
    const htmlAnswersArray = a.map(currentA => `
        <p class="answersBtn">
            <a class="answer" onClick="evaluateAnswer('${currentA}',this)">${currentA}</a>
        </p>
    `);
    const htmlAnswers = htmlAnswersArray.join('');

        let htmlQuestionCode = `
            <p class="questionText">${q.question}</p>
            <div>${htmlAnswers}</div>
        `;

    document.querySelector('.question').innerHTML = htmlQuestionCode;
};

const evaluateAnswer = (answer,obj) => {
    document.querySelectorAll('.answer').forEach(a => a.classList.remove('right','wrong'));
    if (answer == rightAnswer) {
        obj.parentNode.classList.add('right');
        rightAnswers++;
        document.querySelector(".rightCounter").innerHTML = rightAnswers;
    } else {
        obj.parentNode.classList.add('wrong');
        wrongAnswers++;
        document.querySelector(".wrongCounter").innerHTML = wrongAnswers;
    }

    const total = parseInt(rightAnswers + wrongAnswers);
    if(total == 20) {
        document.querySelector('.finishText').innerHTML= `
            <p class="finish">Fin!</p><br>
            <p>Juega de nuevo o comparte tus resultados con tus compañeros.</p><br>
            <button id="startBtn" class="startBtn" onClick="start()"><i class="fas fa-undo-alt"></i></button>
        `;
        document.querySelector('.finishText').style.display = 'block';
        document.querySelector('.everything').style.display = 'none';
    } else {
        console.log('Respuestas correctas: ' + rightAnswers + '/' + total);
    }
};

// Color Random:
const nextBtn = document.getElementById("nextBtn");
const body    = document.querySelector ("body");
const generateRandomColor = () => {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${ r }, ${ g }, ${ b })`;
};
const setBackground = () => {
    const newColor = generateRandomColor();
    console.table(newColor);
    body.style.backgroundColor = newColor;
};
nextBtn.addEventListener("click", setBackground);

const next = () => {
    printHtmlQuestion(currentQuestionIndex);
};

const start = () => {
    printHtmlQuestion(0);
    document.querySelector('.startBtn')  .style.display = 'none';
    document.querySelector('.title')     .style.display = 'none';
    document.querySelector('.everything').style.display = 'block';
    document.querySelector('.finishText').style.display = 'none';
};

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
    window.location.reload();
})