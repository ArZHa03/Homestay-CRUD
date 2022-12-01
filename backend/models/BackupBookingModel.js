import mongoose from "mongoose";

const backupBooking = new mongoose.Schema({
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
    required: true,
  },
});

export default mongoose.model("BackupBooking", backupBooking);
