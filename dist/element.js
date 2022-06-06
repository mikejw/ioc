"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
class Element {
    constructor(name, value) {
        this.identifier = name;
        this.value = value;
        this.instance = null;
    }
    getInstance() {
        return this.instance;
    }
    setInstance(instance) {
        this.instance = instance;
    }
}
exports.Element = Element;
