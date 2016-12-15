// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Reverse Words
// https://www.interviewcake.com/question/javascript/reverse-words

'use strict';

let result = (function(message) {
    function reverseArray(arr,start,end) {
        start = start || 0;
        end = end || arr.length;
        for (let i = start; i < (end+start)/2; i++) {
            let temp = arr[i];
            arr[i] = arr[end-1-i+start];
            arr[end-1-i+start] = temp;
        }
    }
    
    function reverseWords(sentence) {
        let charArray = sentence.split('');
        reverseArray(charArray);
        
        let marker = 0;
        for (let i = 0; i <= charArray.length; i++) {
            if (charArray[i] === ' ' || i === charArray.length) {
                reverseArray(charArray, marker, i);
                marker = i+1;
            }
        }
        
        return charArray.join('');
    }
    
    return reverseWords(message);
})(process.argv[2] || 'find you will pain only go you recordings security the into if');

console.log(result);
