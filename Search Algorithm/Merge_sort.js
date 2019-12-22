function merge(array1, array2) {
    let sort = [];

    let j = 0;
    let i = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            sort.push(array1[i]);
            i += 1;
        } else {
            sort.push(array2[j]);
            j += 1;
        }
    }

    while (i < array1.length) {
        sort.push(array1[i]);
        i++;
    }

    while (j < array2.length) {
        sort.push(array2[j]);
        j++;
    }
    return sort;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    console.log(left, `The middle ${mid}`, right);
    return merge(left, right);
}

console.log(mergeSort([10, 12, 1, 9, 7]));
//.log(merge([1, 10, 50, 60], [2, 14, 99, 100]));

//1, 2, 10, 14, 50,
