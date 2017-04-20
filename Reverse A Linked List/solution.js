// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Reverse A Linked List
// https://www.interviewcake.com/question/javascript/reverse-linked-list

'use strict';

let result = (function(testInput) {
    
    class LinkedListNode {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }
    
    function stringToList(str) {
        if (str.length === 0) {
            return null;
        }
        
        let head = new LinkedListNode(str[0]);
        str.split('').slice(1).reduce((lastListItem, char) => {
            let node = new LinkedListNode(char);
            lastListItem.next = node;
            return node;
        }, head);
        
        return head;
    }
    
    function listToString(head) {
        if (head === null) {
            return '';
        }
        
        let curr = head;
        let str = '';
        while (curr !== null) {
            str += curr.value;
            curr = curr.next;
        }
        
        return str;
    }
    
    function printList(head) {
        let curr = head;
        let arr = [];
        while (curr !== null) {
            arr.push(curr.value);
            curr = curr.next;
        }
        console.log(arr.join(''));
    }
    
    function reverseListInPlace(head) {

        // set prevNode to null
        // set currentNode to head
        
        // start loop while current.next is not null
        //  -- set nextNode to current.next
        //  -- set currentNode.next to prevNode
        //  -- prevNode to currentNode
        //  -- currentNode = nextNode
        
        let currentNode = head;
        let prevNode = null;
        
        while (currentNode !== null) {
            let nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;

            if (nextNode === null) {
                break;
            }
            currentNode = nextNode;
        }
        
        return currentNode;
    }
    
    return listToString(reverseListInPlace(stringToList(testInput)));
    
})("abc");

console.log(result);
