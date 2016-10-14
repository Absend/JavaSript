"use strict";

var expect = require("chai").expect;
var queueResult = require("../jsDSA/linear-data-structures/queue");

describe("Queue Tests", function () {
    describe("Created empty queue", function () {
        it("lenght is 0", function () {
            expect(0).to.eql(queueResult.lenght);
        });
        
        it("is empty", function () {
            expect(true).to.eql(queueResult.isEmpty());
        });
    });

    describe("Enqueue one element to an empty queue shows that", function () {
        it("lenght is 1", function () {
            queueResult.enqueue("el");
            expect(1).to.eql(queueResult.lenght);
        });
        
        it("is not empty)", function () {
            queueResult.enqueue("el");
            expect(false).to.eql(queueResult.isEmpty())
        });
    });
});
