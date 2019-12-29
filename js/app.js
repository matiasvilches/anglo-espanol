
// English to spanish
//import { word } from './wordsEnToEs.js'

// Para la segunda versión...
// ***
// Import this array from another js file (add babel)
const word = [
    { english: 'apple', spanish: ['manzana'] },
    { english: 'cat', spanish: ['gato', 'gata'] },
    { english: 'car', spanish: ['auto', 'automóvil', 'carro', 'coche'] },
    { english: 'bike', spanish: ['bici', 'bicicleta'] },
    { english: 'house', spanish: ['casa'] },
    { english: 'ironic', spanish: ['irónico', 'irónica'] },
    { english: 'building', spanish: ['edificio'] },
    { english: 'hat', spanish: ['sombrero', 'gorro', 'gorra'] },
    { english: 'sneakers', spanish: ['zapatillas'] },
    { english: 'snake', spanish: ['culebra', 'serpiente', 'víbora'] },
    { english: 'you should', spanish: ['usted debería', 'tú deberías', 'usted debe', 'debería', 'debieras'] },
    { english: 'pull', spanish: ['tirar', 'halar', 'tracción'] },
    { english: 'altrought', spanish: ['alterado', 'alterada', 'alteración'] },
    { english: 'through', spanish: ['a través de', 'a través', 'mediante', 'por medio de', 'por'] },
    { english: 'wallet', spanish: ['billetera', 'cartera', 'monedero', 'portamonedas'] },
    { english: 'wild', spanish: ['salvaje', 'silvestre', 'alocado', 'descabellado', 'desenfrenado'] },
    { english: 'until', spanish: ['hasta', 'hasta que'] },
    { english: 'lucky', spanish: ['suerte', 'suertudo', 'suertuda', 'afortunado', 'afortunada'] },
    { english: 'closet', spanish: ['armario', 'clóset', 'ropero'] },
    { english: 'still', spanish: ['todavía', 'aún'] },
    { english: 'leave', spanish: ['salir', 'dejar', 'abandonar', 'irse', 'marcharse'] },
    { english: 'life', spanish: ['vida'] },
    { english: 'live', spanish: ['vivir', 'en vivo', 'vivo', 'en directo'] },
    { english: 'often', spanish: ['a menudo', 'con frecuencia'] },
    { english: 'pick up', spanish: ['recoger', 'coger', 'levantar'] },
    { english: 'loud', spanish: ['ruidoso', 'ruidosa', 'fuerte', 'alto'] },
    { english: 'phrase', spanish: ['frase'] },
    { english: 'out', spanish: ['fuera', 'hacia fuera', 'afuera'] },
    { english: 'spent', spanish: ['gastado', 'gastada'] },
    { english: 'I cannot', spanish: ['no puedo', 'yo no puedo'] },
    { english: 'true', spanish: ['cierto', 'verdadero'] },
    { english: 'wish', spanish: ['deseo', 'desear'] },
    { english: 'thought', spanish: ['pensamiento', 'reflexionando', 'idea'] },
    { english: 'just', spanish: ['solo', 'sólo', 'justo'] },
    { english: 'try', spanish: ['tratar', 'intento', 'probar', 'intentar', 'tratar de'] },
    { english: 'keep', spanish: ['mantener', 'tener', 'mantenerse'] },
    { english: 'wanted', spanish: ['querido', 'querida', 'deseado', 'deseada', 'buscado'] },
    { english: 'crushed', spanish: ['aplastado', 'aplastada', 'aplastar'] },
    { english: 'stood up', spanish: ['levantarse', 'se levantó'] },
    { english: 'match', spanish: ['partido', 'coincidir con', 'igualar'] },
    { english: 'forget', spanish: ['olvidar', 'olvidarse', 'olvidarse de'] },
    { english: 'madness', spanish: ['locura', 'demencia'] },
    { english: 'bullet', spanish: ['bala'] },
    { english: 'fat', spanish: ['grasa', 'gordo', 'gorda'] },
    { english: 'gone', spanish: ['ido', 'ida', 'pasado'] },
    { english: 'gonna', spanish: ['va a'] },
    { english: 'holy', spanish: ['santo', 'sagrado'] },
    { english: 'ears', spanish: ['orejas'] },
    { english: 'freaky', spanish: ['raro', 'rara'] },
    { english: 'challenge', spanish: ['desafío', 'reto', 'desafiar', 'retar'] },
    { english: 'bald', spanish: ['calvo', 'calva', 'pelado', 'pelada'] },
    { english: 'class', spanish: ['clase', 'categoría'] },
    { english: 'told', spanish: ['dicho'] },
    { english: 'insane', spanish: ['insano', 'insana', 'demente'] },
    { english: 'beast', spanish: ['bestia', 'animal'] },
    { english: 'the best', spanish: ['el mejor', 'lo mejor'] },
    { english: 'twelve', spanish: ['doce', '12'] },
    { english: 'into', spanish: ['dentro', 'en', 'a', 'dentro de'] },
    { english: 'hole', spanish: ['agujero', 'hueco', 'hoyo', 'cavidad'] },
    { english: 'angriest', spanish: ['más enojado'] },
    { english: 'get', spanish: ['obtener', 'conseguir', 'llegar'] },
    { english: 'streak', spanish: ['racha', 'raya'] },
    { english: 'join', spanish: ['unirse', 'unir'] },
    { english: 'mad', spanish: ['enojado', 'enojada', 'loco', 'loca', 'enfadado', 'enfadada'] },
    { english: 'devil', spanish: ['diablo', 'diabla', 'demonio', 'demonio'] },
    { english: 'guy', spanish: ['chico', 'individuo', 'tipo'] },
    { english: 'fall', spanish: ['otoño', 'caída', 'caer'] },
    { english: 'spring', spanish: ['primavera', 'resorte', 'muelle'] },
    { english: 'thursday', spanish: ['jueves'] },
    { english: 'tuesday', spanish: ['martes'] },
    { english: 'unexpected', spanish: ['inesperado', 'inesperada', 'imprevisto'] },
    { english: 'sod', spanish: ['césped'] },
    { english: 'changer', spanish: ['cambiador', 'cambiadora'] },
    { english: 'released', spanish: ['liberado', 'liberada'] },
    { english: 'published', spanish: ['publicado', 'publicada'] },
    { english: 'understand', spanish: ['entender', 'comprender'] },
    { english: 'provide', spanish: ['proporcionar', 'proveer', 'suministrar'] },
    { english: 'below', spanish: ['abajo', 'debajo', 'por debajo', 'abajo de', 'debajo de'] },
    { english: 'above', spanish: ['encima', 'arriba', 'encima de', 'por encima', 'sobre'] },
    { english: 'betray', spanish: ['traicionar', 'delatar', 'engañar'] },
    { english: 'conqueror', spanish: ['conquistador', 'conquistadora', 'vencedor'] },
    { english: 'backpack', spanish: ['mochila'] },
    { english: 'back', spanish: ['espalda', 'atrás', 'respaldo', 'respaldar'] },
    { english: 'film', spanish: ['película', 'filmar'] },
    { english: 'course', spanish: ['curso'] },
    { english: 'display', spanish: ['monitor', 'monitora', 'mostrar', 'visualización'] },
    { english: 'glad', spanish: ['alegre', 'contento'] },
    { english: 'both', spanish: ['ambos', 'ambas'] },
    { english: 'same', spanish: ['mismo', 'misma'] },
    { english: "ain't", spanish: ['no es'] },
    { english: 'target', spanish: ['objetivo', 'blanco'] },
    { english: 'poor', spanish: ['pobre'] },
    { english: 'I gotta', spanish: ['tengo que'] },
    { english: 'surprisingly', spanish: ['asombrosamente'] },
    { english: 'get in', spanish: ['entrar'] },
    { english: 'wizard', spanish: ['mago'] },
    { english: 'screen', spanish: ['pantalla'] },
    { english: 'for each', spanish: ['por cada', 'para cada'] },
    { english: 'also', spanish: ['además', 'también'] },
    { english: 'make', spanish: ['hacer'] },
    { english: 'ensure', spanish: ['asegurar'] },
    { english: 'address', spanish: ['dirección'] },
    { english: 'data', spanish: ['datos', 'dato', 'información'] },
    { english: 'establish', spanish: ['establecer'] },
    { english: 'provide', spanish: ['proporcionar', 'proveer'] },
    { english: 'regardless', spanish: ['independientemente'] },
    { english: 'example', spanish: ['ejemplo'] },
    { english: 'give me', spanish: ['dame'] },
    { english: 'rise up', spanish: ['crecer'] },
    { english: 'send', spanish: ['enviar', 'mandar'] },
    { english: 'submit', spanish: ['enviar', 'presentar', 'someter'] },
    { english: 'awake', spanish: ['despierto', 'despierta'] },
    { english: 'get over', spanish: ['supéralo', 'superar'] },
    { english: 'subject', spanish: ['tema', 'asignatura', 'sujeto', 'someter'] },
    { english: 'word', spanish: ['palabra'] },
    { english: 'start', spanish: ['comienzo', 'comenzar', 'empezar', 'iniciar', 'comienzo', 'principio'] },
    { english: 'news', spanish: ['noticia', 'noticias', 'nuevas'] },
    { english: 'novelty', spanish: ['novedad', 'primicia'] },
    { english: 'show', spanish: ['mostrar', 'demostrar', 'show', 'espectáculo', 'programa', 'demonstración'] },
    { english: 'drop', spanish: ['soltar', 'gota', 'caída', 'caer'] },
    { english: 'sky', spanish: ['cielo'] },
    { english: 'politics', spanish: ['política'] },
    { english: 'sensitive', spanish: ['sensible'] },
    { english: 'sensible', spanish: ['sensato', 'sensata', 'razonable'] },
    { english: 'physics', spanish: ['física'] },
    { english: 'physician', spanish: ['médico', 'médica', 'facultativo'] },
    { english: 'doctorate', spanish: ['doctorado'] },
    { english: 'useless', spanish: ['inútil', 'inservible'] },
    { english: 'in vain', spanish: ['en vano'] },
    { english: 'death', spanish: ['muerte', 'defunción', 'fallecimiento'] },
    { english: 'murder', spanish: ['asesinato', 'homicidio', 'asesinar', 'matar'] },
    { english: 'slayer', spanish: ['asesino', 'asesina'] },
    { english: 'dead', spanish: ['muerto', 'fallecido'] },
    { english: 'bell', spanish: ['campana'] },
    { english: 'toll', spanish: ['peaje'] },
    { english: 'raise', spanish: ['aumento', 'subida', 'alza', 'elevar', 'alzar', 'levantar'] },
    { english: 'iron', spanish: ['planchar', 'hierro', 'plancha'] },
    { english: 'maid', spanish: ['sirvienta', 'criada'] },
    { english: 'maiden', spanish: ['doncella', 'soltera', 'virginal'] },
    { english: 'initiatory', spanish: ['iniciador', 'iniciadora'] },
    { english: 'flute', spanish: ['flauta'] },
    { english: 'doorbell', spanish: ['timbre', 'timbre de puerta'] },
    { english: 'ring', spanish: ['anillo', 'anilla'] },
    { english: 'surround', spanish: ['rodear'] },
    { english: 'wrap', spanish: ['envolver', 'envolverse'] },
    { english: 'lodge', spanish: ['presentar', 'alojar', 'alojarse', 'hospedarse'] },
    { english: 'against', spanish: ['en contra', 'contra'] },
    { english: 'inimical to', spanish: ['enemiga de'] },
    { english: 'after', spanish: ['después', 'tras'] },
    { english: 'before', spanish: ['antes de', 'antes', 'anterior'] },
    { english: 'what else?', spanish: ['¿qué más?'] },
    { english: 'answer', spanish: ['responder', 'respuesta', 'contestar'] },
    { english: 'priest', spanish: ['sacerdote', 'cura'] },
    { english: 'anthem', spanish: ['himno'] },
    { english: 'neighbour', spanish: ['vecino', 'vecina'] },
    { english: 'throw', spanish: ['lanzar', 'tiro', 'lanzar', 'tirar', 'arrojar'] },
    { english: 'son', spanish: ['hijo'] },
    { english: 'whose?', spanish: ['¿de quíen?', '¿a quién?'] },
    { english: 'awesome', spanish: ['increíble', 'impresionante'] },
    { english: 'really', spanish: ['de verdad', 'realmente', 'en realidad'] },
    { english: 'meet', spanish: ['reunirse'] },
    { english: 'race', spanish: ['carrera', 'raza'] },
    { english: 'crossbow', spanish: ['ballesta'] },
    { english: 'court', spanish: ['corte', 'tribunal', 'cortejar'] },
    { english: 'side', spanish: ['lado', 'costado', 'lateral'] },
    { english: 'rainbow', spanish: ['arcoíris'] },
    { english: 'rain', spanish: ['lluvia', 'llover'] },
    { english: 'jail', spanish: ['cárcel', 'prisión'] },
    { english: 'hail', spanish: ['granizo', 'saludo'] },
    { english: 'save', spanish: ['salvar', 'guardar', 'ahorrar'] },
    { english: 'safe', spanish: ['seguro', 'segura', 'a salvo', 'caja fuerte'] },
    { english: 'shield', spanish: ['proteger', 'escudo', 'blindaje'] },
    { english: 'cover', spanish: ['cubrir', 'cubierta', 'cobertura', 'tapa'] },
    { english: 'layer', spanish: ['capa'] },
    { english: 'lawyer', spanish: ['abogado', 'abogada'] },
    { english: 'thing', spanish: ['cosa'] },
    { english: 'belong', spanish: ['pertenecer a', 'ser miembro de', 'ser socio'] },
    { english: 'rightful', spanish: ['legítimo', 'legítima'] },
    { english: 'contract', spanish: ['contrato', 'contratar', 'contraer'] },
    { english: 'briefcase', spanish: ['maletín', 'portafolio'] },
    { english: 'draw', spanish: ['dibujar', 'empate', 'sorteo'] },
    { english: 'delete', spanish: ['eliminar', 'borrar', 'suprimir'] },
    { english: 'summon', spanish: ['convocar', 'invocar', 'llamar'] },
    { english: 'called', spanish: ['llamado', 'llamada'] },
    { english: 'handful', spanish: ['puñado'] },
    { english: 'handsome', spanish: ['hermoso', 'guapo', 'bello'] },
    { english: 'anymore', spanish: ['nunca más', 'ya'] },
    { english: 'already', spanish: ['ya'] },
    { english: 'anyway', spanish: ['de todas formas', 'de todos modos', 'de todas maneras', 'de cualquier manera', 'de cualquier modo'] },
    { english: 'detour', spanish: ['desvío', 'rodeo', 'desviarse'] },
    { english: 'queue', spanish: ['cola', 'hacer cola'] },
    { english: 'abhor', spanish: ['aborrecer', 'abominar'] },
    { english: 'different', spanish: ['diferente', 'distinto'] },
    { english: 'unnoticed', spanish: ['inadvertido', 'inadvertida'] },
    { english: 'wander', spanish: ['deambular', 'vagar'] },
    { english: 'wonder', spanish: ['preguntarse', 'maravilla'] },
    { english: 'wine', spanish: ['vino'] },
    { english: 'cup', spanish: ['taza', 'copa'] },
    { english: 'clumsy', spanish: ['torpe', 'tosco'] },
    { english: 'sleepy', spanish: ['soñoliento', 'soñolienta'] },
    { english: 'ignore', spanish: ['ignorar'] },
    { english: 'creep', spanish: ['arrastrarse'] },
    { english: 'wrap', spanish: ['envolver', 'embalar', 'envolverse'] },
    { english: 'sensible', spanish: ['sensato', 'sensata', 'razonable'] },
    { english: 'sensitive', spanish: ['sensible'] },
    { english: 'back up', spanish: ['apoyo', 'respaldo', 'respaldar'] },
    { english: 'carry out', spanish: ['llevar a cabo', 'realizar'] },
    { english: 'across', spanish: ['a través', 'a través de'] },
    { english: 'drop', spanish: ['soltar', 'gota', 'caída', 'caer', 'dejar caer', 'soltar'] },
    { english: 'something', spanish: ['algo', 'alguna cosa'] },
    { english: 'find out', spanish: ['descubrir', 'averiguar'] },
    { english: 'get along', spanish: ['quedar bien', 'llevarse bien'] },
    { english: 'get over', spanish: ['supéralo'] },
    { english: 'overcome', spanish: ['superar', 'vencer'] },
    { english: 'give up', spanish: ['rendirse', 'renunciar', 'abandonar'] },
    { english: 'give me your password', spanish: ['dame tu contraseña'] },
    { english: 'hurry up', spanish: ['darse prisa', 'apurarse'] },
    { english: 'look after', spanish: ['cuidar', 'cuidar de'] },
    { english: 'makeup', spanish: ['maquillaje'] },
    { english: 'make up', spanish: ['componer', 'constituir', 'formar'] },
    { english: 'otherwise', spanish: ['de otra manera', 'si no', 'por lo demás'] },
    { english: 'mistake', spanish: ['error', 'engaño', 'equivocación', 'equivocarse'] },
    { english: 'point out', spanish: ['señalar', 'apuntar'] },
    { english: 'set up', spanish: ['preparar', 'establecer', 'instalar'] },
    { english: 'advertising', spanish: ['publicidad'] },
    { english: 'instead', spanish: ['en lugar'] },
    { english: 'turn up', spanish: ['aparecer'] },
    { english: 'seek', spanish: ['buscar'] },
    { english: 'search', spanish: ['buscar', 'búsqueda', 'busca'] },
    { english: 'even', spanish: ['incluso', 'aún', 'hasta'] },
    { english: 'roaming', spanish: ['itinerancia'] },
    { english: 'risky', spanish: ['arriesgado', 'arriesgada', 'aventurado', 'aventurada'] },
    { english: 'attempt', spanish: ['intento', 'intentar', 'tentativa'] },
    { english: 'approach', spanish: ['acercarse', 'enfoque', 'aproximación', 'aproximarse'] },
    { english: 'worried', spanish: ['preocupado', 'preocupada'] },
    { english: 'restless', spanish: ['inquieto', 'inquieta', 'impaciente', 'ansioso', 'ansiosa'] },
    { english: 'towards', spanish: ['hacia'] },
    { english: 'understood', spanish: ['entendido', 'entendida', 'comprendido', 'comprendida'] },
    { english: 'taste', spanish: ['gusto', 'sabor', 'desgustación'] },
    { english: 'treats', spanish: ['trata', 'tratar'] },
    { english: 'injured', spanish: ['lesionado', 'lesionada', 'herido'] },
    { english: 'wounded', spanish: ['herido', 'herida'] },
    { english: 'care', spanish: ['cuidado', 'cuidar', 'atender', 'atención'] },
    { english: 'gentle', spanish: ['amable', 'suave', 'apacible'] },
    { english: 'degree', spanish: ['licenciatura', 'grado', 'título'] },
    { english: 'playful', spanish: ['juguetón', 'juguetona'] },
    { english: 'cheerful', spanish: ['alegre'] },
    { english: 'puppyhood', spanish: ['cachorro'] },
    { english: 'belt', spanish: ['cinturón', 'correa'] },
    { english: 'homeless', spanish: ['vagabundo', 'vagabunda', 'sin hogar', 'sin techo'] },
    { english: 'spend', spanish: ['gastar', 'pasar', 'emplear'] },
    { english: 'remain', spanish: ['permanecer', 'quedarse', 'seguir'] },
    { english: 'amount', spanish: ['cantidad', 'importe', 'monto'] },
    { english: '', spanish: ['', '', ''] },
]

