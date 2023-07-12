import react from "react";
import Sidebar from "../../components/sidebar";
import FormInput from "../../components/FormInput";
import Form from "../../components/Form";
import TextArea from "../../components/TextArea";
import NavBar from "../../components/NavBar";

export default function EditEventPage({ props }) {

    return (
        <div className="container-fluid m-0 p-0">
            <div className="d-flex ">
                <Sidebar />
                <div className="container-fluid px-5">
                    {/* <h1 className="display-4 text-center">Admin Dashboard</h1> */}
                    <div className="row">
                        <h1>Event</h1 >
                        <form className="p-5 rounded shadow bg-white">
                            <div class="row">
                                <div class="col-md-6">
                                    <FormInput
                                        id="username"
                                        type={"text"}
                                        placeholder={"Username"}
                                        title={"Username"}
                                    />
                                </div>
                                <div class="col-md-6">
                                    <FormInput
                                        id="type_of_event"
                                        type={"text"}
                                        placeholder={"Type of Event"}
                                        title={"Type of Event"}
                                    />
                                </div>

                                <div class="col-md-6">
                                    <FormInput
                                        id="max_occupancy"
                                        type={"number"}
                                        placeholder={"Max occupancy"}
                                        title={"Max Occupancy"}
                                    />
                                </div>
                                <div class="col-md-6">
                                    <FormInput
                                        id="location"
                                        type={"text"}
                                        placeholder={"Location"}
                                        title={"Location"}
                                    />
                                </div>

                                <div class="col-md-6">
                                    <FormInput
                                        id="start_date"
                                        type={"date"}
                                        placeholder={"Start date and time"}
                                        title={"Start date and time"}
                                    />
                                </div>
                                <div class="col-md-6">
                                    <FormInput
                                        id="end_date"
                                        type={"date"}
                                        placeholder={"End date and time"}
                                        title={"End date and time"}
                                    />
                                </div>

                                <div class="col-md-12">
                                    <TextArea />
                                </div>
                            </div>
                            <button type="submit" className="btn button-color w-100 mt-3">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}