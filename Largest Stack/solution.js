// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Largest Stack
// https://www.interviewcake.com/question/javascript/largest-stack

'use strict';

(function() {

    let Stack = function Stack() {
        let _items = [];

        let push = function push(item) {
            _items.push(item);
        }
        
        let pop = function pop() {
            return _items.pop();
        }
        
        let peek = function peek() {
            return _items.length > 0 ? _items[_items.length-1] : undefined;
        }
        
        return {
            push: push,
            pop: pop,
            peek: peek
        } 
    };
    
    let MaxStack = function MaxStack() {
        let _stack = new Stack();
        let _maxStack = new Stack();
        let _max = Number.MIN_VALUE;

        let push = function push(item) {
            _max = Math.max(item,_max);
            _maxStack.push(_max);
            _stack.push(item);
        }
        
        let pop = function pop() {
            _maxStack.pop();
            return _stack.pop();
        }
        
        let peek = function peek() {
            return _stack.peek();
        }
        
        let max = function max() {
            return _maxStack.peek();
        }
        
        return {
            push: push,
            pop: pop,
            peek: peek,
            max: max
        } 
    }
    
    let s = new MaxStack();

    s.push(1);
    s.push(2);
    s.push(3);
    s.push(4);
    s.push(5);
    s.push(6);
    
    while (s.peek() !== undefined) {
        console.log(s.max());
        s.pop();
    }

})();

