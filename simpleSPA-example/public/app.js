"use strict";

import {
    control as control
} from "./control/control.js";

(function () {
    let router = Sammy(function () {

        this.get("#/", function () {
            this.redirect("#/main");
        });

        this.get("#/main", (context) => {
            control.main("#content");
        });

        this.get("#/people", (context) => {
            control.people("#content");
        });

        this.get("#/cats", (context) => {
            control.cats("#other-content");
        });
    });

    $(function () {
       router.run("#/");
    });
})();