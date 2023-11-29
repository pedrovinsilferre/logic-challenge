// Função 
const oneTwo = (objOne, objTwo) => {
  //verifica as chaves 
  const objectOne = Object.keys(objOne);
  const objectTwo = Object.keys(objTwo);

  if (objectOne.length !== objectTwo.length) {
    return false;
  }

  //verificar valores das chaves 
  for (let valueKey of objectOne) {
    if (objOne[valueKey] !== objTwo[valueKey]) {
      return false;
    }
  }

  return true;
}




//objetos abaixo diferentes
const objUm = {
  name: "Benny",
  phone: "3325558745",
  email: "benny@edabit.com"
}

const objDois = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}
console.log("objetos diferentes: " + oneTwo(objUm, objDois))

//objetos abaixo iguais 
const objTres = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}

const objQuatro = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}

console.log("objetos iguais: " + oneTwo(objTres, objQuatro))
