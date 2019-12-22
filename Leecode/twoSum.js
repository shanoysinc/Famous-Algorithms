var twoSum = function (array, target) {
    let sum = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == target) {
                sum.push(i, j);
            }
        }
    }
    return sum;
};


console.log(twoSum([3, 3], 6)); // [0,1]
