# CommonsPub GraphQL schema

Implementation-specific extensions to the ValueFlows [core grammar in GraphQL](https://github.com/valueflows/vf-graphql/).

## Usage

This module can be installed as an NPM module straight from Github using the URI `git+https://git@github.com/commonspub/commonspub-valueflows-graphql.git#COMMIT_HASH` in `package.json` (replacing `COMMIT_HASH` with the branch, tag or commit ID to reference).

If done using this method, the schema will be generated automatically at installation time.

## Developing

Simply declare new schema types, fields and edges in `*.gql` files in the `schema/extensions` directory. Use as many files as needed for clean organisation.

To add fields to existing VF records, simply redefine the record type and add only the appropriate subfields. These will be recursively merged into the resultant schema when running `npm run build`.

The complete schema is saved into `schema/commonspub_valueflows.gql`. This file can then be imported directly into the Elixir backend or used in frontend application code.

## License

AGPL-3.0

