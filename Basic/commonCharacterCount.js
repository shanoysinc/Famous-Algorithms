function commonCharacterCount(s1, s2) {


    let sort1 = s1.split('').sort()
    let sort2 = s2.split('').sort()

    let pointer = 0
    let next = 0;
    let common = 0

    while (pointer <= sort1.length - 1) {
        if (sort1[pointer] == sort2[next]) {
            common += 1
            pointer += 1
            sort2.splice(next, 1)
        } else {
            next += 1
            if (next >= sort2.length - 1) {
                pointer += 1
                next = 0
            }
        }
    }

    return common

}
console.log(commonCharacterCount('aabcc', 'adcaa'))