// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - 2nd Largest Item in BST
// https://www.interviewcake.com/question/javascript/second-largest-item-in-bst

'use strict';

let result = (function() {

    let BinaryTreeNode = function(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    
    BinaryTreeNode.prototype.insertLeft = function(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }
    
    BinaryTreeNode.prototype.insertRight = function(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
    
    function getMax(btnode) {
        let current = btnode;
        while (current.right) {
            current = current.right;
        }
        return current;
    }
    
    function get2ndMax(btnode) {
        let current = btnode;
    
        while(current) {
            if (current.left && !current.right) {
                return getMax(current.left);
            }
            
            if (current.right && (!current.right.left && !current.right.right)) {
                return current;
            }
            
            current = current.right;
        }
    }
    
    function getTestBT() {
        let bt = new BinaryTreeNode(5);
    
        let btLeft = bt.insertLeft(3);
        btLeft.insertLeft(1);
        btLeft.insertRight(2);
        
        let btRight = bt.insertRight(7);
        btRight.insertLeft(6);
        btRight.insertRight(8);
        
        return bt; 
    }
    
    return get2ndMax(getTestBT()).value;
})();

console.log(result);