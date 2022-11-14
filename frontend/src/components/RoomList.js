import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = async () => {
    const response = await axios.get("http://localhost:5000/rooms");
    setRooms(response.data);
  };

  const deleteRoom = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/rooms/${id}`);
      getRooms();
    } catch (error) {
      console.log(error);
    }
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
                  src="https://static.vecteezy.com/system/resources/previews/000/360/167/non_2x/modern-furniture-for-bedroom-interior-design-elements-vector-cartoon-illustration-set.jpg"
                  alt="Ilustration"
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
                    <h1 className="title">Rooms</h1>
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
                        <li>
                          <Link to="/bookings">Bookings</Link>
                        </li>
                        <li className="is-active">
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
                        <img src="https://cdn-icons-png.flaticon.com/512/2921/2921226.png" />
                      </figure>
                    </Link>
                  </div>
                </div>
                <table className="table is-striped is-fullwidth mt-5">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Bed</th>
                      <th>Facility</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map((room, index) => (
                      <tr key={room._id}>
                        <td>{index + 1}</td>
                        <td>{room.name}</td>
                        <td>{room.price}</td>
                        <td>{room.bed}</td>
                        <td>{room.facility}</td>
                        <td>{room.status}</td>
                        <td>
                          <Link
                            to={`edit/${room._id}`}
                            className="button is-info is-small"
                          >
                            <figure className="image is-16x16">
                              <img src="https://cdn-icons-png.flaticon.com/512/7235/7235463.png" />
                            </figure>
                          </Link>
                          <button
                            onClick={() => deleteRoom(room._id)}
                            className="button is-danger is-small ml-2"
                          >
                            <figure className="image is-16x16">
                              <img src="https://cdn-icons-png.flaticon.com/512/3286/3286160.png" />
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

export default RoomList;
