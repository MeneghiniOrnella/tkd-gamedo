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
        // Imagenes:
        // 'img': './media/tkd.png',
        // Audio:
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
    },
];

const printHtmlQuestion = (i) => {
    currentQuestionIndex++;
    const q =cuestionary[i];
    let a = q.answers;
    rightAnswer = a[0];

    // Metodo random:
    a = a.sort((a,b) => Math.floor(Math.random()*3)-1);

    // Tiempo limite:
    timeInterval = setInterval( () => {
        time--;
        if(time == 0){
            // alert('Es momento de pasar a la siguiente pregunta');
            clearInterval(timeInterval);
            next();
            time = 10;
        }else{
            document.querySelector('.time').innerHTML = time;
        }
    },5000);
    
    const htmlAnswersArray = a.map(currentA => 
    `<p class="answersBtn"><a class="answer" onClick="evaluateAnswer('${currentA}',this)">${currentA}</a></p>`);
    const htmlAnswers = htmlAnswersArray.join('');

        let htmlQuestionCode = `<p class="questionText">${q.question}</p><div>${htmlAnswers}</div>`;

    document.querySelector('.question').innerHTML = htmlQuestionCode
};

const evaluateAnswer = (answer,obj) =>{
    document.querySelectorAll('.answer').forEach(a => a.classList.remove('right','wrong'));
    /* alert(answer); */
    const parentP = obj.parentNode;
    console.log('answer: '+answer+', rightAnswer: '+rightAnswer);
    if (answer == rightAnswer){
        parentP.classList.add('right');
        rightAnswers++;
        document.querySelector(".rightCounter").innerHTML = rightAnswers;
    } else{
        parentP.classList.add('wrong');
        wrongAnswers++;
        document.querySelector(".wrongCounter").innerHTML = wrongAnswers;
    }

    const numberLong = cuestionary.length;
    const total = parseInt(rightAnswers + wrongAnswers);
    if(total == 20){
        document.querySelector('.finishText').innerHTML= `
            <p class="finish">Fin!</p><br>
            <p>Juega de nuevo o comparte tus resultados con tus compañeros.</p><br>
            <button id="startBtn" onClick="start()" class="startBtn"><i class="fas fa-undo-alt"></i></button>`;
        document.querySelector('.finishText').style.display = 'block';
        document.querySelector('.everything').style.display = 'none';
    } else{
        let uno = console.log('Respuestas correctas: '+rightAnswers+'/'+total);
    }
};

// Color Random:
const nextBtn = document.getElementById("nextBtn");
const body = document.querySelector("body");
const generateRandomColor = () => {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const rbgColor = `rgb(${r},${g},${b})`;
    return rbgColor;
};
const setBackgrount = () => {
    const newColor = generateRandomColor();
    console.log(newColor);
    body.style.backgroundColor = newColor;
};
nextBtn.addEventListener("click", setBackgrount);

const next = _ => {
    printHtmlQuestion(currentQuestionIndex);
};

function start(){
    printHtmlQuestion(0);
    document.querySelector('.startBtn').style.display = 'none';
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.everything').style.display = 'block';
    document.querySelector('.finishText').style.display = 'none';
};

const creado = 'Página creada por Saboon Ornella Meneghini 1º dan';
const made = console.log(creado);