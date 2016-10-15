"use strict";

module.exports = (() => {
    class List {
        constructor() {
            this._listSize = 0;
            this._pos = 0;
            this._dataStore = [];
        }

        get lenght() {
            return this._listSize;
        }

        get currPos() {
            return this._pos;
        }
        set currPos(position) {
            if (0 <= position && position < this._dataStore.length) {
                this._pos = position;
            } else {
                this._pos = 0;
            }
        }

        get frontPos() {
            return this._pos = 0;
        }

        get endPos() {
            return this._pos = this._listSize - 1;
        }

        get prevPos() {
            if (this._pos > 0) {
                return --this._pos;
            }
            return -1;
        }

        get nextPos() {
            if (this._pos < this._listSize - 1) {
                return ++this._pos;
            }
            return -1;
        }

        get elementAtPos() {
            return this._dataStore[this._pos];
        }

        add(element) {
            this._dataStore.push(element);
            ++this._listSize;
            return this;
        }

        indexOf(element) {
            let i,
                len = this._dataStore.length;

            if (len > 0) {
                for (i = 0; i < len; i += 1) {
                    if (this._dataStore[i] === element) {
                        return i;
                    }
                }
            }
            return -1;
        }

        remove(element) {
            let foundAt = this.indexOf(element);
            if (foundAt > -1) {
                this._dataStore.splice(foundAt, 1);
                --this._listSize;
            }
            return this;
        }

        removeAt(index) {
            if (index > -1 && index < this._listSize) {
                this._dataStore.splice(index, 1);
                --this._listSize;
            }
            return this;
        }

        toString() {
            let result = "",
                i,
                len = this._dataStore.length;

            for (i = 0; i < len - 1; i += 1) {
                result += this._dataStore[i] + " ";
            }
            result += this._dataStore[len - 1];

            return result;
        }

        insert(element, after) {
            let insertPos = this.indexOf(after) + 1;
            if (insertPos > 0) {
                this._dataStore.splice(insertPos, 0, element);
                ++this._listSize;
            }
            return this;
        }

        insertAt(element, index) {
            if (index > -1 && index < this._listSize + 1) {
                this._dataStore.splice(index, 0, element);
                ++this._listSize;
            }
            return this;
        }

        clear() {
            this._dataStore = [];
            this._listSize = this._pos = 0;
        }

        contains(element) {
            if (this.indexOf(element) > -1) {
                return true;
            }
            return false;
        }
    }

    return new List();
})();