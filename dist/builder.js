"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
const container_1 = require("./container");
class Builder {
    constructor() {
        this.container = new container_1.Container;
    }
    addDefinitions(toAdd) {
        toAdd.forEach((item) => {
            this.container.add(item);
        });
    }
    getContainer() {
        return this.container;
    }
}
exports.Builder = Builder;
