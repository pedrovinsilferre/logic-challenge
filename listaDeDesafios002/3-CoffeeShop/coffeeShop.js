//3 Coffe Shop

//class have 3 variables instances 

//the class
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
      return `${addCardapio} adicionado com sucesso!`;
    } return `${addCardapio} não foi adicionado!`;

  }


  //filtrar o pedido 
  fulfillOrder() {
    if (this.order.length > 0) {
      const item = this.order.shift();
      return `${item} está pronto`;
    }
    return `${item} não está pronto`;
  }

  //listar os pedidos
  listOrders() {
    return this.order;
  }

  //retornara o total dos pedidos feitos 
  dueAmount() {
    let sumTotal = 0;
    for (const itensMenu of this.menu) {
      if (this.order.includes(itensMenu.item)) {
        sumTotal += itensMenu.price;
      }
    }
    return sumTotal.toFixed(2);
  }

  //retorna o item de menor valor
  cheapestItem() {
    const cheapItem = this.menu.reduce((minItem, menuItem) => {
      return menuItem.price < minItem.price ? menuItem : minItem
    });
    return `O item mais barato é ${cheapItem}`;
  }

  //retorna as bebidas pedidas do menu 
  drinksOnly() {
    const drinksMenu = this.menu.filter((menuItem) => menuItem.type === 'drink');
    return drinksMenu.map((item) => item.item);
  }

  //retorna as comidas pedidas do menu
  foodOnly() {
    const foodMenu = this.menu.filter((menuItem) => menuItem.type === 'food');
    return foodMenu.map((item) => item.item);
  }
}

// const orderForCoffeShop = () => {}

const tcs = [
  { item: "Pie", price: 15.99, type: "food" },
  { item: "Cake", price: 8.99, type: "food" },
  { item: "Latte", price: 4.99, type: "drink" },
  { item: "Coffe", price: 4.99, type: "drink" }
];

const ordersMenu = new CoffeShop('CaFé', tcs);
console.log(ordersMenu.addOrder("Pie"));
console.log(ordersMenu.addOrder("Latte"));
console.log(ordersMenu.addOrder("Coffe"));
console.log(ordersMenu.addOrder("Cake"));

console.log(ordersMenu.listOrders());
console.log(ordersMenu.dueAmount());
console.log(ordersMenu.fulfillOrder());
console.log(ordersMenu.listOrders());
console.log(ordersMenu.cheapestItem())


