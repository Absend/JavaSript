"use strict";

module.exports = (() => {

    class Dictionary {
        constructor() {
            this.dataStote = new Array();
        }

        add(key, value) {
            this.dataStote[key] = value;
            return this;
        }

        find(key) {
            return this.dataStote[key];
        }

        remove(key) {
            delete this.dataStote[key];
        }
    }

    return new Dictionary();
})();