//klasy
class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hi! My name is ${this.firstname} ${this.lastname}. I'm ${this.age} years old`,
    );
  }
}

const person = new Person("Kasia", "Górska", 34);

person.introduce();
