// 1. Print all even numbers from 0 – 10
console.log("DESAFIO 1")
for (let num = 1; num <= 10; num++) {
  let par = num++;
  console.log(par);
}

/////////////////////////////////////////////////////////////////////////////

console.log("DESAFIO 2")
// 2. Print a table containing multiplication tables

for (let tab = 1; tab <= 10; tab++){
  let numTab = 1 * tab;//só trocar o número para funcionar a multiplicação
  console.log(numTab);
}

/////////////////////////////////////////////////////////////////////////////

console.log("DESAFIO 3")
// 3. Create a length converter function

//codigo para aparecer no terminal 

const input = require('prompt-sync')({ sigint: true });

const conversor = (km) => {
  const mil = km / 1.6; // coverte os km em milhas  
  return mil;
};
const resultKm = Number(input('digite a distância em Km que irá percorrer: '));
const resultMil = conversor(resultKm);

console.log(`a distância em milhas ficara em ${resultMil}mi `)



/////////////////////////////////////////////////////////////////////////////

console.log("DESAFIO 4")
// 4. Calculate the sum of numbers within an array

const matrizNegative = [
  [-1, -2, -3],
  [4, 5, 6],
  [7, 8, -9]
];
let soma = matrizNegative.reduce((acumulador, linha) => {
  return acumulador + linha.reduce((linhaSoma, valor) => linhaSoma + valor, 0)
}, 0);
console.log(`resultado da soma da matriz negativa será ${soma}`);

const matrizPlus = [
  [1, 2, 3.14],
  [4, 5.5, 6],
  [7, 8, 9.5]
];
let somar = matrizPlus.reduce((accumulator, row) => {
  return accumulator + row.reduce((rowSoma, value) => rowSoma + value, 0)
}, 0);
console.log(`resultado da soma da matriz com números fracionados será ${somar}`);


/////////////////////////////////////////////////////////////////////////////

console.log("DESAFIO 5")
// 5. Create a function that reverses an array

function inverte(e) {
  const invertIndex = e.reverse();
  return invertIndex;
}
const numArrays = inverte([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// const numArrays = inverte(['one', 'two', 'three']);

console.log(numArrays);

/////////////////////////////////////////////////////////////////////////////

console.log("DESAFIO 6")
// 6. Sort an array from lowest to highest

let numbers = [1, 2, 7, 4, 5, 9, 3, 8, 4, 0];
numbers.sort();
console.log("Sorted Array: " + numbers);

/////////////////////////////////////////////////////////////////////////////

console.log("DESAFIO 7")
// 7. Create a function that filters out negative numbers

const meuArray = [-1, 2, -3, 4, 5, -6, 8, 9];
const filtrar = meuArray.filter((numero) => {

  return numero > 0;

});

console.log('números positivos:', filtrar);


/////////////////////////////////////////////////////////////////////////////

console.log("DESAFIO 8")
// 8. Remove the spaces found in a string**

const cleaner = (e) =>{
  let removeEspacesNum = e.replace(/[^0-9]/g,'');
  let removeCaracteres = e.replace(/,|-| |\./g,'')
  return [removeEspacesNum, removeCaracteres];
}
let str = cleaner("505.543.567-45");
let str1 = cleaner("pedro,vinicius-da silva.ferreira");
let str2 = cleaner("pedro vinicius da silva ferreira");
console.log(str, str1, str2);

/////////////////////////////////////////////////////////////////////////////

console.log("DESAFIO 9")
// 9. Return a Boolean if a number is divisible by 10

const eDivisivel = (n) => {
  return n % 10 === 0;
}
let num = 10;

console.log(`O número ${num}, é divisível por 10?`, eDivisivel(num));


/////////////////////////////////////////////////////////////////////////////

console.log("DESAFIO 10")
// 10. Return the number of vowels in a string

const vogais = ['a', 'e', 'i', 'o', 'u'];
let texto = 'pEdrO vInIcIUs dA sIlvA fErrEIrA';
let contador = 0;

for (let i = 0; i < texto.length; i++) {
  if (vogais.includes(texto[i].toLowerCase())) {
    contador++;
  }
}

console.log(`${texto} tem ${contador} vogais.`);
