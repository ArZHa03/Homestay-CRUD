import BackupBooking from "../models/BackupBookingModel.js";

export const getBackupBookings = async (req, res) => {
  try {
    const backupBookings = await BackupBooking.find();
    res.status(200).json(backupBookings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveBackupBooking = async (req, res) => {
  const backupBooking = req.body;
  const newBackupBooking = new BackupBooking(backupBooking);
  try {
    await newBackupBooking.save();
    res.status(201).json(newBackupBooking);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
