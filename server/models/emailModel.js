import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
  },
  body: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  image: {
    type: String,
  },
  name: { required: true, type: String },
  starred: {
    type: Boolean,
    required: false,
    default: false,
  },
  bin: {
    type: Boolean,
    required: false,
    default: false,
  },
  type: {
    type: String,
    required: true,
  },
});

const email = mongoose.model("Emails", emailSchema);

export default email;
