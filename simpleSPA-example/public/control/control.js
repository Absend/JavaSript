"use strict";

import {
    data as data
} from "../data/data.js";

import {
    view as view
} from "../view/view.js";

class Control {
    constructor() {
        this.data = data.getAll("../data/db.json")
    }

    main(selector) {
        return view.pageMain(selector);
    }

    people(selector) {
        this.data
            .then(function (value) {
                let data = value.db[0];
                return view.pagePeople(selector, data);
            });
    }

    cats(selector) {
        this.data
            .then(function (value) {
                let data = value.db[1];
                return view.pageCats(selector, data);
            });
    }
}

let control = new Control();
export {
    control
}