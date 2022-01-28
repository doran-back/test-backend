const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  address: {
    type: String,
  },
});

const roomListSchema = new mongoose.Schema({
  type: [roomSchema]
});

module.exports = mongoose.model("Room", roomListSchema);
