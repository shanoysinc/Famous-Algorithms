function anagrams(word, words) {
    let sortedWord = word
        .split("")
        .sort()
        .join("");

    let anagram = [];
    for (let i = 0; i < words.length; i++) {
        if (
            sortedWord ==
            words[i]
                .split("")
                .sort()
                .join("")
        ) {
            anagram.push(words[i]);
        }
    }
    return anagram;
}

anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]); //=> ['aabb', 'bbaa']

anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]); //=> ['carer', 'racer']

anagrams("laser", ["lazing", "lazy", "lacer"]); // => []
git