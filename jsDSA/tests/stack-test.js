"use strict";

var expect = require("chai").expect;
var stackResult = require("../linear-data-structures/stack");

describe("Stack Tests", function () {
    describe("Created empty stack", function () {
        it("lenght is 0", function () {
            expect(0).to.eql(stackResult.lenght);
        });
        
        it("is empty", function () {
            expect(true).to.eql(stackResult.isEmpty());
        });
    });

    describe("Push one element to an empty stack shows that", function () {
        it("lenght is 1", function () {
            stackResult.push("el");
            expect(1).to.eql(stackResult.lenght);
        });
        
        it("is not empty)", function () {
            stackResult.push("el");
            expect(false).to.eql(stackResult.isEmpty())
        });
    });
});
