import react from "react";



export default function EventTicket(props) {
    const { title, description, capacity, startdate, enddate } = props;
    return (
        <div className="card " >

            <img src={`${props.img}`} className="card-img-top p-3" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> {description}</li>
                    <li className="list-group-item">Capacity: {capacity}</li>
                    <li className="list-group-item">Start Date: {startdate}</li>
                    <li className="list-group-item">End Date: {enddate}</li>
                </ul>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}