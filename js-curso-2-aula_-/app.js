let listaDeNumeroSorteado = [];
let numeroLimite = 10
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1
function textoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', 
    {rate:1.2});
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosDaLista = listaDeNumeroSorteado.lengh;
    
    if (quantidadeDeElementosDaLista == numeroLimite) {
        listaDeNumeroSorteado = []

    if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio ();
}} else {
    listaDeNumeroSorteado.push(numeroEscolhido)
    console.log (listaDeNumeroSorteado)
    return numeroEscolhido;
} }

function exibirMensageminicial() {
    textoNaTela('h1', 'jogo do numero secreto');
    textoNaTela('p', 'Escolha um numero entre 1 a 10');
}
exibirMensageminicial();

function verificarChute() {
    let chute = document.querySelector('input').value;  
    console.log(numerosecreto == chute);

    if (chute == numerosecreto){
        let palavratentativa = tentativas > 1 ? 'tentativas': 'tentativa'
        textoNaTela('h1', 'Acertou!'); 
        textoNaTela('p', `Você descobriu o numero secreto com ${tentativas} ${palavratentativa}!`);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else { 
        if (chute > numerosecreto) {
            textoNaTela('p', 'o numero é menor.');
        } else {
            textoNaTela('p', 'o numero é maior.');
        }
        tentativas++;
        limparCampo();
    }
}
function limparCampo() {
    let chute = document.querySelector('input');
    chute.value='';
}
function reiniciarJogo() {
    numerosecreto=gerarNumeroAleatorio();
    limparCampo;
    tentativas = 1;
    exibirMensageminicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}