// Counters
let questionCounter = 0
let correctQuestionCounter = 0

// Session name
const keySession = 'keySession'

// Other variables
let randomWord = null
let wrongAnswers = []
let questionToLeave = true


// Enter the app.
const login = () => {
    const username = document.getElementById('txtUsername').value.trim()

    // Validate username.
    if (username.length > 0) {
        sessionStorage.setItem(keySession, username)
        location = '/home.html'
    } else {
        //console.log('Ingresa un nombre de usuario.')
        alertify.error('Ingresa un nombre de usuario.')
    }
}


// Exit the app.
const logout = () => {
    sessionStorage.removeItem(keySession)
    location = '/index.html'
}


// Get a random word (in English).
const getRandomWord = () => {
    const wordToRespond = document.getElementById('wordToRespond')
    let index = 0

    index = Math.floor(Math.random() * (word.length + 1))
    randomWord = word[index]

    // Remove the element from the array so as not to repeat the word in the test.
    word.splice(index, 1)

    wordToRespond.innerText = randomWord.english
}


// Para la segunda versión...
// ***
// const function_TEST = boolean => {
//     if (boolean) {
//         location = '/app.html'
//         //getRandomWord()
//         console.log('TRUE: ENGLISH TO SPANISH')
//     } else {
//         console.log('FALSE: SPANISH TO ENGLISH')
//     }
// }


