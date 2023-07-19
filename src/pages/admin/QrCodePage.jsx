import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/sidebar";
import DashCard from "../../components/dashcard";
import "bootstrap-icons/font/bootstrap-icons.css";
import EventList from "../../components/EventList";

import { API_BASE_URL } from "../../constants";

export default function QrCodePage() {
    const location = useLocation();
    const qrCode = location.state?.qrCode || 'No data passed';
    const title = location.state?.title || 'Event';
    const handleClick = async (data) => {
        const pdf = new jsPDF();
        pdf.text(`Event: ${title}`, 10, 9);
        pdf.addImage(qrCode, 'PNG', 10, 10, 50, 50);
        pdf.save(`${title}-qrcode.pdf`);
    }

    return (
        <div className="container-fluid m-0 p-0">
            <div className="d-flex ">
                <Sidebar />
                <div className="container-fluid px-5">
                    <h1 className="display-4 text-center">Admin Dashboard</h1>
                    <div className="row">
                        <h1>{title}</h1>
                        <div className="container">
                            <div>
                                <button className="btn btn-primary m-2" onClick={() => handleClick()}> Export PDF</button>

                            </div>
                            <div className="col-md-4 px-0">
                                <img src={`data:image/png;base64,${qrCode}`} className="img-thumbnail" alt="QR Code" />
                            </div>
                        </div>
                        {/* {attendees.events &&
              attendees.events.map((event) => (
                <EventList
                  key={event.id}
                  id={event.id}
                  title={event.name}
                  description={event.location}
                  deleted={updateDeletedStatus}
                />
              ))} */}
                    </div>
                </div>
            </div>
        </div >
    );
}
