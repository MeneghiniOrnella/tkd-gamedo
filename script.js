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
        'answers': ['Corea','China','Japón','Argentina'],
    },
    {
        'question': 'Cuándo se creó el taekwondo?',
        'answers': ['1955','1945','1965','1966'],
    },
    {
        'question': 'Cuando se creó la Escuela Dung San?',
        'answers': ['2010','2006','2008','2012'],
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
        'question': 'Qué estilo de taekwondo practicas?',
        'answers': ['ITF: International Taekwondo Federation','IT: International Taekwondo','WT: World Taekwondo','WTF: World Taekwondo Federation']
    },
    {
        'question': 'Qué representa el color amarillo?',
        'answers': ['tierra donde se planta la semilla','semilla donde sale la planta','Sol','flor amarilla']
    },
    {
        'question': 'Cuántos tules o formas existen en total?',
        'answers': ['15','10','9','20']
    },
    {
        'question': 'Quién es el presidente de la Escuela Dung San?',
        'answers': ['Sabonim Daniel Reartes IV dan','Sabonim Claudio Defelice VI dan','Sagiumnim Héctor Hernandez VIII dan','Sabonim Federico Hernandez VI dan']
    },
    {
        'question': 'Cúando se trajo el taekwondo a Argentina?',
        'answers': ['1966','1955','1965','1967']
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
];

let printHtmlQuestion = (i) => {
    currentQuestionIndex++;
    const q = cuestionary[i];
    let a = q.answers;
    rightAnswers = a[0];
    
    // Metodo random:
    a = a.sort((a,b) => Math.floor(Math.random()*2)-1);

    /*Audio:
    let audio = new Audio('q.audio');
    audio.play();*/

    const htmlAnswersArray = a.map(currentA => 
        `<p class="answer">
            <button onClick="evaluateAnswer('${currentA}')"><i class="fas fa-circle"></i></button>
            <span>${currentA}</span>
        </p>`
    );
    const htmlAnswers = htmlAnswersArray.join(' ');

    /*Imagenes:
    let htmlCuestionarioCode = `<p class="respuestas">${q.pregunta}</p><img src="${q.img}"><div>${htmlRespuestas}</div>`;*/
    let htmlQuestionCode = 
        `<p>${q.question}</p>
        <div>${htmlAnswers}</div>`;
    document.querySelector('.question').innerHTML = htmlQuestionCode;

    // Tiempo limite:
    /* time = 10;
    document.querySelector('.time').innerHTML = time; 
    clearInterval(timeInterval);
    timeInterval = setInterval(() => {
        time --;
        if(time==0){
            alert("No respondiste a tiempo");
            clearInterval(timeInterval);
        }else{
           document.querySelector('.time').innerHTML = time; 
        }
    },10000); */

    const evaluateAnswer = (answer, obj) =>{
        document.querySelectorAll('.answer').forEach(a => a.classList.remove('right','wrong'));
        const parentP = obj.parentNode;
        if(answer == rightAnswer){
            parentP.classList.add('right');
            rightAnswers++;
            document.querySelector('.right').innerHTML = rightAnswers;
        }else{
            parentP.classList.add('wrong');
            wrongAnswers++;
            document.querySelector('.wrong').innerHTML = wrongAnswers;
        };
    };
};
 
/* function next(){
    document.querySelector('.everything').style.display = 'block';
}; */

function start(){
    printHtmlQuestion[0];
    document.querySelector('.startBtn').style.display = 'none';
    document.querySelector('.everything').style.display = 'block';
};
