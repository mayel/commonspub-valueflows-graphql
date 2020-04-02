# CommonsPub GraphQL schema

Implementation-specific extensions to the ValueFlows [core grammar](https://github.com/valueflows/vf-graphql/).

## Usage

This module can be installed as an NPM module straight from Github using the URI `git+https://git@github.com/commonspub/commonspub-valueflows-graphql.git` in `package.json`. If done using this method, the master schema will be generated automatically at installation time.

## Developing

Simply declare new schema types, fields and edges in `*.gql` files in the `schemas` directory. Use as many files as needed for clean organisation.

To add fields to existing VF records, simply redefine the record type and add only the appropriate subfields. These will be recursively merged into the resultant schema when running `npm run build`.

The complete schema is saved into `CP_VF.gql`. This file can then be imported directly into the Elixr backend or used in frontend application code.

## License

AGPL-3.0

