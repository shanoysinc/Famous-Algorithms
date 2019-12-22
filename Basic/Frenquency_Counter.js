//check if both array are same length if not false
//loop square all numbers in the first array
// sort array1 and array2
//convert both array to string
//check if they are equal)
//My code
// function same(array1, array2) {
//   let arrayMod = [];

//   if (array1.length != array2.length) {
//     return false;
//   } else {
//     for (num in array1) {
//       arrayMod.push(array1[num] * array1[num]);
//     }
//     let arrayModSort = arrayMod.sort(function(a, b) {
//       return a - b;
//     });

//     let array2Sort = array2.sort(function(a, b) {
//       return a - b;
//     });

//     let arrayToStr1 = arrayModSort.join("");
//     let arrayToStr2 = array2Sort.join("");

//     if (arrayToStr1 == arrayToStr2) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }


// console.log(same([1, 2, 3], [1, 9])); //false
// console.log(same([1, 2, 1], [4, 4, 1])); //false (must be same frequency)


function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correntIndex = arr2.indexOf(arr1[i] ** 2);
    if (correntIndex === -1) {
      return false;
    }
    arr2.splice(correntIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); //true

