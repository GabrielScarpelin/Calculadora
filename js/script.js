const inicialState = {
    valorAtual: '',
    ladoValor: [0, 0],
    ladoPosicao: 0,
    operacao: '',
    limparDisplay: false
};
let estadoAtual = {...inicialState}
function numeros(x){
    if (estadoAtual.limparDisplay === true){
        atualizarDisplay('');
        estadoAtual.valorAtual = '';
    }
    const position = estadoAtual.ladoPosicao;
    estadoAtual.valorAtual +=  x;
    const valorNew = atualizarDisplay(estadoAtual.valorAtual);
    estadoAtual.ladoValor[position] = parseFloat(valorNew);
}
function operacao(y){
    if (estadoAtual.operacao !== ''){
        estadoAtual.valorAtual = document.getElementById('resultado').innerHTML;
        estadoAtual.ladoValor[0] = calcular();
        estadoAtual.ladoPosicao = 1;
        estadoAtual.limparDisplay = true;
        estadoAtual.ladoValor[1] = 0;
        estadoAtual.operacao = y;
    }
    else{
        estadoAtual.operacao = y;
        estadoAtual.ladoPosicao = 1;
        estadoAtual.limparDisplay = false;
        estadoAtual.valorAtual = '';
    }
}
function limpar(){
    estadoAtual = {...inicialState};
    atualizarDisplay('0');
}
function calcular(){
    let resultado = 0;
    if (estadoAtual.operacao === '+'){
        resultado = estadoAtual.ladoValor[0] + estadoAtual.ladoValor[1];
    }
    else if (estadoAtual.operacao === '-'){
        resultado = estadoAtual.ladoValor[0] - estadoAtual.ladoValor[1];
    }
    else if (estadoAtual.operacao === '/'){
        resultado = estadoAtual.ladoValor[0]/estadoAtual.ladoValor[1];
    }
    else if (estadoAtual.operacao === '*'){
        resultado = estadoAtual.ladoValor[0] * estadoAtual.ladoValor[1];
    }
    estadoAtual.operacao = '';
    estadoAtual.ladoValor[0] = resultado;
    estadoAtual.ladoValor[1] = 0;
    estadoAtual.ladoPosicao = 0;
    atualizarDisplay(resultado);
    estadoAtual.limparDisplay = false;
    estadoAtual.valorAtual = document.getElementById('resultado').innerHTML;
    return resultado;
}
function voltar(){
    const tamanho = (estadoAtual.valorAtual).length;
    const position = estadoAtual.ladoPosicao;
    let valorNew = '';
    for (let i = 0; i < tamanho - 1; i++){
        valorNew += (estadoAtual.valorAtual).charAt(i);
    }
    estadoAtual.valorAtual = valorNew;
    atualizarDisplay(estadoAtual.valorAtual);
    estadoAtual.ladoValor[position] = parseFloat(valorNew);
}
function atualizarDisplay(valor){
    document.getElementById('resultado').innerHTML = valor;
    return valor
}
const evento = (keys) =>{
    const tecla = keys.key;
    if (tecla === '0'){
        document.getElementById('t0').click();
    }
    else if(tecla === '1'){
        document.getElementById('t1').click();
    }
    else if(tecla === '2'){
        document.getElementById('t2').click();
    }
    else if(tecla === '3'){
        document.getElementById('t3').click();
    }
    else if(tecla === '4'){
        document.getElementById('t4').click();
    }
    else if(tecla === '5'){
        document.getElementById('t5').click();
    }
    else if(tecla === '6'){
        document.getElementById('t6').click();
    }
    else if(tecla === '7'){
        document.getElementById('t7').click();
        
    }
    else if(tecla === '8'){
        document.getElementById('t8').click();
        
    }
    else if(tecla === '9'){
        document.getElementById('t9').click();
        
    }
    else if(tecla === '.' || tecla === ','){
        document.getElementById('tPonto').click();
        
    }
    else if(tecla === '+'){
        document.getElementById('tMais').click();
        
    }
    else if(tecla === '-'){
        document.getElementById('tMenos').click();
        
    }
    else if(tecla === '*'){
        document.getElementById('tMult').click();
        
    }
    else if(tecla === '/'){
        document.getElementById('tDiv').click();
        
    }
    else if(tecla === 'Enter'){
        document.getElementById('tI').click();
        
    }
    else if(tecla === 'Backspace'){
        document.getElementById('tB').click();

    }
    else if(tecla === 'Backspace'){
        document.getElementById('tB').click();

    }
    else if(tecla === 'Delete'){
        document.getElementById('tC').click();

    }
    else if(tecla === 'c' || tecla === 'C'){
        document.getElementById('tC').click();

    }
}
document.addEventListener('keydown', evento);