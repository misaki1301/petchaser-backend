let mongoose = require('../services/mongoConnection');
let Schema = mongoose.Schema;

/* Model of Reward */
let rewardSchema = new Schema({
  name: String,
  image: String,
  price: String,
  category: { type:Schema.Types.ObjectId, ref:'categories'}
});

let rewardModel = mongoose.model('rewards',rewardSchema, 'rewards');

module.exports = {
  listReward: async function() {
    try {
      let data = await rewardModel.find().populate('category').exec();
      return await data;
    } catch (e) {
      return e;
    }
  },
  findReward: async function(id) {
    try {
      let data = await rewardModel.findById(id).exec();
      console.log("reward"+data);
      return await data;
    } catch(e) {
      console.error(e);
      return e;
    }
  },
  createReward: async function(reward) {
    try {
      let newReward = rewardModel(reward);
      let data = await rewardModel.create(newReward);
      console.log("save data"+data);
      return await data;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
};
