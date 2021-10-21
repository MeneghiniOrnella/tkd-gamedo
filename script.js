let preguntaActual = 0;
let rtaCorrecta = 0;
let rtaNo = 0;

const cuestionario = [
    {
        'pregunta': 'Dónde se creó el taekwondo?',
        // 'img': './img/tkd.png',
        'respuestas': ['Corea','China','Japón','Argentina'],
    },
    {
        'pregunta': 'Cuándo se creó el taekwondo?',
        'respuestas': ['1955','1945','1965','1966'],
    },
    {
        'pregunta': 'Cuando se creó la Escuela Dung San?',
        'respuestas': ['2010','2006','2008','2012'],
    },
    {
        'pregunta': 'Dónde se creó el estilo de taekwondo ITF?',
        'respuestas': ['Corea del Norte','Corea del Este','Corea del Oeste','Corea del Sur']
    },
    {
        'pregunta': 'Qué significa Dung San?',
        'respuestas': ['escalar montañas','montañas','caminar montañas','saltar montañas']
    },
    {
        'pregunta': 'Cuándo se creó A.CE.T.?',
        'respuestas': ['2002','1960','2011','1999']
    },
    {
        'pregunta': 'Cuál es la traducción de 태권도 o 跆拳道?',
        'respuestas': ['Taekwondo','ITF','Dung San','WTF']
    },
    {
        'pregunta': 'Qué estilo de taekwondo practicas?',
        'respuestas': ['ITF: International Taekwondo Federation','IT: International Taekwondo','WT: World Taekwondo','WTF: World Taekwondo Federation']
    },
    {
        'pregunta': 'Qué representa el color amarillo?',
        'respuestas': ['tierra donde se planta la semilla','semilla donde sale la planta','Sol','flor amarilla']
    },
    {
        'pregunta': 'Cuántos tules o formas existen en total?',
        'respuestas': ['15','10','9','20']
    },
    {
        'pregunta': 'Quién es el presidente de la Escuela Dung San?',
        'respuestas': ['Sabonim Daniel Reartes IV dan','Sabonim Claudio Defelice VI dan','Sagiumnim Héctor Hernandez VIII dan','Sabonim Federico Hernandez VI dan']
    },
    {
        'pregunta': 'Cúando se trajo el taekwondo a Argentina?',
        'respuestas': ['1966','1955','1965','1967']
    },
    {
        'pregunta': 'A qué asociación de taekwondo perteneces?',
        'respuestas': ['A.CE.T.','Yom Chi','Dung San','U.E.N.A.T.']
    },
    {
        'pregunta': 'Quién es el presidente de A.CE.T.?',
        'respuestas': ['Sagiumnim Héctor Hernandez VIII dan','Sabonim Claudio Defelice VI dan','Sabonim Daniel Reartes IV dan','Sabonim Federico Hernandez VI dan']
    },
    {
        'pregunta': 'Qué significa chumok?',
        'respuestas': ['Golpe de puño','Nudillo','Mano','Puño']
    },
    {
        'pregunta': 'Qué significa dojang?',
        'respuestas': ['Habitación','Lugar de práctica','Escuela','Escudo']
    }
];

let printHTMLpregunta = (i) => {
    preguntaActualIndex++;
    const q = cuestionario[i];
    let a = q.respuestas;
    rtaCorrecta = a[0];
    const htmlRespuestasArray = a.map(currentA => 
        `<p>
            <button onclick="corregir('${currentA}')",this>X</button>
            <span>${currentA}</span>
        </p>`
    );
    const htmlRespuestas = htmlRespuestasArray.join(' ');
    let htmlCuestionarioCode = `<p class="respuestas">${q.pregunta}</p><div>${htmlRespuestas}</div>`;
    document.querySelector('.pregunta').innerHTML = htmlCuestionarioCode;
}

const corregir = (respuestas, obj) =>{
    document.querySelectorAll('.respuestas').forEach(a => a.classList.remove('right','wrong'));
    const parenP = obj.parentNode;
    if(respuestas == rtaCorrecta){
        parenP.classList.add('right');
        rtaCorrecta++;
        document.querySelector('.rightContador').innerHTML = rtaCorrecta;
    }else{
        parenP.classList.add('wrong');
        rtaNo++;
        document.querySelector('.wrongContador').innerHTML = rtaNo;
    };
}

printHTMLpregunta(0);


