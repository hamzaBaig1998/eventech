import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/sidebar";
import DashCard from "../../components/dashcard";
import "bootstrap-icons/font/bootstrap-icons.css";
import EventList from "../../components/EventList";

import { API_BASE_URL } from "../../constants";

export default function RegisteredAttendee() {
    const [EventDetail, setEventDetail] = useState([]);





    useEffect(() => {
        fetch(`${API_BASE_URL}/event/attendees_count/`) // Replace with your API endpoint URL
            .then((response) => response.json())
            .then((data) => {
                setEventDetail(data.events);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    return (
        <div className="container-fluid m-0 p-0">
            <div className="d-flex ">
                <Sidebar />
                <div className="container-fluid px-5">
                    <h1 className="display-4 text-center">Admin Dashboard</h1>
                    <div className="row">
                        <h1>Events</h1>
                        <table class="table table-hover">
                            <thead>
                                <tr>

                                    <th scope="col">Event</th>
                                    <th scope="col">Registered</th>
                                    <th scope="col">Attended</th>
                                </tr>
                            </thead>
                            <tbody>
                                {EventDetail.map((event) => (
                                    <tr key={event.event_name}>
                                        <td>{event.event_name}</td>
                                        <td>{event.registered}</td>
                                        <td>{event.attended}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
