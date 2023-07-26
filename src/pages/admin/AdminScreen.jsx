import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import DashCard from "../../components/dashcard";
import "bootstrap-icons/font/bootstrap-icons.css";

import { API_BASE_URL, APP_BASE_URL } from "../../constants";

export default function AdminScreen(props) {
  const [attendees, setAttendees] = useState([]);

  const navigate = useNavigate();

  const handleClick = async (title, id) => {
    const user_id = localStorage.getItem("user_id");

    const data = { title: title, event_id: id, user_id: user_id }; // Replace with the actual data

    navigate(`/events/${id}/qrcode`, {
      state: { title: title, user_id: user_id, event_id: id },
    });
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    fetch(`${API_BASE_URL}/admin/${user_id}/attendees/`)
      .then((response) => response.json())
      .then((data) => {
        setAttendees(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    //   handleClick()
  }, []);

  return (
    <div className="container-fluid m-0 p-0">
      <div className="d-flex ">
        <Sidebar />
        <div className="container-fluid px-5">
          <h1 className="display-4 text-center">Admin Dashboard</h1>
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

          <h1 className="display-5">Events</h1>
          <div className="row">
            {attendees.events
              ? attendees.events.map((ev, i) => (
                  <div className="col-lg-4 col-md-6 mb-4" key={i}>
                    <div className="card bg-primary text-white border-0 shadow-sm pl-2">
                      <div className="card-body">
                        <h5 className="card-title">{ev.name}</h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          {/* <div className="lead font-weight-bold">
                            Cancelled: {ev.attendee_status.cancelled}
                          </div>
                          <div className="lead font-weight-bold">
                            Paid: {ev.attendee_status.paid}
                          </div>
                          <div className="lead font-weight-bold">
                            Pending: {ev.attendee_status.pending}
                          </div> */}
                        </div>
                        <div class="row   justify-content-between">
                          <div className="col-3">
                            <NavLink to={`/events/${ev.id}/view`}>
                              <button className="btn btn-primary">
                                View Details
                              </button>
                            </NavLink>
                          </div>
                          <div className="col-3 me-5">
                            {/* <NavLink to={`/events/${props.id}/qrcode`} target="_blank">
                            <button className="btn btn-primary">
                              QR Code
                            </button>
                          </NavLink> */}
                            <div>
                              <button
                                className="btn btn-primary me-5"
                                key={i}
                                onClick={() => handleClick(ev.name, ev.id)}
                              >
                                {" "}
                                QR Code
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
            {/* {qrCode && <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" />} */}
          </div>
        </div>
      </div>
    </div>
  );
}
