// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Queue Two Stacks
// https://www.interviewcake.com/question/javascript/queue-two-stacks

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
    
    let Queue = function Queue() {
        let stack = new Stack();
        let queue = new Stack();
        
        let enqueue = function enqueue(item) {
            stack.push(item);
        }
        
        let dequeue = function dequeue() {
            if (queue.peek() === undefined) {
                while (stack.peek() !== undefined) {
                    queue.push(stack.pop());
                }
            }
            
            return queue.pop();
        }
        
        return {
            enqueue: enqueue,
            dequeue: dequeue
        }
    }
    
    let q = new Queue();

    q.enqueue(1);
    q.enqueue(2);
    console.log(q.dequeue()); // 1
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);
    console.log(q.dequeue()); // 2
    console.log(q.dequeue()); // 3
    q.enqueue(6);
    q.enqueue(7);
    console.log(q.dequeue()); // 4
    console.log(q.dequeue()); // 5
    console.log(q.dequeue()); // 6
    console.log(q.dequeue()); // 7
    q.enqueue(8);
    console.log(q.dequeue()); // 8

})();
