//class Lonely com métodos prime e record
class Lonely {
  //método Prime para verificar se o número é primo
  static Prime(num) {
    for (let cont = 2; cont <= Math.sqrt(num); cont++) {
      if (num % cont === 0) {
        return false;
      }
    }
    return num > 1;
  }

  //método record para receber dois parâmetros (lo e hi) para verificar o menos e maior número na sequência
  static record(lo, hi) {
    let endLonely = lo;
    let endDistance = 0;
    let closestPrime = 0;
    //loop para iteração entre lo e hi para verificar se o número é primo
    for (let num = lo; num <= hi; num++) {
      if (this.Prime(num)) {
        closestPrime = num;
      } else if (closestPrime !== 0) {
        const distance = num - closestPrime;

        if (distance > endDistance) {
          endLonely = num;
          endDistance = distance;
        }
      }
    }
    //para retornar os valores de number, distance e closest
    return {
      number: endLonely,
      distance: endDistance,
      closest: closestPrime
    };
  }
}
//execução da Classe
// console.log(Lonely.record(0, 22));
// console.log(Lonely.record(8, 123));
// console.log(Lonely.record(938, 1190));
// console.log(Lonely.record(120, 1190));

console.log(Lonely.record(0, 2));
console.log(Lonely.record(8, 31));
console.log(Lonely.record(29, 41));
console.log(Lonely.record(139, 149));