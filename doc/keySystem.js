const mongoose = require("mongoose");
var Schema = mongoose.Schema

var keySchema = new Schema({
    key:String,
    userName:String,
    password:String
})

var Key = mongoose.model("Key" , keySchema)