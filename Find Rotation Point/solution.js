// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Find Rotation Point
// https://www.interviewcake.com/question/javascript/find-rotation-point

'use strict';

let result = (function() {
    
    let testCases = [
        ['d','e','f','g','h','a','b','c'],
        ['a','b','c','d','e','f','g','h']
    ];
    
    function findRotationPoint(rotatedArray) {
        let start = 0;
        let end = rotatedArray.length - 1;
        
        while (start < end) {
            let middle = Math.floor(start + ((end - start) / 2));

            if (rotatedArray[middle] > rotatedArray[end]) {
                start = middle;
            } else {
                end = middle;
            }
            
            if (start+1 === end) {
                break;
            }
        }
        
        if (rotatedArray[start] > rotatedArray[end])
        {
            return end;
        } else {
            return start;
        }
    }
    
    return findRotationPoint(testCases[0]);
    
})();

console.log(result);
