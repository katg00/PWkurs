console.log("Zadanie 1");
const tab = ["krzesło", "stół", "łóżko", "poduszka", 6];
// console.log(tab.length);
console.log(tab[4]);
console.log(tab.at(-1));

console.log("Zadanie 2");
const temp = 30;

if (temp < 0) {
  console.log("Mróz! Ubierz się ciepło!");
} else if (0 <= temp && temp <= 15) {
  console.log("Chłodno. Przyda się kurtka.");
} else {
  console.log("Ciepło! Zostaw kurtkę w domu.");
}

console.log("Zadanie 3");
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}
