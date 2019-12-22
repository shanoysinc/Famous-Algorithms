longestPalindrome = function (s) {
    //your code here
    if (s.length == 0) {
        return 0;
    } else if (s.length <= 1) {
        return 1;
    }
    // create a variable name longStr that hold the longest sub string count
    let longStr = 0;
    //create two for loop to stay at one index and loop over all array then move to the next index
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            //check if index i and j is equal in reverse order
            if (
                s.slice(i, j + 1) ==
                s
                    .slice(i, j + 1)
                    .split("")
                    .reverse()
                    .join("")
            ) {
                // if it is equal mutate the longStr
                if (s.slice(i, j + 1).length > longStr)
                    longStr = s.slice(i, j + 1).length;
            }
        }
    }

    //at the end of the loop return longStr
    return longStr;
};

console.log(longestPalindrome("a")); //, 1)
console.log(longestPalindrome("aa")); //, 2)
console.log(longestPalindrome("baa")); //, 2)
console.log(longestPalindrome("aab")); //, 2)
console.log(longestPalindrome("zyabyz")); //1)
console.log(longestPalindrome("zzbaabcd")); //1)
