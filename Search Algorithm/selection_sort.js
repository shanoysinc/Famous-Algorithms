//create a loop to go over the array
//find the smallest number in the array and swap it to the beginning
//then move on to the second element and swap it
//continue doing this until the array is sorted

//puesdo code
//create a no swap variable if no swap end the loop
//create while loop
//create a loop to go over the elements
//stay on the first index and loop over the array to find a number thats smaller
//if you find a smaller number start at tht index and continue to loop over the array to find a smaller number
// if you find the smallest number in the array put it at the begining
//and do + 1 to start from that position

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowest]) {
                lowest = j;
            }
        }
        let temp = array[i];
        array[i] = array[lowest];
        array[lowest] = temp;
    }
    return array;
}

selectionSort([32, 22, 10, 19, 17]);
