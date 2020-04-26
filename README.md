# CommonsPub GraphQL schema

Implementation-specific extensions to the ValueFlows [core grammar in GraphQL](https://github.com/valueflows/vf-graphql/).

## Usage

This module can be installed as an NPM module straight from Github using the URI `git+https://git@github.com/commonspub/commonspub-valueflows-graphql.git#COMMIT_HASH` in `package.json` (replacing `COMMIT_HASH` with the branch, tag or commit ID to reference).

If done using this method, the schema will be generated automatically at installation time.

## Extending the schema

Simply declare new schema types, fields and edges in `*.gql` files in the `schema/extensions` directory. Use as many files as needed for clean organisation.

To add fields to existing VF records, simply redefine the record type and add only the appropriate subfields. 

## Building the merged schema
These will be recursively merged into the resultant schema when running `yarn build`. 

Note: If you are including any externally-defined types in your schema extensions, the build will fail, but you can workaround that by replacing the line `throw new Error("Type \"".concat(typeName, "\" not found in document."));` with `var type = typeMap['ExternalType'];` in `node_modules/graphql/utilities/buildASTSchema.js` and then manually fix any type that appears as `ExternalType` in the merged schema.

The complete schema is saved into `schema/commonspub_valueflows.gql`. This file can then be imported directly into the Elixir backend or used in frontend application code.

## License

AGPL-3.0

