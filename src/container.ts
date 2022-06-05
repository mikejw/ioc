
import { Element } from './element';


export class Container {
    private elements: Element[];

    constructor() {
        this.elements = [];
    }
    add(element: Element) {
        const el = this.elements.find((item => {
            return item !== null && item.identifier === element.identifier;
        }))
        if (typeof el !== 'undefined') {
            throw new Error(`Duplicate identifier ${element.identifier} used`);
        } else {
            this.elements.push(element);
        }
    }

    getElementCount(): number {
        return this.elements.length;
    }

    get(identifier: string) {
        const el = this.elements.find((item => {
            return item !== null && item.identifier === identifier;
        }))
        if (typeof el === 'undefined') {
            throw new Error(`Could not find element by identifier ${identifier}`);
        } else {
            return el.value;
        }
    }

    dump(identifier?: string) {
        if (typeof identifier !== 'undefined') {
            return(JSON.stringify(this.get(identifier), null, 2));
        } else {
            return(JSON.stringify(this.elements, null, 2));
        }
    }
}

