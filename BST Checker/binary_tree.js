class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    
    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    };
    
    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    };
}

const GetValidBST = () => {
    let root = new BinaryTreeNode(10);
    
    root.insertLeft(3);
    root.left.insertLeft(2);
    root.left.insertRight(5);
    
    root.insertRight(20);
    root.right.insertLeft(15);
    root.right.insertRight(25);
    
    return JSON.parse(JSON.stringify(root));
}

const GetInvalidBST = () => {
    let root = new BinaryTreeNode(1);
    
    root.insertLeft(5);
    root.left.insertLeft(2);
    root.left.insertRight(3);
    
    root.insertRight(20);
    root.right.insertLeft(15);
    root.right.insertRight(17);
    
    return JSON.parse(JSON.stringify(root));
}

module.exports = {
    BinaryTreeNode,
    GetValidBST,
    GetInvalidBST
}