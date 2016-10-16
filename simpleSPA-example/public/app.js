"use strict";

import {
    control as control
} from "./control/control.js";

(function () {
    let sammyApp = Sammy("#content", function () {

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
            control.cats("#content");
        });
    });

    $(function () {
        sammyApp.run("#/");
    });
})();