// English to spanish
const checkResponse = clickIDontKnow => {
    let response = document.getElementById('txtResponse').value.trim()
    let goodAnswer = false

    // If he doesn't know the answer, pass.
    if (clickIDontKnow) {
        response = 'No sé'
    }

    // Validate empty answer.
    if (response.length < 1) {
        //console.log('Ingresa una palabra.')
        alertify.error('Ingresa una palabra.')
        return 0
    }

    // Add one the question counter and show progress in the bar.
    questionCounter += 1
    const progressBar = document.getElementById('progressBar')
    progressBar.style.width = `${questionCounter}0%`

    // Validate correct answer.
    for (let i = 0; i < randomWord.spanish['length']; i++) {

        if (randomWord.spanish[i] === response.toLowerCase()) {
            //console.log('Encontrado: ' + randomWord.spanish[i])
            goodAnswer = true
            break
        }
        //console.log('Buscando... ' + randomWord.spanish[i])
    }

    if (goodAnswer) {
        correctQuestionCounter += 1
        console.log('¡Bien hecho!')
    } else {
        // Save incorrect answers
        console.log('No acertaste.')
        wrongAnswers.push({
            wordInEnglish: randomWord.english,
            response: response.toLowerCase(),
            correctAnswer: randomWord.spanish
        })
        //console.log(wrongAnswers)
    }

    document.getElementById('txtResponse').value = ''
    document.getElementById('txtResponse').focus()

    // Only ten questions.
    if (questionCounter === 10) {
        // Loading animation
        document.getElementById('cardBody').style.display = 'none'
        document.getElementById('loading').style.display = 'inline'

        // After two seconds.
        setTimeout(() => {
            result()
        }, 2000)

    } else {
        // New random word.
        getRandomWord()
    }
}


