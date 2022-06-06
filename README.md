
#IOC Library

###Example Usage

    import { Builder } from 'ioc/dist/builder.js';
    import { ElementFlat} from 'ioc/dist/types.js';
    import { Container } from 'ioc/dist/container.js';
    import { DBConnection } from './db-connection.js'; // your class dependency
    import { Entity } from './entity.js'; // your class service

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
            value: (c) => { 
                return new DBConnection(c.get('db_host'), c.get('db_user'), c.get('db_pass'))
            }
        },
        {
            identifier: 'Entity',
            value: (c) => {
                return new Entity(c.get('DBConnection'))
            }
        }
    ];

    const builder = new Builder();
    builder.addDefinitions(items);
    const container = builder.getContainer();
    const entity = container.get('Entity');



