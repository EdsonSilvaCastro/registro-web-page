var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sharkathon.one:27015/live', {
    auth: {
        username:'mongo',
        password:'Jafra2018!'
    },
    authSource:"admin",
    useUnifiedTopology: true,
    useNewUrlParser: true
})

var datos = new mongoose.Schema({
  salon: String,
  accesspoint: String,
  co2level: String,
});

var Data = mongoose.model("Data", datos);

app.listen(port, () => {
  console.log("PORT connected: " + port);
});

app.post("/addRegister", (req, res) => {
  console.log(req.body);
  var myData = new Data(req.body);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});
