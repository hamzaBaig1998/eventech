import React, { useState, useEffect } from "react";
import EventTicket from "../components/EventTicket";
import NavBar from "../components/NavBar";
import { API_BASE_URL } from "../constants";
import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebar";

const pageStyle = {
  height: "100vh",
};

export default function EventDetailPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/events/${id}/`);
        const data = await response.json();
        setEvent(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchEvent();
  }, []);

  return (
    <div className="container-fluid m-0 p-0">
      <div className="d-flex ">
        <Sidebar />
        <div className="container-fluid px-5">
          <h1 className="display-4 text-center">Event Detail Page</h1>
          <div className="d-flex  justify-content-center align-items-center">
            {/* {loading ? (
              <p>Loading...</p>
            ) : (
              <EventTicket
                img={event.event_image}
                title={event.name}
                description={event.description}
                startdate={event.start_date}
                enddate={event.end_date}
                capacity={event.max_attendees}
                showbtn={false}
              />
            )} */}
            {event ? (
              <EventTicket
                img={event.event_image}
                title={event.name}
                description={event.description}
                startdate={event.start_date}
                enddate={event.end_date}
                capacity={event.max_attendees}
                showbtn={false}
              />
            ) : (
              ""
            )}
            {/* TODO: add slider to increase number of tickets user can buy */}
          </div>
        </div>
      </div>
    </div>
  );
}
