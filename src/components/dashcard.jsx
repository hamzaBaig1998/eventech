import react from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function DashCard(props) {
    return (
        <div className="col-lg col-md-6 p-1 bg-light">
            <div className="card bg-primary  p-1  ">
                <div className="row">
                    <div className="col-4 text-light d-flex justify-content-center align-items-center"> {/*icon here*/}
                        <i
                            className={`bi bi-${props.icon} ${props.color}`}
                        ></i>
                    </div>
                    <div className="col-8  text-center text-light">
                        <div className="row-8 d-felx align-items-center justify-content-center">{props.count}</div>
                        <div className="row-4">{props.title}</div>
                    </div>
                </div>


            </div>
        </div>
    );
}