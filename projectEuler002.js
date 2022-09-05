let fib = [];
for(let fibLast=0, fibThis=1, fibNext=0; 
    fibLast < 4_000_000; 
    fibLast=fibThis,fibThis=fibNext) {
    if(!(fibLast%2)) fib.push(fibLast);
    fibNext = fibLast + fibThis;
}
console.log(`Even Fibonacci Numbers Under 4M: ${fib}`);
console.log(`Sum: ${fib.reduce((x,total)=>total+=x,0)}`);