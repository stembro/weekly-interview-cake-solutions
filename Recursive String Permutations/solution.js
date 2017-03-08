// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Reverse Words
// https://www.interviewcake.com/question/javascript/recursive-string-permutations

(function(arg){

    let permutations = recursivePermutations(arg);

    function recursivePermutations(word) {
        if (word.length === 1) {
            return [word];
        }

        let ch = word[0];
        let priorPermutations = recursivePermutations(word.slice(1));
        let permutations = [];

        for (let i = 0; i < priorPermutations.length; i++) {
            for (let j = 0; j < priorPermutations[i].length+1; j++) {
                permutations.push(priorPermutations[i].slice(0,j) + ch + priorPermutations[i].slice(j));
            }
        }

        return permutations;
    }

    console.log(permutations.sort().join('\n'));

}(process.argv[2]||"abcd"))




