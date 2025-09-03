const {somaDoisNumeros} = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da função de soma', function (){

    it('A função deve ser capaz de somar dois numeros positivos', function(){
        const resultado = somaDoisNumeros(5, 3);
        expect(resultado).to.equal(8);
    });

    it('A função deve ser capaz de somar numeros positivos e negativos', function(){
        const resultado = somaDoisNumeros(50, -15);
        expect(resultado).to.equal(35);
    });

});