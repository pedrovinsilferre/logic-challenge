//classe para criação do mundo(World)

class World {
  constructor(num) {
    this.cities = [];
    for (let acc = 0; acc < num; acc++) {
      this.addCity();
    }
  }

  //metodo de criação das cidades
  addCity() {
    const city = new City(this.randomNameCity());
    this.cities.push(city);
  }

  //metodo de criação dos nomes da cidade 
  randomNameCity() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let nameCity = '';
    for (let randomName = 0; randomName < 5; randomName++) {
      nameCity += letters[Math.floor(Math.random() * letters.length)];
    }
    return nameCity;
  }

  randomCity() {
    const cityRandom = Math.floor(Math.random() * this.cities.length);
    return this.cities[cityRandom];
  }

  //metodo para contagem do total de cidades 
  totalCities() {
    return this.cities.length;
  }
}

//metodo de criação de cidades 
class City {
  constructor(name) {
    this.name = name;
    this.citizens = [];
    this.addCitizen();
  }

  //metodo de criação dos cidadãos 
  addCitizen() {
    const citizen = new CitizenAge(this.randomNameCitizen());
    this.citizens.push(citizen);
  }

  //metodo de criação dos nomes dos cidadãos 
  randomNameCitizen() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let nameCitizen = '';
    for (let randomName = 0; randomName < 5; randomName++) {
      nameCitizen += letters[Math.floor(Math.random() * letters.length)];
    }
    return nameCitizen;
  }
}

class CitizenAge {
  constructor(name) {
    this.name = name;
    this.age = Math.floor(Math.random() * 100);
  }
}

let world = new World(100);
const cidadeAleatoria = world.randomCity();

console.log(`Nome da cidade: ${cidadeAleatoria.name}`);
console.log(`Nome do cidadão: ${cidadeAleatoria.citizens[0].name}`);
console.log(`Idade do cidadão: ${cidadeAleatoria.citizens[0].age}`);
console.log(`Total de cidades: ${world.totalCities()}`);