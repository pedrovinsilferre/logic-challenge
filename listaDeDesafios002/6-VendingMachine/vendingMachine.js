//function for machine 

const machineVending = (products, money, productNumber) => {
  //verificar produtos
  if (productNumber < 1 || productNumber > products.length) {
    return "mensagem aqui";
  }

  //verifica os produtos e o armazena na variavel products
  const searchProducts = products[productNumber - 1];

  //verifica o dinheiro 
  if (money < searchProducts.price) {
    return 'Não tem dinheiro suficiente';
  }

  //verifica se havera troco armazenando em um array vazio
  const change = money - searchProducts.price;
  const cash = [500, 200, 100, 50, 20, 10];
  const changeArray = [];

  //verifica a quantia que será devolvida no troco 
  for (const troco of cash) {
    while (change >= troco) {
      changeArray.push(troco);
      change -= troco;
    }
  }

  //criação do retorno que sera feito pelo objeto
  const retorno = {
    products: searchProducts.name,
    change: changeArray
  };

  return retorno;

}

//The products are fixed:
const nameProducts = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' }
];


//uso da função
console.log(machineVending(nameProducts, 1000, 4));



