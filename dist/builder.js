"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __importDefault(require("./container"));
var Builder = /** @class */ (function () {
    function Builder() {
        this.container = new container_1.default;
    }
    Builder.prototype.addDefinitions = function (toAdd) {
        var _this = this;
        toAdd.forEach(function (item) {
            _this.container.add(item);
        });
    };
    Builder.prototype.getContainer = function () {
        return this.container;
    };
    return Builder;
}());
exports.default = Builder;
