"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
describe("test add function", () => {
    it("should return 15 for add(10,5)", () => {
        expect((0, calc_1.add)(10, 5)).toBe(15);
    });
    it("should return 5 for add(2,3)", () => {
        expect((0, calc_1.add)(2, 3)).toBe(5);
    });
});
