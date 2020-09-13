const express = require('express')
const router = express.Router()
const PositionsController = require('../controllers/positions.controller')


router.get('/', PositionsController.getAll)
router.get('/:id', PositionsController.getOne)

module.exports = router