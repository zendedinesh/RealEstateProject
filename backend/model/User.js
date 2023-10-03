const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    gender:String
   
})
const usermodel = mongoose.model("User", userSchema);

module.exports=usermodel