function checkPalindrome(inputString) {
    if (inputString.length < 2) {
        return true
    }

    let check = inputString.split('')
    let arrCheck = []

    for (let i = check.length - 1; i >= 0; i--) {
        arrCheck.push(check[i])

    }

    arrCheck = arrCheck.join('')

    if (inputString == arrCheck) {
        return true;
    } else {
        return false;
    }

}


console.log(checkPalindrome("aabaa")) //true


