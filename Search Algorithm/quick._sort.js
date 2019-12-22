function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    } else {

        let pivot = arr[0]
        let less = []
        let greater = []
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= pivot) {
                less.push(arr[i])
            } else {
                greater.push(arr[i])
            }
        }
        return [...quickSort(less), pivot, ...quickSort(greater)]
    }
}

console.log(quickSort([1, 12, 121, 3, 32, 2, 192, 10, 5, 2, 3]))