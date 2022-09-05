// Iterative
const fibs = (n) => {
    let result = [0, 1];
    for(let x=2; x<n; x+=1) {
        result.push(result[x-2] + result[x-1]);
    }
    return result;
};
console.log(`iterative: ${fibs(8)}`);

// Recursive
const fibsRec = (n) => {
    if(n <= 2) return [0, 1];
    const fibSeq = fibsRec(n - 1);
    return [...fibSeq, fibSeq[fibSeq.length-2] + fibSeq[fibSeq.length-1]];
}
console.log(`recursive: ${fibsRec(8)}`);