import fs from "fs"
import path from "path"

const BACKEND_ARCH_PATH = "docs/reference/backend-architecture.md"
const OUTPUT_DIR = "database"
const MIGRATION_DIR = "database/migrations"

function loadArchitecture() {

  if (!fs.existsSync(BACKEND_ARCH_PATH)) {
    throw new Error("Missing backend architecture document")
  }

  return fs.readFileSync(BACKEND_ARCH_PATH, "utf8")
}

function extractEntities(architectureText) {

  const entities = []

  const lines = architectureText.split("\n")

  for (const line of lines) {

    if (line.startsWith("Entity:")) {

      const name = line.replace("Entity:", "").trim()

      entities.push({
        name,
        fields: [
          { name: "id", type: "SERIAL PRIMARY KEY" },
          { name: "created_at", type: "TIMESTAMP" }
        ]
      })

    }

  }

  return entities
}

function generateSQL(entities) {

  let sql = ""

  for (const entity of entities) {

    sql += `CREATE TABLE ${entity.name} (\n`

    const fields = entity.fields.map(
      f => `  ${f.name} ${f.type}`
    )

    sql += fields.join(",\n")

    sql += "\n);\n\n"

  }

  return sql
}

function ensureDirectories() {

  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  fs.mkdirSync(MIGRATION_DIR, { recursive: true })
}

function writeSchema(sql) {

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "schema.sql"),
    sql
  )
}

function writeMigration(sql) {

  const filePath = path.join(
    MIGRATION_DIR,
    "001_initial_schema.sql"
  )

  fs.writeFileSync(filePath, sql)
}

function writeBuildLog(entityCount) {

  const log = `
Database Build Completed

Tables Generated: ${entityCount}
Time: ${new Date().toISOString()}
`

  fs.writeFileSync(
    "docs/reference/database-build-log.md",
    log
  )
}

export default async function buildDatabase() {

  console.log("Starting database build")

  const architecture = loadArchitecture()

  const entities = extractEntities(architecture)

  if (entities.length === 0) {
    throw new Error("No entities found in backend architecture")
  }

  const sql = generateSQL(entities)

  ensureDirectories()

  writeSchema(sql)

  writeMigration(sql)

  writeBuildLog(entities.length)

  console.log(`Database build complete (${entities.length} tables)`)

}
