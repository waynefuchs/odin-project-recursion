// Problem requests that I find the "Largest palindrome made from the product of two 3-digit numbers"
const largest = 999 * 999;

var isPrime = (n) => {
  for (let x = 2, s = Math.sqrt(n); x <= s; x++) {
    if (n % x === 0) return false;
  }
  return n > 1;
};

var isThreeByThree = (num) => {
  for (let x = 100; x < 1000; x++)
    if (!(num % x) && num / x < 1000) return true;
  return false;
};

const isPalindrome = (num) => {
  const letters = num.toString().split("");
  let right = letters.splice(Math.floor(letters.length / 2));
  if (right.length > letters.length) right.shift();
  right = right.reverse().join("");
  const left = letters.join("");
  return right === left;
};

for (let x = largest; x > 0; x--) {
  if (isPalindrome(x) && !isPrime(x) && isThreeByThree(x)) {
    console.log(x);
    break;
  }
}
