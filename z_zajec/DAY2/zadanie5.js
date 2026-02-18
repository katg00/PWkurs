// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
//1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//2
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
//3
for (let i = 1; i <= 10; i++) {
  console.log(i + " Hello World!");
}
//4
let piramida = "";
let gwiazdka = ["*", "*", "*", "*", "*"];

for (let i = 0; i <= 4; i++) {
  piramida += gwiazdka[i]; // Dopisywanie znaku na końcu
  console.log(piramida);
}
