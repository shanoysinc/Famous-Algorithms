function makeArrayConsecutive(sequence) {
    let sort = sequence.sort()
    let missingnumber = []

    let start = 0;
    let next = 1;
    let num = sort[start]

    while (next < sort.length) {
        if (num < 0 && sort[next] < 0) {
            num -= 1
        } else {
            num += 1;
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