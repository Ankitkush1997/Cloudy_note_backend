const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://Ankit:ankit@cluster0.fhml1.mongodb.net/cloudynote?authSource=admin&replicaSet=atlas-afj89u-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";

const connectToMongo = () => {
  mongoose.connect(mongoURI, {
  }).then("connection sucessfully created to mongo atlas").catch((err)=>console.log(err))
};

module.exports = connectToMongo;
