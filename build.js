/**
 * Bundle core modules and extensions into single schema file for inclusion into Elixr backend
 *
 * @package: CommonsPub GraphQL
 * @since:   2020-04-03
 */

const path = require('path')
const fs = require('fs')
const globby = require('globby')

const { buildSchema, printSchema } = require('@valueflows/vf-graphql')

;(async() => {
  const extensionSchemas = []

  for await (const filePath of globby.stream(path.resolve(__dirname, `./schemas/**/*.gql`))) {
    const doc = fs.readFileSync(filePath)
    extensionSchemas.push(doc.toString())
  }

  fs.writeFileSync(
    path.resolve(__dirname, `./CP_VF.gql`),
    printSchema(buildSchema([
      'knowledge', 'measurement',
      'agent',
      'observation', 'planning', 'recipe',
      'geolocation',
      'proposal', 'agreement',
      'plan', 'scenario',
      'appreciation', 'claim',
    ], extensionSchemas))
  )
})()
