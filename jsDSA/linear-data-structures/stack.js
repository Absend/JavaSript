"use strict";

module.exports = (() => {
    class Stack {
        constructor() {
            this._dataStore = [];
            this._top = 0;
        }

        get lenght() {
            return this._top;
        }

        push(element) {
            this._dataStore[this._top++] = element;
        }

        pop() {
            return this._dataStore[--this._top];
        }
        
        peek() {
            return this._dataStore[this._top - 1];
        }

        clear() {
            this._top = 0;
        }

        isEmpty() {
            if (this._top === 0) {
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

    return new Stack();
})();
