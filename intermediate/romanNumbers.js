class roman {
    constructor() {

    }

}

roman.prototype.toRoman = (num) => {
    var lookup = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    }, roman = '', i;
    for (i in lookup) {
        while (num >= lookup[i]) {
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
}

roman.prototype.fromRoman = (romanNumeral) => {

    var DIGIT_VALUES = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    var result = 0;
    var input = romanNumeral.split('');

    for (var i = 0; i < input.length; i++) {
        var currentLetter = DIGIT_VALUES[input[i]];
        var nextLetter = DIGIT_VALUES[input[i + 1]];
        if (currentLetter === undefined) {
            return 'null';
        } else {
            if (currentLetter < nextLetter) {
                result += nextLetter - currentLetter;
                i++;
            } else {
                result += currentLetter;
            }
        }
    };

    return result;
}

let RomanNumerals = new roman()

console.log(RomanNumerals.fromRoman('MMXX'))

console.log(RomanNumerals.toRoman(1000))// 'M')
console.log(RomanNumerals.toRoman(999))// "CMXCIX")
console.log(RomanNumerals.toRoman(4))// 'IV')
console.log(RomanNumerals.toRoman(1))// 'I')
console.log(RomanNumerals.toRoman(1991))// 'MCMXCI')
console.log(RomanNumerals.toRoman(2006))// 'MMVI')
console.log(RomanNumerals.toRoman(2020))// 'MMXX')