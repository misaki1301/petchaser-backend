let userModel = require('../models/user');
let personModel = require('../models/person');
let bcrypt = require('bcryptjs');

module.exports = {
    createUser: async function(user, person) {
        let newPerson = await personModel.createPerson(person);
        user.personId = newPerson._id;
        let newUser = await userModel.createUser(user);
        console.log(newUser);
        return {user: newUser, person: newPerson};
    },

    loginUser: async function(user) {
        try{
            let userFound = await userModel.findUserByUserName(user.username);
            if(!user){
                throw Error("el usuario no existe o esta mal ingresado");
            }
            console.log(userFound);
            if (!bcrypt.compareSync(user.password,userFound.password)){
                throw Error("el usuario no existe o ingreso los datos incorrectamente");
            }
           return {statusCode:200, user: userFound, message:"Login Exitoso!"};
        }catch (e) {
            console.error(e);
            return {statusCode:400, message:e};
        }
    },

    updateUser: async function(req, res){
        let userId = req.body.userId;
        if (userId){
            let userFound = await userModel.findUserById(userId);
            return res.json({
                user: userFound,
                statusCode: 200
            })
        }
        return res.json({
            message: "No se realizo una buena petición",
            statusCode: 400
        });

    }
}