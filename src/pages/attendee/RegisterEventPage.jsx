import React, { useState, useEffect } from "react";
import AttendeeSidebar from "../../components/AttendeeSidebar";

export default function RegisterEventPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/events/")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleRegister = (eventId, attendeeId) => {
    const data = {
      event_id: eventId,
      attendee_id: attendeeId,
      ticket_type: "general",
      payment_amount: 100.0,
    };

    fetch("http://localhost:8000/api/register-event/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Registration successful!");
        alert("Registration Successful");
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
          <h1 className="display-4 text-center">Register Event</h1>
          <div className="row">
            {events.map((event) => (
              <div className="col-md-4 mb-4" key={event.id}>
                <div className="card">
                  {event.event_image && (
                    <img
                      className="card-img-top"
                      src={event.event_image}
                      alt={event.name}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <p className="card-text">{event.description}</p>
                    <ul className="list-unstyled">
                      <li>
                        <strong>Location:</strong> {event.location}
                      </li>
                      <li>
                        <strong>Date:</strong>{" "}
                        {new Date(event.start_date).toLocaleDateString()} -{" "}
                        {new Date(event.end_date).toLocaleDateString()}
                      </li>
                      <li>
                        <strong>Registration:</strong>{" "}
                        {new Date(
                          event.registration_start_date
                        ).toLocaleDateString()}{" "}
                        -{" "}
                        {new Date(
                          event.registration_end_date
                        ).toLocaleDateString()}
                      </li>
                      <li>
                        <strong>Max Attendees:</strong> {event.max_attendees}
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleRegister(event.id, 1)}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
