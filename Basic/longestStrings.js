//Returning the longest strings  from  an array
function allLongestStrings(inputArray) {
    if (inputArray.length == 1) return inputArray;

    let LongestStrLenght = inputArray[0].length;
    let longestString = []
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > LongestStrLenght) {
            LongestStrLenght = inputArray[i].length
        }
    }

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == LongestStrLenght) {
            longestString.push(inputArray[i])
        }
    }

    return longestString
}


console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])) //["aba", "vcd", "aba"]