//Extract the domain name from a URL

function domainName(url) {
    //your code here
    let newStr;

    if (url.slice(0, 7) == "http://" && url.slice(7, 11) == "www.") {
        let string = url.replace("http://www.", "");
        for (let i = 0; i < string.length; i++) {
            if (string[i] == ".") {
                let slice = string.slice(i, string.length);
                newStr = string.replace(slice, "");
                break;
            }
        }
    } else if (url.slice(0, 8) == "https://" && url.slice(8, 12) == "www.") {
        let string = url.replace("https://www.", "");
        for (let i = 0; i < string.length; i++) {
            if (string[i] == ".") {
                let slice = string.slice(i, string.length);
                newStr = string.replace(slice, "");
                break;
            }
        }
    } else if (url.slice(0, 7) == "http://") {
        let string = url.replace("http://", "");
        for (let i = 0; i < string.length; i++) {
            if (string[i] == ".") {
                let slice = string.slice(i, string.length);
                newStr = string.replace(slice, "");
                break;
            }
        }
    } else if (url.slice(0, 8) == "https://") {
        let string = url.replace("https://", "");
        for (let i = 0; i < string.length; i++) {
            if (string[i] == ".") {
                let slice = string.slice(i, string.length);
                newStr = string.replace(slice, "");
                break;
            }
        }
    } else {
        let string = url.replace("www.", "");
        for (let i = 0; i < string.length; i++) {
            if (string[i] == ".") {
                let slice = string.slice(i, string.length);
                newStr = string.replace(slice, "");
                break;
            }
        }
    }
    return newStr;
}
// console.log(domainName("http://www.google.com")); //, "google");
// console.log(domainName("http://google.co.jp")); //, "google");
console.log(domainName("https://www.b0xb18zm1xef-3ho6j52wl.io/default.html")); // , "xakep");
// console.log(domainName("https://youtube.com")); //, "youtube");

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"
