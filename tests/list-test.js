"use strict";

var expect = require("chai").expect;
var listResult = require("../jsDSA/linear-data-structures/list");

describe("List Tests", function () {
    describe("Created empty list", function () {
        it("lenght is 0", function () {
            expect(0).to.eql(listResult.lenght);
        });
        
        it("contains(sample) is false)", function () {
            expect(false).to.equal(listResult.contains("sample"));
        });

        it("indexOf(sample) is -1", function () {
            expect(-1).to.equal(listResult.indexOf("sample"));
        });
    });

    describe("Add one element to an empty list shows that", function () {
        it("lenght is 1", function () {
            listResult.add("el");
            expect(1).to.eql(listResult.lenght);
        });
        
        it("contains(addedElement) is true)", function () {
            listResult.add("el");
            expect(true).to.equal(listResult.contains("el"));
        });

        it("indexOf(addedElement) is 0", function () {
            expect(0).to.equal(listResult.indexOf("el"));
        });
    });
});
