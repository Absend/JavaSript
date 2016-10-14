var expect = require('chai').expect;
var result = require('../app/js/converter');

describe('Converter Tests', function () {
    describe("Color Code Converter", function () {
        describe("RGB to Hex conversion", function () {
            it("converts the basic colors", function () {
                var redHex = result.rgbToHex(255, 0, 0);
                var greenHex = result.rgbToHex(0, 255, 0);
                var blueHex = result.rgbToHex(0, 0, 255);

                expect(redHex).to.equal("ff0000");
                expect(greenHex).to.equal("00ff00");
                expect(blueHex).to.equal("0000ff");
            });
        });

        describe("Hex to RGB conversion", function () {
            it("converts the basic colors", function () {
                var red = result.hexToRgb("ff0000");
                var green = result.hexToRgb("00ff00");
                var blue = result.hexToRgb("0000ff");

                expect(red).to.deep.equal([255, 0, 0]);
                expect(green).to.deep.equal([0, 255, 0]);
                expect(blue).to.deep.equal([0, 0, 255]);
            });
        });
    });

    describe("Numbers Converter", function () {
        describe("Decimal to Binary string conversion", function () {
            it("converts numbers 7 -> \"111\", 64 -> \"1000000\", 100 -> \"1100100\"", function () {
                var seven = result.decToBin(7);
                var sixtyFour = result.decToBin(64);
                var aHundred = result.decToBin(100);

                expect(seven).to.equal("111");
                expect(sixtyFour).to.equal("1000000");
                expect(aHundred).to.equal("1100100");
            });
        });
    });
});