import React from "react";
import FormInput from "../components/FormInput";
import Form from "../components/Form";
import TextArea from "../components/TextArea";
import NavBar from "../components/NavBar";

export default function CreateEventForm() {
  return (
    <div className="bg-crowd">
      <NavBar />
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 class="text-center mb-4">Create Event</h1>
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
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
