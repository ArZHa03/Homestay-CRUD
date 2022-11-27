import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [bed, setBed] = useState("");
  const [facility, setFacility] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const saveRoom = async (e) => {
    e.preventDefault();
    const room = {
      name,
      price,
      bed,
      facility,
      status,
    };
    await axios.post("http://localhost:5000/rooms", room);
    navigate("/rooms");
  };

  // const saveRoom = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:5000/rooms", {
  //       name,
  //       price,
  //       bed,
  //       facility,
  //       status,
  //     });
  //     navigate("/rooms");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={saveRoom}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Bed</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={bed}
                onChange={(e) => setBed(e.target.value)}
                placeholder="Bed"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Facility</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={facility}
                onChange={(e) => setFacility(e.target.value)}
                placeholder="Facility"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Status</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                </select>
              </div>
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

export default AddRoom;
