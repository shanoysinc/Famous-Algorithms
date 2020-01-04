function isLucky(n) {

    let Str = n.toString()
    let half = Math.floor(Str.length / 2)
    let firstHalf = Str.slice(0, half).split('')
    let secondHalf = Str.slice(half).split('')
    let fTotal = 0
    let sTotal = 0
    for (let i = 0; i < firstHalf.length; i++) {
        fTotal += Number(firstHalf[i])
    }
    for (let i = 0; i < secondHalf.length; i++) {
        sTotal += Number(secondHalf[i])
    }
    return fTotal == sTotal ? true : false;

}
console.log(isLucky(1230)) //true
console.log(isLucky(239017)) //false