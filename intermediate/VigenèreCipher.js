class VigenèreCipher {
    constructor(key, abc) {
        this.encode = function (str) {
            //split the Lstring into an array
            let lowerStr = str.toLowerCase()
            let arr = abc.split("");
            let keyValue = [];

            for (let i = 0; i < key.length; i++) {
                //finding the letter(key) value and push it to key value
                keyValue.push(arr.indexOf(key[i]));
            }
            let redacted = "";
            let pointer = 0;
            for (let i = 0; i < lowerStr.length; i++) {
                if (arr.includes(lowerStr[i])) {
                    let shift = arr.indexOf(lowerStr[i]) + keyValue[pointer];

                    if (shift >= 26) {
                        redacted += arr[shift - 26];
                    } else {
                        redacted += arr[shift];
                    }

                } else {

                    redacted += lowerStr[i];
                }

                pointer = (pointer + 1) % keyValue.length;

            }

            //console.log(keyValue);
            console.log(`redacted: ${redacted}`);
            return redacted
        };
        this.decode = function (str) {
            let lowerStr = str.toLowerCase()
            let arr = abc.split("");
            let keyValue = [];

            for (let i = 0; i < key.length; i++) {
                //finding the letter(key) value and push it to key value
                keyValue.push(arr.indexOf(key[i]));
            }
            let decoded = "";
            let pointer = 0;
            for (let i = 0; i < lowerStr.length; i++) {

                if (arr.includes(lowerStr[i])) {
                    let shift = arr.indexOf(lowerStr[i]) - keyValue[pointer];
                    if (shift < 0) {
                        decoded += arr[26 - Math.abs((arr.indexOf(lowerStr[i]) - keyValue[pointer]))];
                    } else {
                        decoded += arr[Math.abs((arr.indexOf(lowerStr[i]) - keyValue[pointer]))];
                    }


                } else {

                    decoded += lowerStr[i];

                }


                pointer = (pointer + 1) % keyValue.length;

            }

            console.log(`decode: ${decoded}`);
            return decoded
        };
    };
}



let abc = "abcdefghijklmnopqrstuvwxyz";
let key = "kqziladtpbd";

let c = new VigenèreCipher(key, abc)
c.encode("Thank you for this amazing website") //return dxzvv bhj iyh bsiv pndjymo whuhjwo
c.decode("dxzvv bhj iyh bsiv pndjymo whuhjwo") //return thank you for this amazing website

