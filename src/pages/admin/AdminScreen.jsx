import react from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/sidebar";
import DashCard from "../../components/dashcard";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function AdminScreen() {
    return (
        <div className="bg-light">
            {/*            <NavBar /> */}
            <Sidebar />
            <div className="row">
                <DashCard
                    count={"3123"}
                    title={"Sale"}
                    icon={'people-fill'}
                    color={"black"}
                />
                <DashCard
                    count={"3123"}
                    title={"Sale"}
                    icon={'people-fill'}
                    color={"black"}
                />
                <DashCard
                    count={"3123"}
                    title={"Sale"}
                    icon={'people-fill'}
                    color={"black"}
                />
            </div>

        </div>
    );
}