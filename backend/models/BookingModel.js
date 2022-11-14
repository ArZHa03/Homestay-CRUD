import mongoose from "mongoose";

const Booking = mongoose.Schema({
  id_room: {
    type: String,
    required: true,
  },
  id_customer: {
    type: String,
    required: true,
  },
  check_in: {
    type: String,
    required: true,
  },
  check_out: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
  },
});

export default mongoose.model("Bookings", Booking);
