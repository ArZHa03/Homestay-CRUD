import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBooking = () => {
  const [id_room, setIdRoom] = useState("");
  const [id_customer, setIdCustomer] = useState("");
  const [check_in, setCheckIn] = useState("");
  const [check_out, setCheckOut] = useState("");
  const [total, setTotal] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

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
    getBookingsById();
    getRooms();
    getCustomers();
  }, []);

  const getBookingsById = async () => {
    const response = await axios.get(`http://localhost:5000/bookings/${id}`);
    setIdRoom(response.data.id_room);
    setIdCustomer(response.data.id_customer);
    setCheckIn(response.data.check_in);
    setCheckOut(response.data.check_out);
    setTotal(response.data.total);
  };

  const updateBooking = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/bookings/${id}`, {
        id_room,
        id_customer,
        check_in,
        check_out,
      });

      const rooms = await axios.get(`http://localhost:5000/rooms/${id_room}`);
      const price = rooms.data.price;
      const date1 = new Date(check_in);
      const date2 = new Date(check_out);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const total = price * diffDays;
      await axios.patch(`http://localhost:5000/bookings/${id}`, {
        total,
      });

      navigate("/bookings");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={updateBooking}>
          <div className="field">
            <label className="label">ID Room</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={id_room}
                  onChange={(e) => setIdRoom(e.target.value)}
                >
                  <option value="">Select Room</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">ID Customer</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={id_customer}
                  onChange={(e) => setIdCustomer(e.target.value)}
                >
                  <option value="">Select Customer</option>
                  {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
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
                value={check_in}
                onChange={(e) => setCheckIn(e.target.value)}
                type="date"
                placeholder="Check In"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Check Out</label>
            <div className="control">
              <input
                className="input"
                value={check_out}
                onChange={(e) => setCheckOut(e.target.value)}
                type="date"
                placeholder="Check Out"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBooking;
