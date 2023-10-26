//RESOLUÇÃO QUESTÃO 1 

console.log("DESAFIO 1")
for (let num = 0; num <= 10; num++) {
  let par = num++;
  console.log(par);
}

///////////////////////////////////////////////////////////////////////////////

// RESOLUÇÃO QUESTÃO 4 - Não utilizar reduce()

const matrizNegativa = [
  [1, 2, 3],
  [-5, -7, -9],
  [0, 6, -8]
];
 let soma1 = 0;

 for(let corredor = 0; corredor < matrizNegativa.length; corredor++){
  for(let coluna = 0; coluna < matrizNegativa[corredor].length; coluna++){
    soma += matrizNegativa[corredor][coluna];
  }
 }

 console.log(soma)

 //////////////////////////////////////////////////////////////////////////////

//  DIFERENÇA ENTRE VAR, LET E CONST

//  VAR: O var contém `escopo de função` (escopo global), onde as váriáveis declaradas podem funcionar 
//  dentro ou fora da função em que são declaradas. Com o var você acessar a variável antes mesmo de a declarar,
//  mas o valor será retornado como `undefined`, sendo assim com var você pode reatribuir o valor vária vezes, e ele 
//  não respeita o escopo de bloco, podendo ser usado forra de uma função, condicionais e loops (caso seja escrito dentro de uma )
 
//  LET: Já o let são variáveis com escopo de bloco, onde elas só serão vista dentro de onde foram declaradas, diferente 
//  do var, em let não podemos acessar seu valor antes da declaração do código
