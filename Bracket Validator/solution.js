// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Bracket Validator
// https://www.interviewcake.com/question/javascript/bracket-validator

'use strict';

let result = (function(input) {
    let stack = [];
    let openers = ['{', '[', '('];
    let closers = ['}', ']', ')'];

    for (let c of input) {
        if (openers.indexOf(c) >= 0) {
            stack.push(c);
        } else if (closers.indexOf(c) >= 0) {
            if (stack.length === 0) {
                return false;
            }
            
            var closerIndex = closers.indexOf(c);
            var openerIndex = openers.indexOf(stack.pop());
            
            if (closerIndex !== openerIndex) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
    
})("{[()]}");

console.log(result);
