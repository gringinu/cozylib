/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bf6ilunhc538qjn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "in4j2vte",
    "name": "first_RES_subject",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bf6ilunhc538qjn")

  // remove
  collection.schema.removeField("in4j2vte")

  return dao.saveCollection(collection)
})