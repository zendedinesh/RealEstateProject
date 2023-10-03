const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name:String,
    address:String,
    ownerName:String,
    price:String,
    size:String,
    description:String,
})



module.exports=mongoose.model ("property",propertySchema);