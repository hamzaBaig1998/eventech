import react from "react";

export default function EventTicket(props) {
  const { title, description, capacity, startdate, img, enddate, show_btn } =
    props;

  const cardStyle = {
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
    transition: "box-shadow 0.3s ease-in-out",
    borderRadius: "10px",
    overflow: "hidden",
  };

  const infoStyle = {
    textAlign: "left",
  };

  return (
    <div className="card w-25" style={cardStyle}>
      {img ? <img src={`${img}`} className="card-img-top p-3" alt="..." /> : ""}
      <div className="card-body">
        <h5 className="card-title">{props.title} </h5>
        <div style={infoStyle}>
          <p>
            <strong>Description:</strong> {props.description}
          </p>
          <p>
            <strong>Capacity:</strong> {props.capacity}
          </p>
          <p>
            <strong>Start Date:</strong> {props.startdate}
          </p>
          <p>
            <strong>End Date:</strong> {props.enddate}
          </p>
        </div>
        {show_btn ? (
          <a href="#" className="btn btn-primary btn-block">
            Book Ticket
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
