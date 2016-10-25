"use strict";

module.exports = (() => {
    class Node {
        constructor(element) {
            this._element = element;
            this._next = null;
            this._previous = null;
        }

        get element() {
            return this._element;
        }

        get next() {
            return this._next;
        }
        set next(value) {
            this._next = value;
        }

        get previous() {
            return this._previous;
        }
        set previous(value) {
            this._previous = value;
        }
    }

    class DoublyLinkedList {
        constructor() {
            this.head = new Node("head");
        }

        findLast(item) {
            let currNode = this.head;
            while (currNode.element != item) {
                currNode = currNode.next;
            }
            return currNode;
        }
    }

    return new DoublyLinkedList();
})();