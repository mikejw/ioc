"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
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
exports.Container = Container;
