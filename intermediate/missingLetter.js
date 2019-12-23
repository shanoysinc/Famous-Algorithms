function fearNotLetter(str) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'

    let start = alpha.indexOf(str[0])
    let missingLetter
    let count = 0
    for (start; start < alpha.length; start++) {
        if (str[count] != alpha[start]) {
            missingLetter = alpha[start]
            break;
        }
        count += 1
        //console.log(alpha[start])
    }


    return missingLetter
}

console.log(fearNotLetter("abcdeg")); //f
