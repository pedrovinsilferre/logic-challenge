//class Smoothie 
class Smoothie {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }
  //para calcular o custo total dos ingredientes 
  getCost() {
    const smoothiePrice = {
      Strawberries: 1.5,
      Bananas: 0.5,
      Mango: 2.5,
      Blueberry: 1.0,
      Raspberries: 1.0,
      Apple: 1.75,
      Pineapple: 3.5
    }

    let totalSmoothieCost = 0;

    for (let ingredient of this.ingredients) {
      const ingredientPrice = smoothiePrice[ingredient];
      totalSmoothieCost += ingredientPrice || 0;
    }
    return totalSmoothieCost;
  }

  //saber o preço dos ingredientes
  getPrice() {
    const priceCost = this.getCost();
    return (priceCost + priceCost * 1.5).toFixed(2);
  }

  //para obter os ingredientes e colocalos em ordem alfabética
  getName() {
    const searchBerries = this.temBerries() ? ' Fusion Smoothie ' : 'Smoothie ';

    const ingredientsName = this.ingredients.map(ingredient => ingredient.includes('berries') ? ingredient.replace('berries', 'berry') : ingredient);
    const name = ingredientsName.sort().join(' ') + searchBerries;
    return name;
  }

  temBerries() {
    return this.ingredients.some(ingredient => ingredient.includes('berries'));
  }
}

const mySmoothie = new Smoothie(['Banana', 'Strawberries', 'Blueberries', 'Apple', 'Mango']);

console.log(`Smoothie Name: ${mySmoothie.getName()}`)
console.log(`Cost: ${mySmoothie.getCost()}`)
console.log(`Price: ${mySmoothie.getPrice()}`)


