const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
  },
  account_email: {
    type: String,
  },
  profile_image: {
    type: String,
  },
  birthyear: {
    type: Number,
  },
  gender: {
    type: String
  },
  current_address: {
    type: String
  }
});

module.exports = mongoose.model("User", userSchema);
