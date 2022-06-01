"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Container {
    constructor() {
        this.elements = [];
    }
    add(element) {
        this.elements.push(element);
    }
    dump() {
        console.log(JSON.stringify(this.elements));
    }
}
exports.default = Container;
