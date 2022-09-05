// Merge Sort JavaScript Implementation
var mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const right = mergeSort(arr.splice(Math.floor(arr.length / 2)));
  const left = mergeSort(arr);

  let combine = [];
  while (left.length && right.length)
    combine.push(left[0] < right[0] ? left.shift() : right.shift());
  return combine.concat(left, right);
};

const unsorted = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].sort(() =>
  Math.random() > 0.5 ? 1 : -1
);
console.log(`unsorted: ${unsorted}`);
const sorted = mergeSort(unsorted);
console.log(`sorted: ${sorted}`);
