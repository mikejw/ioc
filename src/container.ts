

import { Element } from "./types";


export class Container {
    private elements: [Element?];

    constructor() {
        this.elements = [];
    }
    add(element: Element) {
        this.elements.push(element);
    }

    dump() {
        console.log(JSON.stringify(this.elements));
    }
}

