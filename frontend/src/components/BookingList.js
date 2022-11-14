import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookingList = () => {
  const [bookings, setBooking] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getBooking();
    getRooms();
    getCustomers();
  }, []);

  const getBooking = async () => {
    const response = await axios.get("http://localhost:5000/bookings");
    setBooking(response.data);
  };

  const deleteBooking = async (id, id_room) => {
    try {
      await axios.delete(`http://localhost:5000/bookings/${id}`);
      getBooking();
      await axios.patch(`http://localhost:5000/rooms/${id_room}`, {
        status: "available",
      });
    } catch (error) {
      console.log(error);
    }
  };

  /* Get id_room from API */
  const getRooms = async () => {
    const response = await axios.get("http://localhost:5000/rooms");
    setRooms(response.data);
  };

  /* Get id_customer from API */
  const getCustomers = async () => {
    const response = await axios.get("http://localhost:5000/customers");
    setCustomers(response.data);
  };

  return (
    // Image and text
    <div className="container">
      <div className="columns">
        <div className="column is-3">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/000/661/970/non_2x/booking-a-schedule-isometric-vector-illustration.jpg"
                  alt="Illustration"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img
                      src="https://i.pximg.net/img-original/img/2022/11/09/22/26/48/102652457_p0.png"
                      alt="Logo"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">Home Stay</p>
                  <p className="subtitle is-6">@homestay</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@ar.z.ha</a>.
                <a href="#">#safety</a> <a href="#">#cheap</a>
                <br />
                <time dateTime="2022-1-9">11:09 PM - 9 Nov 2022</time>
              </div>
            </div>
          </div>
        </div>
        {/* List View */}
        <div className="column is-9">
          <div className="card">
            <div className="card-content">
              <div className="content">
                <div className="columns">
                  <div className="column is-3">
                    <h1 className="title">Bookings</h1>
                  </div>
                  <div className="column is-7">
                    <div className="tabs is-centered">
                      <ul className="mt-0">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/customers">Customers</Link>
                        </li>
                        <li className="is-active">
                          <Link to="/bookings">Bookings</Link>
                        </li>
                        <li>
                          <Link to="/rooms">Rooms</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="column is-2">
                    <Link
                      to="add"
                      className="button is-success is-pulled-right"
                    >
                      <figure className="image is-24x24">
                        <img src="https://cdn-icons-png.flaticon.com/512/3147/3147124.png" />
                      </figure>
                    </Link>
                  </div>
                </div>
                <table className="table is-striped is-fullwidth mt-5">
                  <thead>
                    <tr>
                      <th>Number</th>
                      <th>Room</th>
                      <th>Customer</th>
                      <th>Check In</th>
                      <th>Check Out</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking, index) => (
                      <tr key={booking.id}>
                        <td>{index + 1}</td>
                        <td>
                          {rooms.map((room) => {
                            if (room._id === booking.id_room) {
                              return room.name;
                            }
                          })}
                        </td>
                        <td>
                          {customers.map((customer) => {
                            if (customer._id === booking.id_customer) {
                              return customer.name;
                            }
                          })}
                        </td>
                        <td>{booking.check_in}</td>
                        <td>{booking.check_out}</td>
                        <td>{booking.total}</td>
                        <td>
                          <Link
                            to={`edit/${booking._id}`}
                            className="button is-info is-small"
                          >
                            <figure className="image is-16x16">
                              <img src="https://cdn-icons-png.flaticon.com/512/2738/2738205.png" />
                            </figure>
                          </Link>

                          <button
                            className="button is-danger is-small ml-2"
                            onClick={() =>
                              deleteBooking(booking._id, booking.id_room)
                            }
                          >
                            <figure className="image is-16x16">
                              <img src="https://cdn-icons-png.flaticon.com/512/2536/2536018.png" />
                            </figure>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
