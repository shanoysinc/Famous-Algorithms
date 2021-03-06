function makeArrayConsecutive(sequence) {
    let noSwap;
    for (let i = sequence.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            let temp = sequence[j];
            if (sequence[j] > sequence[j + 1]) {
                sequence[j] = sequence[j + 1];
                sequence[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap) break;
    }

    let sort = sequence
    let missingnumber = []

    let start = 0;
    let next = 1;
    let num = sort[start]

    while (next < sort.length) {
        if (sort[next] < 0) {
            num += 1
        } else if (num < 0 && sort[next] < 0) {
            num -= 1;
        } else {
            num += 1
        }

        if (num != sort[next]) {
            missingnumber.push(num)
        } else {
            start += 1
            next += 1
            num = sort[start]
        }

    }


    return missingnumber
}
console.log(makeArrayConsecutive([2, 3, 6, 8])) //return [4, 5, 7]  
// [-1, -3]  return [-2]
// sequence: [-1, 3]  return [0, 1, 2]
// sequence: [5, 4, 6] return []