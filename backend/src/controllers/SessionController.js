const connection = require('../database/connection');

const _table = 'ongs';

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection(_table)
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return response.status(400).json({ error: 'no ONG found with this ID' })
        }

        return response.json(ong);
    }
}