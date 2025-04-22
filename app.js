let listaDeNumerosSorteados= [];
const numberMax = 10;
let tentativa = 1;
let numberSecret = gerarNumeroAleatorio();
// console.log(numberSecret)
mensagemInicial();

function mensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', `Escolha um número de 1 a ${numberMax}`);
}

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value
    let msgTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
    // let maiorMenor = chute > numberSecret ? 'menor' : 'maior'; //OPERADOR TERNARIO

    if (chute == numberSecret) {

        let mensagem = `Parabéns, você descobiu o número secreto com ${tentativa} ${msgTentativa}!!`;
        exibirTexto('h1', 'Acertou :)');
        exibirTexto('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
        // exibirTexto('p', `O número secreto é ${maiorMenor}`);//USANDO O OPERADOR TERNÁRIO
        if (chute > numberSecret) {
            exibirTexto('p', 'O número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativa++
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numberMax + 1);
    let qtdDeNumSorteados = listaDeNumerosSorteados.length;

    if (qtdDeNumSorteados == numberMax) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        // console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limpar() {
    chute = document.querySelector('input')
    chute.value = '';
}
function reiniciarJogo() {

    numberSecret = gerarNumeroAleatorio(numberMax);
    // console.log(numberSecret);
    limpar();
    mensagemInicial();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto'
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'escolha um numero entre 1 e 10'
