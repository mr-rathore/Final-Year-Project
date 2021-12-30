const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Invalid email Id")
      }
    }
  },
  number:{
    type:Number,
    required:true
  },
  pizza:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  }
})
// connections

// const User = mongoose.model("User", userSchema);
// module.exports= User;
module.exports = mongoose.model("User", userSchema);
 
