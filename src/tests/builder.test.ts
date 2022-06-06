import { Builder } from '../builder';
import { ElementFlat} from '../types';
import { DBConnection } from './db-connection';
import { Container } from '../container';

describe("test add simple definitions", () => {
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
        const b = new Builder();
        b.addDefinitions(items as ElementFlat[]);
        const container = b.getContainer();
        expect(container.dump()).toBe(JSON.stringify(items, null, 2));
    });

    it("should return expected output with lazy loading", () => {
        const items = [
            {
                identifier: "magicNumber",
                value: (c: Container) => {
                    return c.getElementCount()
                }
            }
        ];

        const b = new Builder();
        b.addDefinitions(items as ElementFlat[]);
        const container = b.getContainer();
        expect(container.get('magicNumber')).toBe(1);
    });

    it("should return expected output with lazy loading with complex object", () => {
        const items = [
            {
                identifier: 'db_host',
                value: '127.0.0.1'
            },
            {
                identifier: 'db_user',
                value: 'root'
            },
            {
                identifier: 'db_pass',
                value: 'example'
            },
            {
                identifier: 'DBConnection',
                value: (c: Container) => {
                    return new DBConnection(c.get('db_host'), c.get('db_user'), c.get('db_pass'))
                }
            }
        ];

        const expectedOutput = {
            host: "127.0.0.1",
            user: "root",
            password: "example"
        };

        const b = new Builder();
        b.addDefinitions(items as ElementFlat[]);
        const container = b.getContainer();
        expect(container.dump('DBConnection')).toBe(JSON.stringify(expectedOutput, null, 2));

        const conn = container.get('DBConnection');
        expect(conn.constructor.name).toBe('DBConnection');
    });
});