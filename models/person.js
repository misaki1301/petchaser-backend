let mongoose = require('../services/mongoConnection');
let Schema = mongoose.Schema;

/* Model of Person */
let personSchema = new Schema({
    name: String,
    address: String,
    latitude: String,
    longitude: String,
    documentNumber: Number,
});

let personModel = mongoose.model('person',personSchema, 'person');

module.exports = {
    listPerson: async function() {
        try {
            let data = await personModel.find().exec();
            return await data;
        } catch(e) {
            return e;
        }
    },
    createPerson: async function(person) {
        try{
            let newPerson = personModel(person);
            let data = await personModel.create(newPerson);
            console.log("save data "+data);
            return await data;
        }catch (e) {
            console.error(e);
            return e;
        }
    }
};
