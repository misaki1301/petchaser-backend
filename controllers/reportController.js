let reportModel = require("../models/report");

module.exports = {
  getReports: async function(req, res) {
    let data = await reportModel.listReports();
    console.log(data);
    await res.json({
      message:"Se obtuvo la lista de reportes",
      data: data,
      statusCode: 200
    });
  },
  createReport: async function(req, res) {
    let report = req.body;
    let data = await reportModel.createReport(report);
    console.log(data);
    await res.json(
      {
        message:"Se registro correctamente",
        data:data,
        statusCode:200
      });
  }
};
