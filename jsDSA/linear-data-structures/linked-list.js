"use strict";

module.exports = (() => {
    class Node {
        constructor(element) {
            this._element = element;
            this._next = null;
        }

        get element() {
            return this._element;
        }

        get next() {
            return this._next;
        }
        set next(value){
            this._next = value;
        }
    }

    class LinkedList {
        constructor() {
            this.head = new Node("head");
        }

        find(item) {
            let currNode = this.head;
            while (currNode.element != item) {
                currNode = currNode.next;
            }
            return currNode;
        }

        insertAfter(newElement, item) {
            let newNode = new Node(newElement);
            let currentNode = this.find(item);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }

        findPrevious(item) {
            let currNode = this.head;
            while (!(currNode == null) && currNode.next != item) {
                currNode = currNode.next;
            }

            return currNode;
        }

        remove(item) {
            let prevElement = this.findPrevious(item);
            if (!(prevElement.next == null)) {
                prevElement.next = prevElement.next.next;
            }
        }

        toString() {
            let currNode = this.head,
                result = "";

            while (!(currNode.next == null)) {
                result += currNode.next.element;
                currNode = currNode.next;
                if (!(currNode == null)) {
                    result += " ";
                }
            }

            return result;
        }
    }

    return new LinkedList();
})();