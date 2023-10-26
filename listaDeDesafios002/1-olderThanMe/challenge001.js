// **1) Older Than Me**

// Create a method in the Person class that returns how another person's age compares.
//  Given the instances p1, p2, and p3, which will be initialized with the attributes name and age, return a sentence in the following format:

// {another person name } is {older than / younger than / the same age as} me.

// Examples
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)
// p1.compareAge(p2) ➞ "Joel is older than me."

// p2.compareAge(p1) ➞ "Samuel is younger than me."

// p1.compareAge(p3) ➞ "Lily is the same age as me."



//SOLUTION.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(otherPerson) {
    if (this.age < otherPerson.age) {
      return `${this.name} is younger than ${otherPerson.name}`;
    } else if (this.age > otherPerson.age) {
      return `${this.name} is older than ${otherPerson.name}`;
    } else {
      return `${this.name} and ${otherPerson.name} are the same age.`;
    }
  }
}
  const p1 = new Person('Pedro', 25);
  const p2 = new Person('Roberson', 30);
  const p3 = new Person('Suellen', 27);
  const p4 = new Person('Vinicius', 25);


console.log(p1.compareAge(p2))
console.log(p2.compareAge(p3))
console.log(p1.compareAge(p4))