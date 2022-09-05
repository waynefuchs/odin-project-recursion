// Non-Recursive
var allMultiplesOf3Or5 = (num) => [...Array(num).keys()].filter(n => !(n % 3) || !(n % 5)).splice(1);
console.log('non-recursive');
const multiples = allMultiplesOf3Or5(1000);
console.log(`${multiples}`);
console.log(`Total: ${multiples.reduce((x,total) => total += x, 0)}`);

// Recursive
var allMultiplesOf3Or5Recursive = (num) => {
    return num > 3
        ? allMultiplesOf3Or5Recursive(num-1).concat( (!(num % 3) || !(num % 5)) && num < 1000 ? num : [])
        : [3];
};
console.log('recursive');
const multiplesRecursive = allMultiplesOf3Or5Recursive(1000);
console.log(`${multiplesRecursive}`);
console.log(`Total: ${multiplesRecursive.reduce((x,total) => total += x, 0)}`);