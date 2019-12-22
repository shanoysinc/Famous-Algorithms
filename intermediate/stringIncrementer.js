// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

function incrementString(strng) {
    // return incrementedString
    let newStr;

    let num = "";
    for (let i = 0; i < strng.length; i++) {
        if (/[0-9]/.test(strng[i])) {
            num += strng[i];
        }
    }

    let sum = Number(num) + 1;
    let newVal = "";
    for (let i = 0; i < num.length - String(sum).length; i++) {
        newVal += "0";
    }
    let finalNum = newVal + sum;
    if (strng.length == 0) {
        return "1";
    } else if (/[a-z]/i.test(strng[strng.length - 1])) {
        newStr = strng + 1;
        return newStr;
    } else {
        return strng.replace(num, finalNum);
    }
}

// incrementString("foobar000"); //, "foobar001");
console.log(incrementString("foo")); //, "foo1");
console.log(incrementString("foobar001")); //, "foobar002");
console.log(incrementString("foobar99")); //, "foobar100");
console.log(incrementString("foobar1999")); //, "foobar2000");
//incrementString(""); //, "1");
