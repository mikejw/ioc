"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container = /** @class */ (function () {
    function Container() {
        this.elements = [];
    }
    Container.prototype.add = function (element) {
        this.elements.push(element);
    };
    Container.prototype.dump = function () {
        console.log(JSON.stringify(this.elements));
    };
    return Container;
}());
exports.default = Container;
