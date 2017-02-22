// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Permutation Palindrome
// https://www.interviewcake.com/question/javascript/permutation-Palindrome

(function(word) {
    let dict = Object.create(null);
    
    for (let c of word) {
        if (c in dict) {
            delete dict[c];
        } else {
            dict[c] = null;
        }
    }

    const keyCount = Object.keys(dict).length;
    const wordLengthIsEven = word.length % 2 === 0;

    console.log(wordLengthIsEven ? keyCount === 0 : keyCount === 1);

}(process.argv[2] || "civic"));