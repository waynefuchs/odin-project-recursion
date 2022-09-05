// Non-Recursive
var allMultiplesOf3Or5 = (num) => [...Array(num+1).keys()].filter(n => !(n % 3) || !(n % 5)).splice(1);
console.log('non-recursive');
console.log(`${allMultiplesOf3Or5(1000)}`);

// Recursive
var allMultiplesOf3Or5Recursive = (num) => {
    return num > 3
        ? allMultiplesOf3Or5Recursive(num-1).concat(!(num % 3) || !(num % 5) ? num : [])
        : [3];
};
console.log('recursive');
console.log(`${allMultiplesOf3Or5Recursive(1000)}`);
