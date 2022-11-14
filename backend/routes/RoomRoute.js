import express from "express";
import {
  getRooms,
  getRoomById,
  saveRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/RoomController.js";
const router = express.Router();

router.get("/rooms", getRooms);
router.get("/rooms/:id", getRoomById);
router.post("/rooms", saveRoom);
router.patch("/rooms/:id", updateRoom);
router.delete("/rooms/:id", deleteRoom);

export default router;
