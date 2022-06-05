"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
const element_1 = require("./element");
const container_1 = require("./container");
class Builder {
    constructor() {
        this.container = new container_1.Container;
    }
    addDefinitions(toAdd) {
        toAdd.forEach((item) => {
            const el = new element_1.Element(item.identifier, item.value);
            let container = this.container;
            const handler = {
                get(el, prop) {
                    if (typeof el[prop] === 'function') {
                        return el[prop](container);
                    }
                    else {
                        return el[prop];
                    }
                }
            };
            this.container.add(new Proxy(el, handler));
        });
    }
    getContainer() {
        return this.container;
    }
}
exports.Builder = Builder;
