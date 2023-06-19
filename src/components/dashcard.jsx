import react from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function DashCard(props) {
  return (
    <div className="col-lg col-md-6 card bg-primary  p-3 my-1 mx-3">
      <div className="d-flex flex-column text-white justify-content-center align-items-center">
        <i className={`bi bi-${props.icon} ${props.color} display-5`}></i>
        <div className="display-4 font-weight-bold">{props.count}</div>
        <div className="lead">{props.title}</div>
      </div>
    </div>
  );
}
