import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditRoom = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [bed, setBed] = useState("");
  const [facility, setFacility] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getRoomsById();
  }, []);

  const getRoomsById = async () => {
    const response = await axios.get(`http://localhost:5000/rooms/${id}`);
    setName(response.data.name);
    setPrice(response.data.price);
    setBed(response.data.bed);
    setFacility(response.data.facility);
    setStatus(response.data.status);
  };

  const updateRoom = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/rooms/${id}`, {
        name,
        price,
        bed,
        facility,
        status,
      });
      navigate("/rooms");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={updateRoom}>
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
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                </select>
              </div>
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

export default EditRoom;
