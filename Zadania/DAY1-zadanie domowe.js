const price = 100;
const discount = 0.2;
function calculateDiscountedPrice(num1, num2) {
  return num1 - num1 * num2;
}
console.log(calculateDiscountedPrice(price, discount));
