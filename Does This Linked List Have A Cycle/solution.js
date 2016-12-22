// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Does This Linked List Have A Cycle
// https://www.interviewcake.com/question/javascript/linked-list-cycles

'use strict';

(function() {
    
    function LinkedListNode(value) {
        this.value = value;
        this.next = null;
    }
    
    function generateList(numNodes, withCycle) {
        let root = new LinkedListNode('1'),
            curr = root;
        
        if (numNodes < 1) {
            numNodes = 1;
        }
        
        for (let i = 0; i < numNodes - 1; i++ ) {
            curr.next = new LinkedListNode(i+2+'')
            curr = curr.next
        }
        
        if (withCycle) {
            curr.next = root;
        }
        
        return root;
    }
    
    function containsCycle(root) {
        let slowPtr = root,
            fastPtr = root.next;
            
        while (slowPtr && fastPtr && fastPtr.next) {
            if (slowPtr === fastPtr) {
                return true;
            }
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
        }
        
        return false;
    }
    
    for (let i = 1; i < 100; i++) {
        let listWithCycle = generateList(i, true);
        if (!containsCycle(listWithCycle)) {
            throw new Error("cycle detection failed when list length is " + i);
        }
    }
    
    for (let i = 1; i < 100; i++) {
        let listWithoutCycle = generateList(i, false);
        if (containsCycle(listWithoutCycle)) {
            throw new Error("cycle erroneously detected in non-cycle list when list length is " + i);
        }
    }
    
    console.log('tests passed');

})();

