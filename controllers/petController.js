let petModel = require('../models/pet');

module.exports = {
  getPets : async function(req, res) {
      let data = await petModel.listPets();
      console.log(data);
      await res.json(data);
  },
    createPet: async function(req, res) {
      let pet = req.body;
      let data = await petModel.createPet(pet);
      console.log(data);
      await res.json(data);
    },
  findPetByUserID: async function(req, res) {
    let data = await petModel.findPetByUser(req.body.user)
    console.log(data)
    await res.json({message:"Perros del usuario",data:data,statusCode:201})
  }
};
