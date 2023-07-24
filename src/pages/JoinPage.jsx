import React from "react";
import NavBar from "../components/NavBar";
import { NavLink } from "react-router-dom";

export default function JoinPage() {
  return (
    <div className="bg-crowd">
      <NavBar />
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="text-center mb-4">Join Us</h1>
        <div className="card-deck">
          <NavLink to="/admin-signup" className={"nav-link"}>
            <div className="card border rounded-lg p-3">
              <div className="card-body">
                <h5 className="card-title">Admin</h5>
                <p className="card-text">Click here to join as an admin</p>
                {/* <a href="#" className="btn btn-primary">
                Join as an admin
              </a> */}
              </div>
            </div>
          </NavLink>
          <NavLink to="/register-attendee" className={"nav-link"}>
            <div className="card border rounded-lg p-3">
              <div className="card-body">
                <h5 className="card-title">Attendee</h5>
                <p className="card-text">Click here to join as an attendee</p>
                {/* <a href="#" className="btn btn-primary">
                Join as an attendee
              </a> */}
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
