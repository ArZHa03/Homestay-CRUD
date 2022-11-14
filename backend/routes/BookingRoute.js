import express from "express";
import {
  getBookings,
  getBookingById,
  saveBooking,
  updateBooking,
  deleteBooking,
} from "../controllers/BookingController.js";
const router = express.Router();

router.get("/bookings", getBookings);
router.get("/bookings/:id", getBookingById);
router.post("/bookings", saveBooking);
router.patch("/bookings/:id", updateBooking);
router.delete("/bookings/:id", deleteBooking);

export default router;
