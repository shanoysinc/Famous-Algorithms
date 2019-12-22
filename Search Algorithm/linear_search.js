//search an array starting from the begining
function linearSearch(array, value) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] == value) {
            return index;
        }
    }
    return -1;
}

linearSearch([2, 3, 42, 12, 23], 12);
linearSearch([2, 3, 42, 12, 23], 3);
