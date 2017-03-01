'use strict';

(function(sentence, position) {

    sentence = sentence || "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";
    position = position || 10;

    let openStack = [],
        closeStack = [];

    Array.from(sentence).forEach((char, index) => {
        char === '(' && openStack.push(index) ||
        char === ')' && closeStack.unshift(index);
    });

    if (openStack.length !== closeStack.length) {
        throw Error("Parenthesis are mismatched");
    }

    let result = closeStack[openStack.indexOf(position)];
    console.log(result);

}(process.argv[2], process.argv[3]));