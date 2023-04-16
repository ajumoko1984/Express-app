const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;

// const mongoose = require('mongoose');
// const userSchema = new mongoose.Schema({
//    name:{
//        type:String,
//        require:true
//     },
//     price:{
//         type:Number,
//         require:true
//     }
// },{timestamps:true});
// const User = mongoose.model("User", userSchema);

// const User = mongoose.model("User");

///////

// app.post("/register", function(req, res){
// const newUser = new User({
// name: 'phone',
// price: 1000
// });
// newUser.save(function(err){
// if (err) {
// console.log(err);
// } else {
// res.render("secrets");
// }
// });
// });
