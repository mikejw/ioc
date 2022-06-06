
import { Element } from './element';
import { ElementFlat } from './types';
import { Container } from './container';

export class Builder {
    private container: Container;

    constructor () {
        this.container = new Container;
    }

    addDefinitions(toAdd: ElementFlat[]) {
        toAdd.forEach((item: ElementFlat) => {
            const el = new Element(item.identifier, item.value);
            const container = this.container;
            const handler = {
                get(el: Element, prop: keyof Element) {
                    if (typeof el[prop] === 'function') {
                        return el[prop](container);
                    } else {
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
