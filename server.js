const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
// Body-parser is the Node.js body parsing middleware.
// It is responsible for parsing the incoming request bodies in a middleware before you handle it.
const bodyParser = require("body-parser");
global.D_STUDENT = require("./api/models/Model");
const routes = require("./api/routes/Routes");
// mongoose.Promise = global.Promise;
// mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb+srv://Ohmmy3847:Ohm7433847@backend-of-hamsterhub.9zrmvnw.mongodb.net/Scratch", { useNewUrlParser: true });
const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
// tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false)
// or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
app.use(bodyParser.urlencoded({ extended: true }));
// tells the system that you want json to be used.
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`http://localhost:3001/ ${port}`);

//mongodb+srv://Ohmmy3847:Ohm7433847@backend-of-hamsterhub.9zrmvnw.mongodb.net/?retryWrites=true&w=majority/Backend_Hamsterhub
//mongodb://localhost/vuecrudapp
