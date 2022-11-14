import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import RoomRoute from "./routes/RoomRoute.js";
import BookingRoute from "./routes/BookingRoute.js";
import CustomerRoute from "./routes/CustomerRoute.js";

const app = express();
mongoose.connect("mongodb://localhost:27017/crud_mern_stack_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(cors());
app.use(express.json());
app.use(RoomRoute);
app.use(BookingRoute);
app.use(CustomerRoute);

app.listen(5000, () => console.log("Server has started."));
