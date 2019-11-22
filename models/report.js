let mongoose = require("../services/mongoConnection");
let Schema = mongoose.Schema;

/* Model of Report */
let reportSchema = new Schema({
  description: String,
  location: String,
  latitude: Number,
  longitude: Number,
  lastSeen: {type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref:'users' },
  pet: { type:Schema.Types.ObjectId, ref:'pets' }
});

/* Defines model on database as collection */
let reportModel = mongoose
  .model('reports', reportSchema, 'reports');

module.exports = {
  listReports: async function () {
    try {
      let data = await reportModel.find().populate('user').populate('pet').exec();
      return await data;
    } catch (e) {
      return e;
    }
  },
  findReportById: async function(id) {
    try {
      let data =  await reportModel.findById(id).exec();
      console.log("by id"+data);
      return await data;
    } catch (e) {
      console.error(e);
      return e;
    }
  },
  createReport: async function(report) {
    try {
      let newReport = reportModel(report);
      let data = await reportModel.create(newReport);
      console.log("save data report"+data);
      return await data;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
};
