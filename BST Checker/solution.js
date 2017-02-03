// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Binary Search Tree Checker
// https://www.interviewcake.com/question/javascript/bst-checker

const { BinaryTreeNode, GetValidBST, GetInvalidBST } = require('./binary_tree.js');

let validBst = GetValidBST(),
    invalidBst = GetInvalidBST();


const isValidBst = (bst) => {
    
    let lastSeenValue = -Infinity,
        isValid = true;
    
    const inOrder = (bst) => {
        if(bst) {
            inOrder(bst.left);
            
            if (bst.value <= lastSeenValue) {
                isValid = false;
            }
            
            lastSeenValue = bst.value;
            
            inOrder(bst.right);
        }
    };
    
    inOrder(bst);
    return isValid;
};

console.log(isValidBst(validBst));
console.log(isValidBst(invalidBst));



