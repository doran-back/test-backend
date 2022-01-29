const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
  name: String,
  rooms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  }],
});

module.exports = mongoose.model("Community", communitySchema);
