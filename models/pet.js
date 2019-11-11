let mongoose = require('../services/mongoConnection');
let Schema = mongoose.Schema;

/*Model of PET*/
let petSchema = new Schema({
    name: String,
    image: String,
    breed_id: {type:Schema.Types.ObjectId, ref:'breed'}
});
/* Defines model on database as collection*/
let petModel = mongoose.model('pets',petSchema,'pets');

module.exports = {
    listPets: async function() {
        try{
            let data = await petModel.find().exec();
            return await data;
        }catch (e) {
            return e;
        }
    },
    findPetById: async function(id){
        try{
            let data = await petModel.findById(id).exec();
            console.log("by id"+data);
            return await data;
        }catch (e) {
            console.error(e);
            return e;
        }
    },
    createPet: async function(pet){
        try{
            let newPet = petModel(pet);
            let data = await petModel.create(newPet);
            console.log("save data"+data);
            return await data;
        }catch (e) {
            console.error(e);
            return e;
        }
    },
    updatePet: async function(pet) {

    }
};


