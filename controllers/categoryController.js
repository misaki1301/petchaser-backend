let categoryModel = require('../models/category');

module.exports = {
  getCategories: async function(req, res) {
    let data = await categoryModel.listCategories();
    console.log(data);
    await res.json({
      message:"se obtuvo la lista de categorias",
      data: data,
      statusCode: 200
    });
  },
  createCategory: async function(req, res) {
    let category = req.body;
    let data = await categoryModel.createCategory(category);
    console.log(data);
    await res.json({
      message:"Se registro correctamente",
      data: data,
      statusCode: 200
    });
  }
};
