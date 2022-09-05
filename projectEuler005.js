// Brute force solve
const isDivisibleEvenly = (num, s) => s.every(n=> !(num % n));

const mySet = [
    19, 17, 13, 11, 7, 2, 20, 18, 16, 15, 14, 12, 10, 9, 8, 6, 5, 4, 3,
  ];
for (let x = 200_000_000; ; x++) {
  if (isDivisibleEvenly(x, mySet)) {
    console.log(x);
    break;
  }
}
