import React, { useState, useEffect } from "react";
import AttendeeSidebar from "../../components/AttendeeSidebar";
import "./RequestedEventsPage.css";
import { API_BASE_URL } from "../../constants";

export default function RequestedEventsPage() {
  const [requestedEvents, setRequestedEvents] = useState([]);

  useEffect(() => {
    const attendeeId = localStorage.getItem("user_id");
    fetch(`${API_BASE_URL}/event-requests/attendee/${attendeeId}/`)
      .then((response) => response.json())
      .then((data) => {
        setRequestedEvents(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container-fluid m-0 p-0">
      <div className="d-flex ">
        <AttendeeSidebar />
        <div className="container-fluid px-5">
          <h1 className="display-4 text-center">My Requested Events</h1>
          <div className="requested-events-container">
            <ul className="requested-events-list">
              {requestedEvents.map((event) => (
                <li key={event.id} className="requested-event">
                  <div className="requested-event-header">
                    <h3>{event.event_name}</h3>
                    <p>{event.event_location}</p>
                  </div>
                  <div className="requested-event-details">
                    <p>{event.event_description}</p>
                    <div className="requested-event-requester">
                      <p>Requested by:</p>
                      <p>{event.requester_name}</p>
                      <p>{event.requester_email}</p>
                      <p>{event.requester_phone_number}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
