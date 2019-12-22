function toWeirdCase(string) {
    //TODO
    let array = string.split(' ');
    let str = ''
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (j % 2 === 0) {
                str += array[i][j].toUpperCase();
            } else {
                str += array[i][j];
            }

        }
        if (array.length > 1) {
            str += ' '
        }


    }
    if (array.length < 2) {
        return str;
    } else {
        return str.slice(0, str.length - 1)
    }


}

toWeirdCase("String "); //=> returns "StRiNg"
toWeirdCase("Weird string case"); //=> returns "WeIrD StRiNg CaSe"
toWeirdCase('This is a test'), //'ThIs Is A TeSt')
