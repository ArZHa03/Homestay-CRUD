import express from "express";
import {
  getBackupBookings,
  saveBackupBooking,
} from "../controllers/BackupBookingController.js";
const router = express.Router();

router.get("/backup_bookings", getBackupBookings);
router.post("/backup_bookings", saveBackupBooking);

export default router;
