

import { Element } from './element';


export class Container {
    private elements: Element[];

    constructor() {
        this.elements = [];
    }
    add(element: Element) {
        this.elements.push(element);
    }

    getElementCount(): number {
        return this.elements.length;
    }

    get(identifier: string) {
        let el = this.elements.find((item => {
            return item !== null && item.identifier === identifier;
        }))
        if (typeof el === 'undefined') {
            throw new Error(`Could not find element by identifier ${identifier}`);
        } else {
            return el.value;
        }
    }

    dump() {
        console.log(JSON.stringify(this.elements));
    }

}

