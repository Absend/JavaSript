"use strict";

var expect = require("chai").expect;
var listResult = require("../jsDSA/linear-data-structures/list");

describe("List Tests", function () {
    describe("Created empty list", function () {
        it(".data returns empty array", function () {
            let expected = [];
            expect(expected).to.eql(listResult.data);
        });

        it("has lenght equal to 0", function () {
            expect(0).to.equal(listResult.lenght);
        });

        it(".contains(sample) returns false)", function () {
            expect(false).to.equal(listResult.contains("sample"));
        });

        it(".indexOf(sample) equals to -1", function () {
            expect(-1).to.equal(listResult.indexOf("sample"));
        });
    });

    describe("List with one element added", function () {
        beforeEach(function () {
            listResult.add("el");
        });

        it("has lenght equal to 1", function () {
            expect(1).to.eql(listResult.lenght);
        });

        it(".contains(addedElement) returns true)", function () {
            expect(true).to.equal(listResult.contains("el"));
        });

        it(".indexOf(addedElement) equals to 0", function () {
            expect(0).to.eql(listResult.indexOf("el"));
        });

        it("after .clear(), has lenght equal to 0", function () {
            listResult.clear();
            expect(0).to.eql(listResult.lenght);
        });
    });

    describe("List full of five elements", function () {

        let elKuba = "Kuba";

        beforeEach(function () {
            listResult.clear();
            listResult
                .add("Mimi")
                .add("Petq")
                .add("Nia")
                .add("Chib")
                .add("Kuba");
        });

        it(".lenght equal to 5", function () {
            expect(5).to.eql(listResult.lenght);
        });

        it(".contains(elKuba) returns true", function () {
            expect(true).to.eql(listResult.contains(elKuba));
        });

        it(".indexOf(\"Nia\") equals 2", function(){
            expect(2).to.eql(listResult.indexOf("Nia"));
        });

        it(".toString() returns Mimi Petq Nia Chib Kuba", function () {
            expect("Mimi Petq Nia Chib Kuba").to.eql(listResult.toString());
        });

        it(".frontPos() equals 0", function () {
            expect(0).to.eql(listResult.frontPos);
        });

        it(".endPos() equals 4", function () {
            expect(4).to.eql(listResult.endPos);
        });

        it(".currPos equals 0", function () {
            expect(0).to.eql(listResult.currPos);
        });

        it(".currPos equals value", function () {
            let value = 3;
            listResult.currPos = value;

            expect(3).to.eql(listResult.currPos);
        });

        it(".elementAtPos equals Mimi", function () {
            expect("Mimi").to.eql(listResult.elementAtPos);
        });

        it(".nextPos equals currPos + 1", function () {
            listResult.currPos = 3;
            expect(1 + listResult.currPos).to.eql(listResult.nextPos);
        });

        it(".prevPos equals currPos - 1", function () {
            listResult.currPos = 3;
            expect(-1 + listResult.currPos).to.eql(listResult.prevPos);
        });

        it("when currPos = lenght - 1, nextPos = -1 ", function () {
            listResult.currPos = listResult.lenght - 1;
            expect(-1).to.eql(listResult.nextPos);
        });

        it("when currPos = 0, prevPos = -1 ", function () {
            listResult.currPos = 0;
            expect(-1).to.eql(listResult.prevPos);
        });

        it("when .add(element), length += 1", function () {
            let element = "Misho",
                len = listResult.lenght;
            listResult.add(element);
            expect(++len).to.eql(listResult.lenght);
        });

        it("when .add(element), contains added element", function () {
            let element = "Nick";
            listResult.add(element);
            expect(true).to.eql(listResult.contains(element));
        });

        it("when .add(element), added element is last position element", function () {
            let element = "Pit",
                len = listResult.lenght;
            listResult.add(element);
            let lastPos = listResult.endPos;
            expect(element).to.eql(listResult.data[lastPos]);
        });
    });
});