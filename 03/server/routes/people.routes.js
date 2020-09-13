const express = require('express')
const router = express.Router()
const PeopleController = require('../controllers/people.controller')


router.get('/', PeopleController.getAll)
router.get('/:id', PeopleController.getOne)
router.post('/', PeopleController.create)

module.exports = router