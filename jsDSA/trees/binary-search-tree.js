"use strict";

module.exports = (() => {

    class Node {
        constructor(data, left, right) {
            this._data = data;
            this._left = left;
            this._right = right;
        }

        get data() {
            return this._data;
        }
    }

    class BinarySearchTree {
        constructor() {
            this._root = null;
        }

        insert(data) {
            let node = new Node(data, null, null);

            if (this._root = null) {
                this._root = node;
            } else {
                let currentNode = this._root;
                let parentNode;

                while (true) {
                    parentNode = currentNode;

                    if (data < currentNode.data) {
                        currentNode = currentNode.left;
                        if (currentNode == null) {
                            parentNode.left = node;
                            break;
                        }
                    } else {
                        currentNode = currentNode.right;
                        if (currentNode == null) {
                            parentNode.right = node;
                            break;
                        }
                    }
                }
            }
        }

        inOrder(node) {
            if (!(node == null)) {
                inOrder(node.left);
                putstr(node.data + " ");
                inOrder(node.right);
            }
        }
    }

    return new BinarySearchTree();
})();
