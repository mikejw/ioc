
import { ElementFlat } from '../types';
import { Builder } from '../builder';

describe("invalid get", () => {
    it("should thow an error when wrong identifier used", () => {
        const b = new Builder();
        b.addDefinitions([{
            identifier: "Foo",
            value: "foo"
        }] as ElementFlat[]);
        const container = b.getContainer();
        expect(() => {
            container.get('Fooz');
        }).toThrow('Could not find element by identifier Fooz');
    });

    it("should throw an error when duplicate identifier used", () => {
        const b = new Builder();
        expect(() => {
            b.addDefinitions([
                {
                    identifier: "Foo",
                    value: "foo"
                },
                {
                    identifier: "Foo",
                    value: "bar"
                }
            ] as ElementFlat[]);
        }).toThrow('Duplicate identifier Foo used');
    });
});