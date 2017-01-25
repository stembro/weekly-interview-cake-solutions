// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Balanced Binary Tree
// https://www.interviewcake.com/question/javascript/balanced-binary-tree

import BinaryTreeNode from './binary_tree';

const isSuperBalanced = (root) => {
    return true;
};

let root = new BinaryTreeNode(1);

let root_left = root.insertLeft(2);
let root_left_left = root_left.insertLeft(3);
let root_left_right = root_left.insertRight(4);

let root_right = root.insertRight(5);
let root_right_left = root_right.insertLeft(6);
let root_right_right = root_right.insertRight(7);

console.log(isSuperBalanced(root));

