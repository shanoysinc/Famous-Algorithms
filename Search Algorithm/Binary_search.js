function BinarySearch(arr, item) {

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let guess = arr[mid]
        if (guess === item) {
            return mid;
        }

        if (guess > item) {
            high -= 1;
        } else {
            low = mid + 1
        }

    }
    return -1
}

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 12], 5))
















//create a pointer from the left and a pointer from the right
//create a pointer for the middle
//fthe value is too small move to the left
// if the value is too big move to the right
//if you find the value return the index
//if you never find the value return -1

function binarySearch(array, value) {
    let left = 0;
    let right = array.length - 1;
    let index = 0;
    let middle = Math.floor(right / 2);
    while (index !== value) {
        //console.log(left, middle, right);
        if (value > array[right] || left + 1 == right) {
            index = value;
            return -1;
        } else if (array[left] === value) {
            index = value;
            return left;
        } else if (array[middle] === value) {
            index = value;
            return middle;
        } else if (array[right] === value) {
            index = value;
            return right;
        } else if (value > array[middle]) {
            left = middle;
            middle = left + Math.floor((right - left) / 2);
        } else if (array[middle] > value) {
            right = middle;
            middle = left + Math.floor((right - left) / 2);
        }
    }
}

console.log(binarySearch([2, 3, 4, 5, 6, 8, 11, 12, 13, 14, 15, 17], 15));
// binarySearch([1, 2, 4], 3);
// binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);
// binarySearch([2, 4, 5, 9, 11, 14, 15, 19, 21, 25, 28, 30, 50, 52, 60, 63], 13);
