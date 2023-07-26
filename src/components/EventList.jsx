import React from "react";
import { NavLink } from "react-router-dom";
import { API_BASE_URL } from "../constants";

export default function EventList(props) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/events/${props.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        props.deleted();
      }
      // Optionally, you can update the state or trigger a re-fetch of the event list here
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul className="list-group my-2">
      <li
        className="list-group-item d-flex justify-content-between align-items-start"
        id={props.id}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{props.title}</div>
          {props.description}
        </div>
        <NavLink to={`/event-feedback/${props.id}`}>
          <button className="btn btn-primary" type="button">
            Feedback
          </button>
        </NavLink>
        <NavLink to={`/events/${props.id}/view`}>
          <button className="btn btn-primary" type="button">
            View
          </button>
        </NavLink>
        <NavLink to={`/events/${props.id}/edit`}>
          <button className="btn btn-primary" type="button">
            Edit
          </button>
        </NavLink>
        <button className="btn btn-danger" type="button" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </ul>
  );
}
