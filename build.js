/**
 * Bundle core modules and extensions into single schema file for inclusion into Elixr backend
 *
 * @package: CommonsPub GraphQL
 * @since:   2020-04-03
 */

const path = require('path')
const fs = require('fs')
const globby = require('globby')
const schemas_path = `./schema/extensions/*.gql`
const schema_final_path = `./schema/commonspub_valueflows.gql`

const { buildSchema, printSchema } = require('@valueflows/vf-graphql')

  ; (async () => {
    const extensionSchemas = []

    for await (const filePath of globby.stream(path.resolve(__dirname, schemas_path))) {
      const doc = fs.readFileSync(filePath)
      extensionSchemas.push(doc.toString())
    }

    console.log(extensionSchemas)

    var schema_merged = buildSchema([
      'knowledge', 'measurement',
      'agent',
      'observation', 'planning', 'recipe',
      'geolocation',
      'proposal', 'agreement',
      'plan', 'scenario',
      'appreciation', 'claim',
    ], extensionSchemas)

    console.log(schema_merged)

    fs.writeFileSync(
      path.resolve(__dirname, schema_final_path),
      printSchema(schema_merged)
    )
  })()
