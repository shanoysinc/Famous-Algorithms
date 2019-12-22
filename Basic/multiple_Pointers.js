// sort array
// loop over the numbers from the begining and from end at the same time
//check if the sum of those two numbers is equal to 0
//if they are return both values in an array

function sumZero(array) {
  let newArray = [];
  let arrLength = array.length - 1;
  for (num in array) {
    let sum = array[num] + array[arrLength - num];
    if (sum === 0) {
      newArray.push(array[num]);
      newArray.push(array[arrLength - num]);
      return newArray;
    }
  }
  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]

console.log(sumZero([-2, 0, 1, 3])); // undefined

console.log(sumZero([1, 2, 3])); // undefined
