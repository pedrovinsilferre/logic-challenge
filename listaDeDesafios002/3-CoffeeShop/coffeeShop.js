//3 Coffe Shop

//class have 3 variables instances 


//basic idea for the class

// class CoffeShop {
//   constructor(name, menu, order) {
//     this.name = name;
//     this.menu = menu;
//     this.order = [];
//   }
// }

// class CoffeShop {
//   constructor(name, menu, order) {
//     this.name = name;
//     this.menu = [
//       drinks: [
//       { coffeeDrink: 'Cappuccino', price: '$4' },
//       { coffeeDrink: 'Latte', price: '$5' },
//       { coffeeDrink: 'Orange Coffe', price: '$6.5' }
//     ],
//     foods: [
//       { coffeFood: 'Cake', price: '$8' },
//       { coffeFood: 'Pie', price: '$10' },
//       { coffeFood: 'Croissant', price: '$7' }
//     ]
//     ];
//     this.order = [];
//   }
// }


class CoffeShop {
  constructor(name, menu, order) {
    this.name = name;
    this.menu = menu;
    this.order = [];
  }

  //adicionar o pedido do menu
  addOrder(addCardapio) {
    const itensMenu = this.menu.find(item => item.item === addCardapio);
    if (itensMenu) {
      this.order.push(addCardapio);
      console.log(`${addCardapio} adicionado com sucesso!`);
      return;
    } else (
      console.log('Item não encontrado no cardápio')
      )
  }


  //filtrar o pedido 
  fulfillOrder() {
    if (this.order.length >){
      const item = this.orders.shift();
      console.log(`${item} está pronto`)
    }else{

    }
  }









  //listar os pedidos
  listOrders() { }

  //retornara o total dos pedidos feitos 
  dueAmount() { }

  //retorna o item de menos valor
  cheapestItem() { }

  //retorna as bebidas pedidas do menu 
  drinksOnly() { }

  //retorna as comidas pedidas do menu
  foodOnly() { }

}


const orderForCoffeShop = () => {


}

const orders = new CoffeShop('milk', 'food', 2)

console.log(orders);