// Enter the app and verify the response by pressing the Enter key.
const enterKey = e => {
    if (e.key === 'Enter') {
        if (location.pathname === '/app.html') {
            checkResponse()
        } else if (location.pathname === '/index.html') {
            login()
        }
    }
}


// Shows the test result.
const result = () => {
    document.getElementById('card').style.display = 'none'
    document.getElementById('progress').style.display = 'none'

    const result = document.getElementById('result')
    const score = document.getElementById('score')
    const repeatTest = document.getElementById('repeatTest')
    const btnRepeatTest = document.getElementById('btnRepeatTest')

    score.innerText = correctQuestionCounter

    // If he made no mistakes, he is a machine.
    if (wrongAnswers.length === 0) {
        const congrats = document.getElementById('congrats')
        congrats.style.display = 'inline'
        result.style.display = 'none'
    } else {
        // Show table with the revision of the incorrect answers.
        result.style.display = 'inline'
        const table = document.getElementById('table')

        for (let i = 0, j = 1; i < wrongAnswers.length; i++ , j++) {
            const row = table.insertRow(table.rows.length)
            const cell1 = row.insertCell(0)
            const cell2 = row.insertCell(1)
            const cell3 = row.insertCell(2)
            const cell4 = row.insertCell(3)

            cell1.innerHTML = j
            cell2.innerHTML = wrongAnswers[i].wordInEnglish
            cell3.innerHTML = wrongAnswers[i].response
            cell4.innerHTML = wrongAnswers[i].correctAnswer.join(', ')
        }
    }

    repeatTest.style.display = 'inline'
    btnRepeatTest.style.display = 'flex'
}


