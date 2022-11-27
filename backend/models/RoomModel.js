import mongoose from "mongoose";

const Room = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bed: {
    type: String,
    required: true,
  },
  facility: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
});

export default mongoose.model("Rooms", Room);
