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
    getElementCount() {
        return this.elements.length;
    }
    get(identifier) {
        let el = this.elements.find((item => {
            return item !== null && item.identifier === identifier;
        }));
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
