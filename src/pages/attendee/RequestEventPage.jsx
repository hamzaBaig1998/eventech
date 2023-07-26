import React, { useState, useEffect } from "react";
import AttendeeSidebar from "../../components/AttendeeSidebar";
import { API_BASE_URL } from "../../constants";

export default function RequestEventPage() {
  const attendeeId = localStorage.getItem("user_id");
  const [eventData, setEventData] = useState({
    attendee: attendeeId,
    admin: "",
    event_name: "",
    event_description: "",
    event_location: "",
    requester_name: "",
    requester_email: "",
    requester_phone_number: "",
  });
  const [adminList, setAdminList] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/admin-list/`)
      .then((response) => response.json())
      .then((data) => {
        setAdminList(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_BASE_URL}/event-requests/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Clear form data after successful submission
        setEventData({
          attendee: localStorage.getItem("user_id"),
          admin: "",
          event_name: "",
          event_description: "",
          event_location: "",
          requester_name: "",
          requester_email: "",
          requester_phone_number: "",
        });
        // const msg = JSON.stringify(data);
        alert("Request submitted");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container-fluid m-0 p-0">
      <div className="d-flex ">
        <AttendeeSidebar />
        <div className="container-fluid px-5">
          <h1 className="display-4 text-center">Request Event</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="event_name">Event Name</label>
              <input
                type="text"
                className="form-control"
                id="event_name"
                name="event_name"
                value={eventData.event_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="event_description">Event Description</label>
              <textarea
                className="form-control"
                id="event_description"
                name="event_description"
                value={eventData.event_description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="event_location">Event Location</label>
              <input
                type="text"
                className="form-control"
                id="event_location"
                name="event_location"
                value={eventData.event_location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="requester_name">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="requester_name"
                name="requester_name"
                value={eventData.requester_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="requester_email">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="requester_email"
                name="requester_email"
                value={eventData.requester_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="requester_phone_number">Your Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="requester_phone_number"
                name="requester_phone_number"
                value={eventData.requester_phone_number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="admin">Admin</label>
              <select
                className="form-control"
                id="admin"
                name="admin"
                value={eventData.admin}
                onChange={handleChange}
                required
              >
                <option value="">Select an admin</option>
                {adminList.map((admin) => (
                  <option key={admin.id} value={admin.id}>
                    {admin.username}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
