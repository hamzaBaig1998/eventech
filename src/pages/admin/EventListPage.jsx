import react from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/sidebar";
import DashCard from "../../components/dashcard";
import "bootstrap-icons/font/bootstrap-icons.css";
import EventList from "../../components/EventList";

export default function EventListPage() {

    return (
        <div className="container-fluid m-0 p-0">
            <div className="d-flex ">
                <Sidebar />
                <div className="container-fluid px-5">
                    <h1 className="display-4 text-center">Admin Dashboard</h1>
                    <div className="row">
                        <h1>Event List</h1 >

                        <EventList
                            id="1"
                            title="Event 1"
                            description="Event description"
                        />

                        <EventList
                            id="2"
                            title="Event 2"
                            description="Event description"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}