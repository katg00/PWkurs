//1
const car1 = {
  brand: "Ford",
  model: "Fiesta",
  year: 2006,
};
const car2 = {
  brand: "Chevrolet",
  model: "Spark",
  year: 2010,
};
const car3 = {
  brand: "Ford",
  model: "Mustang",
  year: 1966,
};

//2
const cars = [ car1, car2, car3 ];
console.log(cars);

//3
console.log(cars.map(car => car.brand + ' ' + car.model + ' ' + car.year));

//4
console.log(cars.filter(car => car.year < 2021));

//cars.filter(car => car.year <2021);

