import Booking from "../models/BookingModel.js";

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.json(booking);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveBooking = async (req, res) => {
  const booking = new Booking(req.body);
  try {
    const insertedbooking = await booking.save();
    res.status(201).json(insertedbooking);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateBooking = async (req, res) => {
  try {
    const updatebooking = await Booking.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatebooking);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const deletebooking = await Booking.deleteOne({ _id: req.params.id });
    res.status(200).json(deletebooking);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
