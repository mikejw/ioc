"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
class Container {
    constructor(builder, noIdempotency) {
        this.elements = [];
        this.noIdempotency = !!noIdempotency;
        this.builder = builder;
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
    getIdempotent() {
        return !this.noIdempotency;
    }
    getBuilder() {
        return this.builder;
    }
    dump(identifier) {
        if (typeof identifier !== 'undefined') {
            return (JSON.stringify(this.get(identifier), null, 2));
        }
        else {
            return (JSON.stringify(this.elements.map(item => ({ identifier: item.identifier, value: item.value })), null, 2));
        }
    }
}
exports.Container = Container;
