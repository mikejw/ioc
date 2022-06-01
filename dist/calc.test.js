"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = require("./calc");
describe("test add function", function () {
    it("should return 15 for add(10,5)", function () {
        expect((0, calc_1.add)(10, 5)).toBe(15);
    });
    it("should return 5 for add(2,3)", function () {
        expect((0, calc_1.add)(2, 3)).toBe(5);
    });
});
