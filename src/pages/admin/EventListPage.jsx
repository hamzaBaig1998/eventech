import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/sidebar";
import DashCard from "../../components/dashcard";
import "bootstrap-icons/font/bootstrap-icons.css";
import EventList from "../../components/EventList";

import { API_BASE_URL } from "../../constants";

export default function EventListPage() {
  const [attendees, setAttendees] = useState([]);
  const [deleted_status, setDeletedStatus] = useState([]);

  function updateDeletedStatus() {
    setDeletedStatus(!deleted_status);
  }

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    fetch(`${API_BASE_URL}/admin/${user_id}/attendees/`)
      .then((response) => response.json())
      .then((data) => setAttendees(data))
      .catch((error) => console.log(error));
  }, [deleted_status]);

  return (
    <div className="container-fluid m-0 p-0">
      <div className="d-flex ">
        <Sidebar />
        <div className="container-fluid px-5">
          <h1 className="display-4 text-center">Admin Dashboard</h1>
          <div className="row">
            <h1>Event List</h1>
            {attendees.events &&
              attendees.events.map((event) => (
                <EventList
                  key={event.id}
                  id={event.id}
                  title={event.name}
                  description={event.location}
                  deleted={updateDeletedStatus}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
