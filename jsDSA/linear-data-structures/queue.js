"use strict";

module.exports = (() => {
    class Queue {
        constructor() {
            this._dataStore = [];
            this._count = 0;
        }

        get lenght() {
            return this._count;
        }

        enqueue(element) {
            this._dataStore.push(element);
            ++this._count;
        }

        dequeue() {
            --this._count;
            return this._dataStore.shift();
        }

        front() {
            return this._dataStore[0];
        }

        back() {
            return this._dataStore[this._count - 1];
        }

        isEmpty() {
            if (this._count === 0) {
                return true;
            }
            return false;
        }

        toString() {
            let result = "",
                i,
                len = this._dataStore.length;

            for (i = 0; i < len; i += 1) {
                result += this._dataStore[i] + " ";
            }

            return result;
        }
    }

    return new Queue();
})();