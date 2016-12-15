// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Bracket Validator
// https://www.interviewcake.com/question/javascript/bracket-validator

'use strict';

let result = (function(input) {
    let stack = [];
    let openers = ['{', '[', '('];
    let closers = ['}', ']', ')'];
    let pairCounts = [0]
    
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
    
    return stack.length === 0 && pairCounts.reduce(function(a,b) {
        return a && b % 2 === 0;
    }, true);
    
})("{[()]}");

console.log(result);