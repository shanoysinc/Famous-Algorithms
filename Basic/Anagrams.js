// check if the length of both string is the same if not false
//create two object for each string
//create two loop using the frequency method
//for each char adding into the object add 1 to keep count
//compare both objects if they are equal return true if not false

function validAnagrams(str1, str2) {
  let sortString1 = str1
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let sortString2 = str2
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  if (str1.length !== str2.length) {
    return false;
  } else {
    let stringCounter1 = {};
    let stringCounter2 = {};

    for (char in sortString1) {
      stringCounter1[sortString1[char]] = 0;
    }
    for (char in sortString1) {
      stringCounter1[sortString1[char]] += 1;
    }
    console.log(stringCounter1);
    for (char in sortString2) {
      stringCounter2[sortString2[char]] = 0;
    }
    for (char in sortString2) {
      stringCounter2[sortString2[char]] += 1;
    }
    console.log(stringCounter2);
    if (JSON.stringify(stringCounter1) !== JSON.stringify(stringCounter2)) {
      return false;
    } else {
      return true;
    }
  }
}

let time1 = performance.now();
console.log(validAnagrams("aaabc", "bcaaa"));
let time2 = performance.now();
console.log(`Timelapse ${(time2 - time1) / 1000} seconds`);

console.log(validAnagrams("aa", "a"));
console.log(validAnagrams("", "")); //true
console.log(validAnagrams("aaz", "zza")); //false
console.log(validAnagrams("rat", "car")); //false
console.log(validAnagrams("awesome", "awesom")); //false
console.log(validAnagrams("qwerty", "qeywrt")); // true
