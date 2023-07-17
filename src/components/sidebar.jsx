import react from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-primary col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column pt-3 px-0">
      <div>
        <a
          href=""
          className="d-flex align-item-center ms-3  d-none d-sm-inline"
        >
          <span className="ms-1 fs-4 d-none d-sm-inline pt-5 text-white">
            <strong>Event</strong>Tech
          </span>
        </a>
        <hr className="text-secondary d-none d-sm-block" />
        <ul className="nav nav-pill flex-column" id="navig">
          <NavLink to="/admin" className="text-white">
            <li className="nav-items fs-4 my-1 py-2 py-sm-0">
              <a
                href=""
                className="nav-link fs-5 text-white"
                aria-current="page"
              >
                <i className="fs-4 bi bi-speedometer"></i>
                <span className="ms-1  d-none d-sm-inline">Dashboard</span>
              </a>
            </li>
          </NavLink>
          <NavLink to="/eventlistscreen" className="text-white">
            <li
              className="nav-items fs-4 my-1 py-2 py-sm-0"
              aria-current="page"
            >
              <a href="" className="nav-link fs-5 text-white">
                <i className="fs-4 bi bi-table"></i>
                <span className="ms-1 d-none d-sm-inline">Events</span>
              </a>
            </li>
          </NavLink>
          <NavLink to="/create-event" className="text-white">
            <li
              className="nav-items fs-4 my-1 py-2 py-sm-0"
              aria-current="page"
            >
              <a href="" className="nav-link fs-5 text-white">
                <i className="fs-4 bi bi-house"></i>
                <span className="ms-1 d-none d-sm-inline"> Create Event</span>
              </a>
            </li>
          </NavLink>
        </ul>
      </div>
      <div class="dropdown open">
        <a
          class=" text-white dropdown-toggle p-3"
          type="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="bi bi-person-circle"></i>{" "}
          <span className="ms-2 d-none d-sm-inline"> Admin</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="triggerId">
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item disabled" href="#">
            Disabled action
          </a>
        </div>
      </div>
    </div>
  );
}
