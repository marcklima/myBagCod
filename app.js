const soma = require("./calc"); //CHAMANDO O module.exports = soma em calc.js
const valores = require("./cconstantes");//chamando as constantes 

console.log(" A SOMA É : " + soma.soma(valores.anoAtual, valores.impar));// imprimindo a função soma em cal.js