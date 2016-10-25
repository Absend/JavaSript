"use strict";

var expect = require("chai").expect;
var linkedList = require("../jsDSA/linear-data-structures/linked-list");

describe("LinkedList Tests", function () {
    describe("Created empty linked list", function () {
        it("has a head", function () {
            expect("head").to.eql(linkedList.head.element);
        });

        it("head next node is null", function () {
            expect(null).to.eql(linkedList.head.next);
        });

        it(".insertAfter head next node is not null", function () {
            linkedList.insertAfter("hi", "head");
            expect(true).to.equal(linkedList.head.next != null);
        });

        it(".insertAfter head next element is inserted", function () {
            linkedList.insertAfter("hi", "head");
            expect("hi").to.eql(linkedList.head.next.element);
        });

    });

});