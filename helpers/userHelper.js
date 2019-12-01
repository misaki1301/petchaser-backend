let userModel = require('../models/user');
let personModel = require('../models/person');
let bcrypt = require('bcryptjs');

module.exports = {
    createUser: async function(user, person) {
        try {
            let newPerson = await personModel.createPerson(person);
            user.person = newPerson._id;
            let newUser = await userModel.createUser(user);
            await newUser.populate('person').execPopulate();
            console.log(newUser);
            return { statusCode: 201, data: newUser, message: "Se registro correctamente" };
        }catch (e) {
            return {statusCode: 400, message:e}
        }
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
           return {statusCode:200, data: userFound, message:"Login Exitoso!"};
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
