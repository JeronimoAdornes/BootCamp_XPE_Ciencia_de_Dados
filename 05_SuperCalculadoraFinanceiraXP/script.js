// pegar os elementos HTML pelo DOM
let resultadoSoma = document.getElementById('resultadoSoma');
let resultadoSubAB = document.getElementById('resultadoSubAB');
let resultadoSubBA = document.getElementById('resultadoSubBA');
let resultadoMult = document.getElementById('resultadoMult');
let resultadoDivAB = document.getElementById('resultadoDivAB');
let resultadoDivBA = document.getElementById('resultadoDivBA');
let resultadoPotenciaAB = document.getElementById('resultadoPotenciaAB');
let resultadoPotenciaBA = document.getElementById('resultadoPotenciaBA');
let resultadoRaizA = document.getElementById('resultadoRaizA');
let resultadoRaizB = document.getElementById('resultadoRaizB');
let resultadoFatorialA = document.getElementById('resultadoFatorialA');
let resultadoFatorialB = document.getElementById('resultadoFatorialB');
let resultadoPorcentagemAB = document.getElementById('resultadoPorcentagemAB');
let resultadoPorcentagemBA = document.getElementById('resultadoPorcentagemBA');
let resultadoMedia = document.getElementById('resultadoMedia');

resultadoSoma.innerHTML = 0;
resultadoSubAB.innerHTML = 0;
resultadoSubBA.innerHTML = 0;
resultadoMult.innerHTML = 0;
resultadoDivAB.innerHTML = 0;
resultadoDivBA.innerHTML = 0;
resultadoPotenciaAB.innerHTML = 0;
resultadoPotenciaBA.innerHTML = 0;
resultadoRaizA.innerHTML = 0;
resultadoRaizB.innerHTML = 0;
resultadoFatorialA.innerHTML = 0;
resultadoFatorialB.innerHTML = 0;
resultadoPorcentagemAB.innerHTML = 0;
resultadoPorcentagemBA.innerHTML = 0;
resultadoMedia.innerHTML = 0;

function calcularSoma(a, b) {
  return a + b;
}
function calcularSubAB(a, b) {
  return a - b;
}
function calcularSubBA(a, b) {
  return b - a;
}
function calcularMult(a, b) {
  return a * b;
}
function calcularDivAB(a, b) {
  return a / b;
}
function calcularDivBA(a, b) {
  return b / a;
}
function calcularPotenciaAB(a, b) {
  return a ** b;
}
function calcularPotenciaBA(a, b) {
  return b ** a;
}
const calcularRaizA = a => Math.sqrt(a).toFixed(2);
const calcularRaizB = b => Math.sqrt(b).toFixed(2);

function calcularFatorialA(a, b) {
  if (a === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
}
function calcularFatorialB(a, b) {
  if (b === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result *= i;
  }
  return result;
}
const calcularPorcentagemAB = (a, b) => ((a * 100) / b).toFixed(0) + '%';
const calcularPorcentagemBA = (a, b) => ((b * 100) / a).toFixed(0) + '%';

function calcularMedia(a, b) {
  return (a + b) / 2;
}

function calcular() {
  let inputA = document.getElementById('primeiroNumero').value;
  let inputB = document.getElementById('segundoNumero').value;

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  resultadoSoma.innerHTML = calcularSoma(a, b);
  resultadoSubAB.innerHTML = calcularSubAB(a, b);
  resultadoSubBA.innerHTML = calcularSubBA(a, b);
  resultadoMult.innerHTML = calcularMult(a, b);
  resultadoDivAB.innerHTML = calcularDivAB(a, b);
  resultadoDivBA.innerHTML = calcularDivBA(a, b).toFixed(2);
  resultadoPotenciaAB.innerHTML = calcularPotenciaAB(a, b);
  resultadoPotenciaBA.innerHTML = calcularPotenciaBA(a, b);
  resultadoRaizA.innerHTML = calcularRaizA(a, b);
  resultadoRaizB.innerHTML = calcularRaizB(b, a);
  resultadoFatorialA.innerHTML = calcularFatorialA(a, b);
  resultadoFatorialB.innerHTML = calcularFatorialB(a, b);
  resultadoPorcentagemAB.innerHTML = calcularPorcentagemAB(a, b);
  resultadoPorcentagemBA.innerHTML = calcularPorcentagemBA(a, b);
  resultadoMedia.innerHTML = calcularMedia(a, b);
}
