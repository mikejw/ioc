import { ElementFlat} from '../types';
import { Factory } from '../factory';

describe("simple definitions with factory", () => {
    it("should return simple expected output", () => {

        const items = [
            {
                identifier: "Foo",
                value: "foo"
            },
            {
                identifier: "Bar",
                value: "bar"
            },
            {
                identifier: "Baz",
                value: "Baz"
            },
            {
                identifier: "Fizz",
                value: "fizz"
            }
        ];
        let container = Factory.getContainer(items as ElementFlat[])
        expect(container.dump()).toBe(JSON.stringify(items, null, 2));

        const newItems = [
            {
                identifier: 'Buzz',
                value: 'buzz'
            }
        ];

        container = Factory.getContainer(newItems as ElementFlat[]);
        expect(container.dump()).toBe(JSON.stringify(items.concat(newItems), null, 2));
    });
});
