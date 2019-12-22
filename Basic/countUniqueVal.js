
function countUniqueVal(array) {
  let newArray = [];
  for (num in array) {
    if (!newArray.includes(array[num])) {
      newArray.push(array[num]);
    }
  }
  return newArray.length;
}


console.log(countUniqueVal([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueVal([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueVal([-2, -1, -1, 0, 1])); //4
