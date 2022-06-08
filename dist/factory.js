"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
const builder_1 = require("./builder");
class Factory {
    static getContainer(toAdd, noIdempotent) {
        if (this.instance === null) {
            const builder = new builder_1.Builder(!!noIdempotent);
            this.instance = builder.getContainer();
        }
        if (toAdd && toAdd.length) {
            this.instance.getBuilder().addDefinitions(toAdd);
        }
        return this.instance;
    }
}
exports.Factory = Factory;
Factory.instance = null;
