let botaoAtualizar = document.getElementById('atualizar-saldo')!;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLInputElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') ;

let saldoTotal = 0 ;

limparSaldo(saldoTotal)

function somarAoSaldo (soma : number) {
        if (campoSaldo) {
            saldoTotal = saldoTotal + soma;
            campoSaldo.innerHTML = saldoTotal.toString();
            limparCampoSoma();
}
}
function limparCampoSoma () {
    soma.value = "";
}
function limparSaldo(saldoTotal: number) {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
}
}

if(botaoAtualizar) { 
botaoAtualizar.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value));
});
}

botaoLimpar.addEventListener('click', () => {
    limparSaldo(saldoTotal);
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
