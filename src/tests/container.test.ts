
import { ElementFlat } from '../types';
import { Builder } from '../builder';

describe("invalid get", () => {

    it("should thow an error when wrong identifier used", () => {
        const b = new Builder();
        b.addDefinitions([{
            identifier: "Foo",
            value: "foo"
        }] as ElementFlat[]); // type coercion not required in ES2016
        const container = b.getContainer();
        expect(() => {
            container.get('Fooz');
        }).toThrow('Could not find element by identifier Fooz');
    });

});