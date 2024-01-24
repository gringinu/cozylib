/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rdmfrdj8iithjzw")

  collection.viewRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rdmfrdj8iithjzw")

  collection.viewRule = "@request.auth.collectionName = \"users\""
  collection.updateRule = "@request.auth.collectionName = \"users\""
  collection.deleteRule = "@request.auth.collectionName = \"users\""

  return dao.saveCollection(collection)
})
