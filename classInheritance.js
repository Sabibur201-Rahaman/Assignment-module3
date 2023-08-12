class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    return `${this.sound}`;
  }
}
class Dog extends Animal{
    fetch(){
        console.log('Fetching the ball')
    }
}
const animal = new Animal("Lion", "Roar");
console.log(animal.makeSound()); // Output: "Roar"```
const dog = new Dog("Buddy", "Woof");
console.log(dog.makeSound()) // Output: "Woof"
dog.fetch(); // Output: "Fetching the ball!"