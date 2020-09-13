const Position = require('../database/schemas/position')
const mongoose = require('mongoose');

class PositionsService {
    async findOne(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) return null
        return Position.findById(id);
    }
    async findAll() {
        return Position.find();
    }
    async create() {
        
    }
}

module.exports = new PositionsService()