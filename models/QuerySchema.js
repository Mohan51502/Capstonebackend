const mongoose = require("mongoose");
const QuerySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  voice: {
    type: String,
    required: true,
  },
 
 
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  userid:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"users"
  }


});

const querydb = new mongoose.model("Query", QuerySchema);

module.exports = querydb;