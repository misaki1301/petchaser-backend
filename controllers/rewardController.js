let rewardModel = require('../models/reward');

module.exports = {
  getRewards: async function(req, res) {
    let data = await rewardModel.listReward();
    console.log(data);
    await res.json({
      message: "Se obtuvo la lista de recompensas",
      data: data,
      statusCode: 200
    });
  },
  createReward: async function(req, res) {
    let reward = req.body;
    let data = await rewardModel.createReward(reward);
    console.log(data);
    await res.json({
      message: "Se registro correctamente",
      data: data,
      statusCode:200
    });
  }
};
