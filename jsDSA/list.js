"use strict";

exports.list = (function () {
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
            this._pos = position;
        }

        get elementAtPos() {
            return this._dataStore[this._pos];
        }

        append(element) {
            this._dataStore.push(element);
            ++this._listSize;
            return this;
        }

        indexOf(element) {
            let i,
                len = this._dataStore.length;

            for (i = 0; i < len; i += 1) {
                if (this._dataStore[i] === element) {
                    return i;
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
            return this._dataStore;
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
            delete this._dataStore;
            this._dataStore = [];
            this.list = this._pos = 0;
        }

        contains(element) {
            if (this.indexOf(element) > -1) {
                return true;
            }
            return false;
        }

        // Traversing a List
        frontPos() {
            this._pos = 0;
        }

        endPos() {
            this._pos = this._listSize - 1;
        }

        prevPos() {
            if (this._pos > 0) {
                --this._pos;
            }
        }

        nextPos() {
            if (this._pos < this._listSize - 1) {
                ++this._pos;
            }
        }
    }

    return new List();
})();