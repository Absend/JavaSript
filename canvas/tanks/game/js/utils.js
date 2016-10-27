"use strict";

var Random = function getRandomValue(min, max) {
    if (!max) {
        max = min;
        min = 0;
    }
    return (Math.random() * (max - min) + min) | 0;
};

export { Random }