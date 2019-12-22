function bubbleSort(array) {
    let noSwap;
    for (let i = array.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            let temp = array[j];
            if (array[j] > array[j + 1]) {
                array[j] = array[j + 1];
                array[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return array;
}

bubbleSort([7, 2, 4, 6, 5, 7, 3]);
