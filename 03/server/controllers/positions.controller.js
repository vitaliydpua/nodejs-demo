const positionsService = require('../services/positions.service')

class PositionsController {
    async getOne(req, resp) {
        const id = req.params.id;
        const position = await positionsService.findOne(id);
        resp.send(position);
    }
    async getAll(req, resp) {
        const positions = await positionsService.findAll();
        resp.send(positions);
    }
}

module.exports = new PositionsController();