// Repeat test.
const repeatTest = () => {
    questionToLeave = false
    location.reload()
}


// Ask before leaving / recharging so as not to lose the advance.
const askBeforeLeaving = () => {
    // The question will be only on the app page.
    if (window.location.pathname === '/app.html') {
        let response

        if (questionToLeave) {
            // * Podría ser un modal, por que cuando le das a logout, luego cancelar, 
            // luego click a home en el título y aceptar, se sale de la app
            // o sea queda tomado la primera solicitud del logout.

            response = confirm('Are you sure you want to leave?')

            if (response) {
                window.onunload = function () {
                    return true
                }
            } else {
                return false
            }
        }
    }
}
window.onbeforeunload = askBeforeLeaving

// Para la segunda versión...
// ***
// const confirmLeave = () => {

//     alertify.confirm('Confirm Title', 'Confirm Message', function () {
//         alertify.success('Ok')
//         return true
//     }, function () {
//         alertify.error('Cancel')
//     })
// }


// 
// const window_mouseout = (obj, evt, fn) => {
//     if (obj.addEventListener) {
//         obj.addEventListener(evt, fn, false)
//     } else if (obj.attachEvent) {
//         obj.attachEvent('on' + evt, fn)
//     }
// }

// window_mouseout(document, 'mouseout', event => {
//     event = event ? event : window.event
//     var from = event.relatedTarget || event.toElement

//     // Si quieres que solo salga una vez el mensaje borra lo comentado
//     // y así se guarda en localStorage

//     // let leftWindow   = localStorage.getItem( 'leftWindow' ) || false

//     if ( /* !leftWindow  && */ (!from || from.nodeName === 'HTML')) {
//         // Haz lo que quieras aquí
//         alert('Si haces trampa, te engañas tu mismo.')
//         // localStorage.setItem( 'leftWindow', true )
//     }
// })

