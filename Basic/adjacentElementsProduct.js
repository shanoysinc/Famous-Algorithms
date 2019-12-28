// Given an array of integers, find the pair of adjacent
//  elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {

    let largestProduct = inputArray[0] * inputArray[1];

    for (let i = 0; i < inputArray.length - 1; i++) {
        console.log((inputArray[i], inputArray[i + 1]))
        let value = inputArray[i] * inputArray[i + 1]
        if (value > largestProduct) {
            largestProduct = value
        }

    }
    return largestProduct
}


console.log(adjacentElementsProduct([1, 0, 1, 0, 1000])) //0
//inputArray: [3, 6, -2, -5, 7, 3] //21


