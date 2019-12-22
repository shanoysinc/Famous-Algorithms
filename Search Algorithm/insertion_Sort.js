//builds up the sort by gradually creating
//a larger left half which is always sorted

//loop through the array forward
// loop backwards to check if the rightside is less that the less
//switch the around
function insertionSort(array) {
    let lowest = 0;

    for (let i = 1; i < array.length; i++) {
        let currentVal = array[i];
        for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = currentVal;
    }
    return array;
}

console.log(insertionSort([21, 0, 1, 5, 3, 4]));
insertionSort([0, 1, 21, 5, 3, 4]);
insertionSort([0, 1, 5, 21, 3, 4]);
insertionSort([0, 1, 3, 5, 21, 4]);
insertionSort([0, 1, 3, 4, 5, 21]);
