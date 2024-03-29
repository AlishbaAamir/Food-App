const app = require('express')
const router = app.Router()
const {itemByRestuarent, itemBycategory, getAllItems, itemById, createItem, updateItem, deleteItem} = require('./Controller')

router.get('/itemByRestuarent', itemByRestuarent)
router.get('/itemByCategory', itemBycategory )
router.get('/getAllItems', getAllItems)
router.get('/itemById', itemById)
router.post('/createItem', createItem )
router.put('/updateItem', updateItem)
router.delete('/deleteItem', deleteItem )

  module.exports = router