import react from "react";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/sidebar";
import DashCard from "../../components/dashcard";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function AdminScreen() {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="d-flex ">
        <Sidebar />
        <div className="container-fluid px-5">
          <h1 className="display-4 text-center">Admin Dashboard</h1>
          <div className="row">
            <DashCard
              count={"3123"}
              title={"Sale"}
              icon={"people-fill"}
              color={"black"}
            />
            <DashCard
              count={"3123"}
              title={"Sale"}
              icon={"people-fill"}
              color={"black"}
            />
            <DashCard
              count={"3123"}
              title={"Sale"}
              icon={"people-fill"}
              color={"black"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
