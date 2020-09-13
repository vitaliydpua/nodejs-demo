const peopleService = require('../services/people.service')
const Person = require('../models/person')
const Position = require('../models/position')

class PeopleController {
    async getOne(req, resp) {
        const id = req.params.id;
        const person = await peopleService.findOne(id);
        resp.send(person);
    }
    async getAll(req, resp) {
        const people = await peopleService.findAll();
        resp.send(people);
    }

    async create(req, resp) {
        const person = await peopleService.create(req.body.person, req.body.positionId);
        resp.send(person);
    }
}

module.exports = new PeopleController();