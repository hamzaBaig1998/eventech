import react from "react";
import EventTicket from "../components/EventTicket";
import NavBar from "../components/NavBar";

const pageStyle = {
  height: "100vh",
};
export default function ShowTicket() {
  return (
    <div className="bg-crowd" style={pageStyle}>
      <NavBar />
      <div className="container-fluid py-5">
        <div className="d-flex  justify-content-center align-items-center">
          <EventTicket
            img="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Python Workshop 101"
            description="Python workshop is an event where participants learn Python programming language basics, syntax, and practical applications in a hands-on environment."
            capacity="50"
            startdate="2023-07-01"
            enddate="2023-07-09"
          />
          {/* TODO: add slider to increase number of tickets user can buy */}
        </div>
      </div>
    </div>
  );
}
