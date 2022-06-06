"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
class Container {
    constructor() {
        this.elements = [];
    }
    find(identifier) {
        return this.elements.find((item => {
            return item !== null && item.identifier === identifier;
        }));
    }
    add(element) {
        const el = this.find(element.identifier);
        if (typeof el !== 'undefined') {
            throw new Error(`Duplicate identifier ${element.identifier} used`);
        }
        else {
            this.elements.push(element);
        }
    }
    getElementCount() {
        return this.elements.length;
    }
    get(identifier) {
        const el = this.find(identifier);
        if (typeof el === 'undefined') {
            throw new Error(`Could not find element by identifier ${identifier}`);
        }
        else {
            return el.value;
        }
    }
    dump(identifier) {
        if (typeof identifier !== 'undefined') {
            return (JSON.stringify(this.get(identifier), null, 2));
        }
        else {
            return (JSON.stringify(this.elements, null, 2));
        }
    }
}
exports.Container = Container;
