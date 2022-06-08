
import { Container } from './container';
import { ElementFlat } from './types';
import { Builder } from './builder';

export class Factory {
    static instance: Container | null = null;

    static getContainer(toAdd?: ElementFlat[], noIdempotent?: boolean): Container {
        if (this.instance === null) {
            const builder = new Builder(!!noIdempotent);
            this.instance = builder.getContainer();
        }

        if (toAdd && toAdd.length) {
            this.instance.getBuilder().addDefinitions(toAdd);
        }

        return this.instance;
    }
}
