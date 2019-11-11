let service = require('../models/person');

module.exports = {
    getPersons: async function(req, res) {
        let data = await service.listPerson();
        await res.json(data);
    },
    createPerson: async function(req, res) {
        let person = req.body;
        let data = await service.createPerson(person);
        await res.json(data);
    }
};
