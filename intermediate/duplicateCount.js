//duplicate count
function duplicateCount(text) {
    //...
    let pivot = 0;
    let next = 1;
    let lCase = text.toLowerCase();
    let duplicate = [];

    if (lCase.length == 0) {
        return 0;
    } else {
        while (pivot <= lCase.length - 1) {
            // console.log(pivot, next);
            //Check if the first number is equal to the next
            if (lCase[pivot] == lCase[next]) {
                //push to the duplicate array if it doesn't already have that string
                if (duplicate.indexOf(lCase[pivot]) == -1) {
                    duplicate.push(lCase[pivot]);
                    pivot += 1;
                }

                next += 1;
            } else {
                //If the string is not equal to the next string move to the next string and
                // the pivot still remains
                next += 1;
                if (next >= lCase.length - 1) {
                    //if pivot is equal to the last string
                    if (lCase[pivot] == lCase[next]) {
                        if (duplicate.indexOf(lCase[pivot]) == -1) {
                            duplicate.push(lCase[pivot]);
                        }
                    }
                    //if next goes all the way to the end pivot move to the second string and so on
                    pivot += 1;
                    next = pivot + 1;
                    //if the second to last string and last string is equal break the loop
                } else if (
                    pivot == lCase.length - 2 &&
                    next == lCase.length - 1
                ) {
                    //to prevent an infinite loop
                    break;
                }
            }
        }
    }

    return duplicate.length;
}

console.log(duplicateCount("")); //, 0);
console.log(duplicateCount("aba")); //, 0);
console.log(duplicateCount("abacd")); //, 2);
console.log(duplicateCount("aabBcde")); //, 2,"should ignore case");
console.log(duplicateCount("Indivisibility")); //, 1)
