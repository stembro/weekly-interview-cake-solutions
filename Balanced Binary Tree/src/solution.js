// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Balanced Binary Tree
// https://www.interviewcake.com/question/javascript/balanced-binary-tree

import BinaryTreeNode from './binary_tree';

const isSuperBalanced = ({minDepth, maxDepth}) => {
    return !Number.isNaN(minDepth) &&
            !Number.isNaN(maxDepth) &&
            maxDepth - minDepth <= 1;
}

const getMinAndMaxLeafDepths = (root) => {
    let maxDepth = Number.NaN;
    let minDepth = Number.NaN;

    const preOrder = (root, depth=0) => {
        if (!root) {
            return;
        }

        if (!root.left && !root.right) {
            maxDepth = Number.isNaN(maxDepth) ? depth : Math.max(maxDepth, depth);
            minDepth = Number.isNaN(minDepth) ? depth : Math.min(minDepth, depth);
            return;
        }

        preOrder(root.left, depth+1);
        preOrder(root.right, depth+1);
    }

    preOrder(root);

    return {
        maxDepth,
        minDepth
    };
};

let balancedRoot = new BinaryTreeNode(1);
let balancedRootLeft = balancedRoot.insertLeft(2);
let balancedRootLeftLeft = balancedRootLeft.insertLeft(3);
let balancedRootLeftRight = balancedRootLeft.insertRight(4);
let balancedRootRight = balancedRoot.insertRight(5);
let balancedRootRightLeft = balancedRootRight.insertLeft(6);
let balancedRootRightRight = balancedRootRight.insertRight(7);

let unbalancedRoot = new BinaryTreeNode(1);
let unbalancedRootLeft = unbalancedRoot.insertLeft(2);
let unbalancedRootLeftLeft = unbalancedRootLeft.insertLeft(3);
let unbalancedRootLeftLeftLeft = unbalancedRootLeftLeft.insertLeft(4);
let unbalancedRootRight = unbalancedRoot.insertRight(5);

console.log(isSuperBalanced(getMinAndMaxLeafDepths(balancedRoot)));
console.log(isSuperBalanced(getMinAndMaxLeafDepths(unbalancedRoot)));