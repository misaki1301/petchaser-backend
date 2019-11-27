let mongoose = require('../services/mongoConnection');
let Schema = mongoose.Schema;

/* Model of Category */
let categorySchema = new Schema({
   name: String,
  description: String
});

let categoryModel = mongoose.model('categories',categorySchema, 'categories');

module.exports = {
  listCategories: async function() {
    try {
      let data = await categoryModel.find().exec();
      return await data;
    } catch (e) {
      return e;
    }
  },
  findCategory: async function(id) {
    try {
      let data = await  categoryModel.findById(id).exec();
      console.log("category"+data);
      return await data;
    } catch (e) {
      console.error(e);
      return e;
    }
  },
  createCategory: async function(category) {
    try {
      let newCategory = categoryModel(category);
      let data = await categoryModel.create(newCategory);
      console.log("save data"+data);
      return await data;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
};
