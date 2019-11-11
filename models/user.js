let mongoose = require('../services/mongoConnection');
let bcrypt = require('bcryptjs');
let Schema = mongoose.Schema;

/*Model of User*/
let userSchema = new Schema({
    username: { type:String, index:true, unique: true},
    image: String,
    password: String,
    personId:{type: Schema.Types.ObjectId, ref:'person' }
});

let userModel = mongoose.model('users', userSchema, 'users');

module.exports = {
    listUsers: async function() {
        try {
            let data = await userModel.find().exec();
            return await data;
        }catch (e) {
            return e;
        }
    },
    findUserByUserName: async function(username){
        try{
            let data = await userModel.findOne({username:username}).exec();
            return await data;
        }catch (e) {
            return e;
        }
    },
    findUserById: async function(id) {
        try{
            let data = await userModel.findById(id).exec();
            console.log("by id "+data);
            return await data;
        }catch (e) {
            console.error(e);
            return e;
        }
    },
    createUser: async function(user) {
        try{
            user.password = bcrypt.hashSync(user.password, 10);
            let newUser = userModel(user);
            let data = await userModel.create(newUser);
            console.log("save data "+data);
            return await data;
        }catch (e) {
            console.error(e);
            return e;
        }
    }
};
