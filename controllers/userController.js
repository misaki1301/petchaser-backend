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

        await res.status(data.statusCode).json(data);
    },
    checkEmailUser: async function (req, res) {
        try {
            console.log(req.body)
            let user = req.body;
            let userFound = await service.findUserByUserName(user.username);
            if (!userFound) {
                throw Error("el usuario no existe o esta mal ingresado");
            }
            console.log(userFound);
            await res.json({ statusCode: 201, data: userFound, message: "User Exists!" });
        }catch (e) {
            console.error(e);
            await res.json({statusCode:400, message:e});
        }
    }
};
