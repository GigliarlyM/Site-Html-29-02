// preparar o espaco para o quiz
const divContainer = document.querySelector('div#container')
const NOME_ID = 'quiz-'
const btnConfirma = document.querySelector('#btn-confirma')
let quizAtual = 0
let respondidas = 0

const adicionarElementos = (quiz = quizAtual) => {
    let pPergunta = document.createElement('p')
    pPergunta.className = 'light-blue'
    pPergunta.id = 'pergunta'
    pPergunta.innerHTML = listaQuestoes[quiz].pergunta
    divContainer.appendChild(pPergunta)

    listaQuestoes[quiz].alternativas.forEach(alternativa => {
        let pAlternativa = document.createElement('p')
        let numeroQuestao = listaQuestoes[quiz].alternativas.indexOf(alternativa)

        pAlternativa.className = 'alternativa quiz-' + (numeroQuestao + 1)
        pAlternativa.id = NOME_ID + (numeroQuestao + 1)
        pAlternativa.textContent = alternativa
        pAlternativa.addEventListener('click', () => verificarResposta(alternativa, numeroQuestao))

        divContainer.appendChild(pAlternativa)
    })
}

adicionarElementos()

const removerElementos = () => {
    divContainer.innerHTML = ''
}

const verificarResposta = (alternativaEscolhida, numeroQuestao) => {

    if (respondidas == quizAtual) {
        respondidas++
        if (alternativaEscolhida == listaQuestoes[quizAtual].resposta) {
            adicionarAcerto()
            document.querySelector('p#quiz-' + (numeroQuestao + 1)).className += ' acerto'

        } else {
            document.querySelector('p#quiz-' + (numeroQuestao + 1)).className += ' erro'
        }

        setTimeout(() => passarQuiz(), 3000)
    }
}

const temPergunta = () => listaQuestoes.length > quizAtual

const passarQuiz = () => {

    removerElementos()
    quizAtual++

    if (temPergunta()) {
        adicionarElementos()

        alterarAtributo(
            listaElemNumeroQuestoes[quizAtual - 1],
            "class",
            " "
        )

        alterarAtributo(
            listaElemNumeroQuestoes[quizAtual],
            "class",
            "bg-yellow"
        )

    } else {
        alterarAtributo(
            listaElemNumeroQuestoes[quizAtual - 1],
            "class",
            " "
        )
        divContainer.appendChild(parabenizar())
    }

}


