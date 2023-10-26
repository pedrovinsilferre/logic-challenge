// 2) The Sweetest Icecream

//SOLUTION

// class for ice creams 
class IceCream {
  constructor(flavor, sprinkles) {
    this.flavor = flavor;
    this.sprinkles = sprinkles;
  }
}
//calculate 
const calculateSweetness = (iceCream) => {
  const sweetnessForFlavor = {
    plain: 0,
    vanilla: 5,
    chocolateChip: 5,
    strawberry: 10,
    chocolate: 10,
    sprinkle: 1
  };

  const flavor = iceCream.flavor;
  const sprinkles = iceCream.sprinkles;

  const sweetness = sweetnessForFlavor[flavor] ?? 0;
  const totalSweetness = sweetness + (sprinkles ?? 0);

  return totalSweetness;
}

const searchSweetestIceCream = (iceCreams) => {
  let sweetestSweetness = 0;

  for (let iceCream of iceCreams) {
    const sweetness = calculateSweetness(iceCream);

    if (sweetness > sweetestSweetness) {
      sweetestSweetness = sweetness;
    }
  }

  return sweetestSweetness;
}
const iceCream1 = new IceCream("vanilla", 18)
console.log(searchSweetestIceCream([iceCream1]));
