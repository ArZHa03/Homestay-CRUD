import Room from "../models/RoomModel.js";

export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.json(room);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveRoom = async (req, res) => {
  const room = new Room(req.body);
  try {
    const insertedroom = await room.save();
    res.status(201).json(insertedroom);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateRoom = async (req, res) => {
  try {
    const updateroom = await Room.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateroom);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    const deleteroom = await Room.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteroom);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
