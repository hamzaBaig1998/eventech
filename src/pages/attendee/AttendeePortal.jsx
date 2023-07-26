import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import DashCard from "../../components/dashcard";
import "bootstrap-icons/font/bootstrap-icons.css";

import { API_BASE_URL } from "../../constants";
import AttendeeSidebar from "../../components/AttendeeSidebar";
import { NavLink } from "react-router-dom";

export default function AttendeePortal() {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    fetch(`${API_BASE_URL}/attendees/${user_id}/events/`)
      .then((response) => response.json())
      .then((data) => {
        setAttendees(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCancel = (eventId) => {
    const user_id = localStorage.getItem("user_id");
    const data = {
      attendee_id: user_id,
      event_id: eventId,
    };

    fetch(`${API_BASE_URL}/events/cancel/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Event cancellation successful!");
        // Refresh the list of events
        fetch(`${API_BASE_URL}/attendees/${user_id}/events/`)
          .then((response) => response.json())
          .then((data) => {
            setAttendees(data);
            console.log(data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container-fluid m-0 p-0">
      <div className="d-flex ">
        <AttendeeSidebar />
        <div className="container-fluid px-5">
          <h1 className="display-4 text-center">Attendee Portal</h1>
          {attendees ? (
            <div className="row">
              <DashCard
                count={attendees.events ? attendees.events.length : "0"}
                title={"Events"}
                icon={"people-fill"}
                color={"black"}
              />
              {/* <DashCard
                count={"3123"}
                title={"Sales"}
                icon={"people-fill"}
                color={"black"}
              />
              <DashCard
                count={"3123"}
                title={"Attendees"}
                icon={"people-fill"}
                color={"black"}
              /> */}
            </div>
          ) : (
            ""
          )}

          <h1 className="display-5"> My Events</h1>
          <div className="row">
            {attendees.events
              ? attendees.events.map((ev) => (
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card bg-primary text-white border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">{ev.name}</h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div>
                            <p>
                              <strong>Description:</strong> {ev.description}
                            </p>
                            <p>
                              <strong>Capacity:</strong> {ev.max_attendees}
                            </p>
                            <p>
                              <strong>Start Date:</strong> {ev.start_date}
                            </p>
                            <p>
                              <strong>End Date:</strong> {ev.end_date}
                            </p>
                            <NavLink to={`/events/${ev.id}/feedback`}>
                              <button type="button" className="btn btn-primary">
                                Feedback
                              </button>
                            </NavLink>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => handleCancel(ev.id)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
