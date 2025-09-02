function somaDoisNumeros(num1, num2){
    const resultado = num1+num2;
    return resultado;
}

function calcularMediaDeDoisNumeros(num1, num2){
    const resultadoSomaDeDoisValores = somaDoisNumeros(num1, num2)
    const media = resultadoSomaDeDoisValores/2
    return media
}

module.exports = {
    somaDoisNumeros
}
