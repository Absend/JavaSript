var expect = require('chai').expect;
var result = require('../converter/converter');

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
            it("convert number 7 -> \"111\"", function () {
                var seven = result.decToBin(7);

                expect(seven).to.equal("111");
            });
            it("convert number 64 -> \"1000000\"", function () {
                var sixtyFour = result.decToBin(64);

                expect(sixtyFour).to.equal("1000000");
            });
            it("convert number 100 -> \"1100100\"", function () {
                var aHundred = result.decToBin(100);

                expect(aHundred).to.equal("1100100");
            });
        });

        describe("Decimal to Hexadecimal string conversion", function () {
            it("converts numbers 7 -> \"7\"", function () {
                var seven = result.decToHex(7);

                expect(seven).to.equal("7");
            });
            it("converts numbers 15 -> \"F\"", function () {
                var seven = result.decToHex(15);

                expect(seven).to.equal("F");
            });
            it("converts numbers 170 -> \"AA\"", function () {
                var seven = result.decToHex(170);

                expect(seven).to.equal("AA");
            });
        });

        describe("Hexadecimal to Decimal conversion", function () {
            it("converts hex \"F\" to bin 15", function () {
                var seven = result.hexToDec("F");

                expect(seven).to.equal(15);
            });
            it("converts hex \"aa\" to dec 170", function () {
                var seven = result.hexToDec("aa");

                expect(seven).to.equal(170);
            });
            it("converts hex 256 to dec 598", function () {
                var sixtyFour = result.hexToDec(256);

                expect(sixtyFour).to.equal(598);
            });
            it("converts hex 100 to dec 256", function () {
                var aHundred = result.hexToDec("100");

                expect(aHundred).to.equal(256);
            });
        });

        describe("Hexadecimal to Binary conversion", function () {
            it("converts hex \"aa\" to bin \"10101010\"", function () {
                var seven = result.hexToBin("aa");

                expect(seven).to.equal("10101010");
            });
            it("converts hex \"F\" to bin \"1111\"", function () {
                var seven = result.hexToBin("F");

                expect(seven).to.equal("1111");
            });
            it("converts hex 256 to bin \"1001010110\"", function () {
                var sixtyFour = result.hexToBin(256);

                expect(sixtyFour).to.equal("1001010110");
            });
            it("converts hex 100 to bin \"100000000\"", function () {
                var aHundred = result.hexToBin("100");

                expect(aHundred).to.equal("100000000");
            });
        });

    });
});