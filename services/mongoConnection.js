let mongoose = require('mongoose');
let mongoatlas = "mongodb://misaki-dev:kotoha1313@petchaser-cluster-shard-00-00-tyz17.mongodb.net:27017,petchaser-cluster-shard-00-01-tyz17.mongodb.net:27017,petchaser-cluster-shard-00-02-tyz17.mongodb.net:27017/petchaser?ssl=true&replicaSet=PetChaser-Cluster-shard-0&authSource=admin&retryWrites=true&w=majority";
let local = "mongodb://localhost/petchaser";
mongoose.connect(local, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("Connected to DB");
});

module.exports = mongoose;
