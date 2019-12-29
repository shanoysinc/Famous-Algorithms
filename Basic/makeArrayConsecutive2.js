function makeArrayConsecutive2(statues) {
    let noSwap;
    for (let i = statues.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            let temp = statues[j];
            if (statues[j] > statues[j + 1]) {
                statues[j] = statues[j + 1];
                statues[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap) break;
    }

    let sort = statues
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


    return missingnumber.length
}
console.log(makeArrayConsecutive([6, 2, 3, 8])) //return 3  
