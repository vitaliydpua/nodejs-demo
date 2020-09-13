const mongoose = require('mongoose');
const Person = require('../database/schemas/person')
const PositionsService = require('../services/positions.service')

class PeopleService {
    async findAll() {
        return Person.find().populate('position')
    }
    async findOne(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) return null
        return Person.findById(mongoose.Types.ObjectId(id)).populate('position');
    }
    async create(person, positionId) {
        const pos = await PositionsService.findOne(positionId)
        person.position = pos
        const createdPerson = new Person(person);
        return createdPerson.save()
    }
}

module.exports = new PeopleService()