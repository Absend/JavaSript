"use strict";

(function converter() {
    exports.rgbToHex = function (red, green, blue) {

        var redHex = red.toString(16);
        var greenHex = green.toString(16);
        var blueHex = blue.toString(16);

        return pad(redHex) + pad(greenHex) + pad(blueHex);
    };

    function pad(hex) {
        return (hex.length === 1 ? "0" + hex : hex);
    }

    exports.hexToRgb = function (hex) {

        var red = parseInt(hex.substring(0, 2), 16);
        var green = parseInt(hex.substring(2, 4), 16);
        var blue = parseInt(hex.substring(4, 6), 16);

        return [red, green, blue];
    };

    exports.hexToDec = function (hex) {
        var input = String(hex);

        // var hexKey = "0123456789ABCDEF";
        // var dec = 0;

        // var len = input.length;
        // for (var i = 0; i < len; i += 1) {
        //     var digit = hexKey.indexOf(input[i].toUpperCase());

        //     dec = digit + dec * 16;
        // }

        // return dec;

        return parseInt(input, 16);
    }

    exports.hexToBin = function (hex) {
        var input = String(hex);

        return parseInt(input, 16).toString(2);
    }

    exports.decToBin = function (dec) {
        return dec.toString(2);
    }

    exports.decToHex = function (dec) {
        return dec.toString(16).toUpperCase();
    }
})();