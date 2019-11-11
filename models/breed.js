let mongoose = require('../services/mongoConnection');
let Schema = mongoose.Schema;

/*Model of Breed*/
let breedSchema = new Schema({
    name: String,
    image: String,
});

let breedModel = mongoose.model('breeds',breedSchema,'breeds');

module.exports = {
    breedModel
};
