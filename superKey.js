class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Hello,my name is ${this.name} and i am ${this.age} years old`;
  }
}

class Student extends Person {
  major = "I am majoring in Computer Science";
  introduce() {
    return `Hello my name is ${this.name} and i am ${this.age} years old and i am majoring in compuetr science`;
  }
  demo() {
    super.introduce();
  }
}

const person1 = new Person("John", 30);
console.log(person1.introduce()); // Output: "Hello, my name is John and I am 30 years old."
const student1 = new Student("Alice", 20, "Computer Science");
student1.demo();
console.log(student1.introduce()); // Output: "Hello, my name is Alice and I am 20 years old. I am majoring in Computer Science."
