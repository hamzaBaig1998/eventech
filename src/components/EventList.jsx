import react from "react";
import { NavLink } from "react-router-dom";

export default function EventList(props) {
    return (
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-start" id={props.id}>
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{props.title}</div>
                    {props.description}
                </div>
                <NavLink to="/editevent" >

                    <button class="btn btn-primary" type="button" id={props.id}>Edit</button>

                </NavLink>
            </li>
        </ul>

    );
}

