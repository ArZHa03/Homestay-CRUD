import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeStay = () => {
  const [customers, setCustomers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [backup_bookings, setBackupBookings] = useState([]);
  const [rooms, setRooms] = useState([]);

  const getCustomers = async () => {
    const response = await axios.get("http://localhost:5000/customers");
    setCustomers(response.data);
  };

  const getBookings = async () => {
    const response = await axios.get("http://localhost:5000/bookings");
    setBookings(response.data);
  };

  const getRooms = async () => {
    const response = await axios.get("http://localhost:5000/rooms");
    setRooms(response.data);
  };

  const getBackupBookings = async () => {
    const response = await axios.get("http://localhost:5000/backup_bookings");
    setBackupBookings(response.data);
  };

  useEffect(() => {
    getCustomers();
    getBookings();
    getRooms();
    getBackupBookings();
  }, []);

  return (
    // Image and text
    <div className="container">
      <div className="columns">
        <div className="column is-3">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://img.freepik.com/premium-vector/villa-homestay-swimming-pool-with-host-shaking-hands-with-guests-isometric-illustration_30590-224.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="card-content">
              <hr className="block" />
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
                <hr className="block" />
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-16x16">
                      <img
                        className="pt-3"
                        src="https://logodownload.org/wp-content/uploads/2018/01/google-maps-logo-1-1.png"
                        alt="Logo"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Location</p>
                    <p className="subtitle is-6">Google Maps</p>
                  </div>
                </div>
                <p className="title is-4"></p>
                <Link>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330275.5607100681!2d100.82555615590965!3d4.154941941093248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cb23c8145a3243%3A0xa9ab75b2757b9d7a!2sHomestay!5e0!3m2!1sid!2sid!4v1668268048888!5m2!1sid!2sid"
                    width="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Link>
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
                    <h1 className="title">Menu</h1>
                  </div>
                  <div className="column is-7">
                    <div className="tabs is-centered">
                      <ul className="mt-0">
                        <li className="is-active">
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/customers">Customers</Link>
                        </li>
                        <li>
                          <Link to="/bookings">Bookings</Link>
                        </li>
                        <li>
                          <Link to="/rooms">Rooms</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="column is-2">
                    <figure className="image is-64x64">
                      <img src="https://cdn-icons-png.flaticon.com/512/4862/4862384.png" />
                    </figure>
                  </div>
                </div>
                <hr className="block" />
                <div className="columns">
                  <div className="column is-4">
                    <div className="box">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img src="https://cdn-icons-png.flaticon.com/512/3126/3126589.png" />
                          </figure>
                        </div>
                        <div className="media-content has-text-right">
                          <h3 className="title is-1 has-text-info">
                            {customers.length}
                          </h3>
                        </div>
                      </div>
                      <h4 className="title">Customers</h4>
                      <progress
                        className="progress is-info"
                        role="progressbar"
                        value={customers.length == 100 ? 100 : customers.length}
                        max="100"
                      ></progress>
                    </div>
                  </div>
                  <div className="column is-4">
                    <div className="box">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img src="https://cdn-icons-png.flaticon.com/512/3870/3870828.png" />
                          </figure>
                        </div>
                        <div className="media-content has-text-right">
                          <h3 className="title is-1 has-text-info">
                            {bookings.length}
                          </h3>
                        </div>
                      </div>
                      <h4 className="title">Bookings</h4>
                      <progress
                        className="progress is-info"
                        role="progressbar"
                        value={
                          bookings.length / customers.length == 1
                            ? 100
                            : bookings.length
                        }
                        max="100"
                      ></progress>
                    </div>
                  </div>
                  <div className="column is-4">
                    <div className="box">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img src="https://cdn-icons-png.flaticon.com/512/3344/3344047.png" />
                          </figure>
                        </div>
                        <div className="media-content has-text-right">
                          <h3 className="title is-1 has-text-info">
                            {rooms.length}
                          </h3>
                        </div>
                      </div>
                      <h4 className="title">Rooms</h4>
                      <progress
                        className="progress is-info"
                        role="progressbar"
                        // value diambil dari bookings yang menjumlahkan semua nilai dari field total
                        value={
                          rooms.length / bookings.length == 1
                            ? 100
                            : rooms.length
                        }
                        max="100"
                      ></progress>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-6">
                    <div className="box">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img src="https://cdn-icons-png.flaticon.com/512/1138/1138038.png" />
                          </figure>
                        </div>
                        <div className="media-content has-text-right">
                          <h3 className="title is-3 has-text-info">
                            ${backup_bookings.reduce((a, b) => a + b.total, 0)}
                          </h3>
                        </div>
                      </div>
                      <h4 className="title">Balance</h4>
                      <progress
                        className="progress is-info"
                        role="progressbar"
                        // value diambil dari bookings yang menjumlahkan semua nilai dari field total
                        value={
                          bookings.reduce((a, b) => a + b.total, 0) >=
                          rooms.reduce((a, b) => a + b.price, 0)
                            ? 100
                            : bookings.reduce((a, b) => a + b.total, 0) /
                              rooms.reduce((a, b) => a + b.price, 0)
                        }
                        max="100"
                      ></progress>
                    </div>
                  </div>
                  <div className="column is-6">
                    <div className="box">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img src="https://cdn-icons-png.flaticon.com/512/2244/2244556.png" />
                          </figure>
                        </div>
                        <div className="media-content has-text-right">
                          <h3 className="title is-3 has-text-info">
                            ${rooms.reduce((a, b) => a + b.price, 0)}
                          </h3>
                        </div>
                      </div>
                      <h4 className="title">Amount</h4>
                      <progress
                        className="progress is-info"
                        role="progressbar"
                        // value diambil dari bookings yang menjumlahkan semua nilai dari field total
                        value={
                          rooms.reduce((a, b) => a + b.price, 0) /
                          (rooms.length * 10000)
                        }
                        max="100"
                      ></progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStay;
