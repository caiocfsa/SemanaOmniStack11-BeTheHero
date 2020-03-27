const connection = require('../database/connection');

const generateUniqueId = require('../utils/generateUniqueId');

const _table = 'ongs';

module.exports = {

    async index(request, response) {
        const ongs = await connection(_table).select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();

        await connection(_table).insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
}