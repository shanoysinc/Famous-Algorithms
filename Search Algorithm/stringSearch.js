//create a loop to go over the string
//
function stringSearch(string, chars) {
    let found = "";
    let count = 0;
    for (let index = 0; index <= string.length; index++) {
        if (string[index] != chars[count]) {
            found = "";
            count = 0;
        } else if (string[index] == chars[count]) {
            found += string[index];
            count += 1;
        }
        if (found == chars) {
            return "Match Found";
        } else if (index == string.length && found != chars) {
            return "No match";
        }
    }
}

stringSearch("shahanoy", "sha");
