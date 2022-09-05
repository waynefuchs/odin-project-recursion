var isPrime = (n) => {
  for (let x = 2, s = Math.sqrt(n); x <= s; x++) {
    if (n % x === 0) return false;
  }
  return n > 1;
};

var primeFactors = (n) => {
  let pf = [];
  for (let x = 2, s = Math.sqrt(n); x <= s; x++) {
    if (isPrime(x) && !(n % x)) {
      pf.push(x);
      n = n / x;
      x = 2;
      s = Math.sqrt(n);
    }
  }
  pf.push(n);
  return pf;
};

console.log(primeFactors(600851475143));
