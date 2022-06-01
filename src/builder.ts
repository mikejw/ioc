
import { Element } from './types';
import Container from './container';

class Builder {
    private container: Container;

    constructor () {
        this.container = new Container;
    }

    addDefinitions(toAdd: [Element]) {
        toAdd.forEach((item: Element) => {
            this.container.add(item);
        });
    }

   getContainer() {
        return this.container;
   }
}

export default Builder;