let service = require('../models/user');
let userHelper = require('../helpers/userHelper');

module.exports = {
    getUsers: async function(req, res) {
        let data = await service.listUsers();
        await res.json(data);
    },
    createUser: async function(req, res) {
        let user = req.body.user;
        let person = req.body.person;
        let data = await userHelper.createUser(user, person);
        await res.json(data);
    },
    loginUser: async function(req, res) {
        let user = req.body.user;

        let data = await userHelper.loginUser(user);

        await res.json(data);
    }
};
