function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    //let lowerStr = str.toLowerCase();
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase() && str[i] != "_" && str[i] != " ") {
            newStr += str[i];
        } else if (
            str[i] == " " ||
            (str[i] == "_" && str[i] == str[i].toUpperCase())
        ) {
            newStr += "-";
        } else if (
            str[i] != str[i].toLowerCase() &&
            /[a-z]/i.test(str[i - 1]) &&
            i > 1
        ) {
            newStr += "-";
            newStr += str[i];
        } else {
            newStr += str[i];
        }
    }

    return newStr;
}
//&& str[i].test(/[a-z]/i)

console.log(spinalCase("This Is Spinal Tap")); //should return "this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")); //should return "the-andy-griffith-show".
console.log(spinalCase("thisIsSpinalTap")); // should return "this-is-spinal-tap"
console.log(spinalCase("Teletubbies say Eh-oh")); // should return "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things")); //should return "all-the-small-things".
