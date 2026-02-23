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

class Employee extends Person {
  constructor(firstName, lastName, age, position) {
    // super() wywołuje konstruktor klasy Person
    super(firstName, lastName, age);
    this.position = position;
  }
  // Nowa metoda tylko dla pracownika
  work() {
    console.log(`Pracuję jako ${this.position}.`);
  }
}
// Tworzymy obiekt klasy Employee
const employee = new Employee("Anna", "Nowak", 28, "programistka");
// Możemy korzystać z metod klasy Person
employee.introduce(); // Cześć, jestem Anna Nowak i mam 28 lat.
// Oraz z metod klasy Employee
employee.work();
