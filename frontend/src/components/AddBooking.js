import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBooking = () => {
  const [id_room, setIdRoom] = useState("");
  const [id_customer, setIdCustomer] = useState("");
  const [check_in, setCheckIn] = useState("");
  const [check_out, setCheckOut] = useState("");
  const navigate = useNavigate();

  /* Get id_room from API */
  const [rooms, setRooms] = useState([]);
  const getRooms = async () => {
    const response = await axios.get("http://localhost:5000/rooms");
    setRooms(response.data);
  };

  /* Get id_customer from API */
  const [customers, setCustomers] = useState([]);
  const getCustomers = async () => {
    const response = await axios.get("http://localhost:5000/customers");
    setCustomers(response.data);
  };

  useEffect(() => {
    getRooms();
    getCustomers();
  }, []);

  const saveBooking = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/bookings", {
        id_room,
        id_customer,
        check_in,
        check_out,
      });

      await axios.patch(`http://localhost:5000/rooms/${id_room}`, {
        status: "unavailable",
      });

      // Membuat variabel untuk menyimpan data dari field _id pada API bookings dengan kondisi id_room sama dengan id_room yang diinputkan
      const id_booking = await axios.get(`http://localhost:5000/bookings`);

      const rooms = await axios.get(`http://localhost:5000/rooms/${id_room}`);
      const price = rooms.data.price;
      const date1 = new Date(check_in);
      const date2 = new Date(check_out);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const total = price * diffDays;
      await axios.patch(
        `http://localhost:5000/bookings/${
          id_booking.data[id_booking.data.length - 1]._id
        }`,
        {
          total,
        }
      );

      navigate("/bookings");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={saveBooking}>
          <div className="field">
            <label className="label">Room</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={id_room}
                  onChange={(e) => setIdRoom(e.target.value)}
                >
                  <option>Select Room</option>
                  {rooms &&
                    rooms.map((room) => {
                      if (room.status === "available") {
                        return (
                          <option key={room._id} value={room._id}>
                            {room.name}
                          </option>
                        );
                      }
                    })}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Customer</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={id_customer}
                  onChange={(e) => setIdCustomer(e.target.value)}
                >
                  <option>Select Customer</option>
                  {customers.map((customer) => (
                    <option key={customer._id} value={customer._id}>
                      {customer.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Check In</label>
            <div className="control">
              <input
                className="input"
                type="date"
                value={check_in}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Check Out</label>
            <div className="control">
              <input
                className="input"
                type="date"
                value={check_out}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooking;
