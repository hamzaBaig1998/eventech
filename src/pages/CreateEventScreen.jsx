import React, { useState } from "react";
import FormInput from "../components/FormInput";
import TextArea from "../components/TextArea";
import NavBar from "../components/NavBar";
import { API_BASE_URL } from "../constants";
import Sidebar from "../components/sidebar";
import { useNavigate } from "react-router-dom";

export default function CreateEventForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    admin: null,
    name: "",
    description: "",
    start_date: "",
    end_date: "",
    location: "",
    registration_start_date: "",
    registration_end_date: "",
    max_attendees: null,
    event_image: null,
    price: null,
  });

  function handleInputChange(event) {
    const { id, value, type, files } = event.target;
    setFormData((prevFormData) => {
      if (type === "file") {
        return { ...prevFormData, [id]: files[0] };
      } else if (type === "number") {
        return { ...prevFormData, [id]: parseInt(value) };
      } else {
        return { ...prevFormData, [id]: value };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user_id = localStorage.getItem("user_id");
    const form = new FormData();
    form.append("admin", user_id);
    form.append("name", formData.name);
    form.append("description", formData.description);
    form.append("start_date", formData.start_date);
    form.append("end_date", formData.end_date);
    form.append("location", formData.location);
    form.append("registration_start_date", formData.registration_start_date);
    form.append("registration_end_date", formData.registration_end_date);
    form.append("max_attendees", formData.max_attendees);
    form.append("event_image", formData.event_image);
    form.append("price", formData.price);

    fetch(`${API_BASE_URL}/events/`, {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/eventlistscreen");
        // handle success
      })
      .catch((error) => {
        console.log(error);
        // handle error
        alert(error);
      });
  }

  return (
    <div className="container-fluid m-0 p-0">
      <div className="d-flex ">
        <Sidebar />
        <div className="container-fluid px-5">
          <h1 className="display-4 text-center">Create Event</h1>
          <form className="p-5 rounded shadow bg-white" onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-md-6">
                <FormInput
                  id="name"
                  type={"text"}
                  placeholder={"Name"}
                  title={"Name"}
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div class="col-md-6">
                <FormInput
                  id="max_attendees"
                  type={"number"}
                  placeholder={"Max occupancy"}
                  title={"Max Occupancy"}
                  value={formData.max_attendees}
                  onChange={handleInputChange}
                />
              </div>
              <div class="col-md-6">
                <FormInput
                  id="location"
                  type={"text"}
                  placeholder={"Location"}
                  title={"Location"}
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </div>
              <div class="col-md-6">
                <FormInput
                  id="start_date"
                  type={"datetime-local"}
                  placeholder={"Start date and time"}
                  title={"Start date and time"}
                  value={formData.start_date}
                  onChange={handleInputChange}
                />
              </div>
              <div class="col-md-6">
                <FormInput
                  id="end_date"
                  type={"datetime-local"}
                  placeholder={"End date and time"}
                  title={"End date and time"}
                  value={formData.end_date}
                  onChange={handleInputChange}
                />
              </div>
              <div class="col-md-6">
                <FormInput
                  id="registration_start_date"
                  type={"datetime-local"}
                  placeholder={"Registration Start date and time"}
                  title={"Registration Start date and time"}
                  value={formData.registration_start_date}
                  onChange={handleInputChange}
                />
              </div>
              <div class="col-md-6">
                <FormInput
                  id="registration_end_date"
                  type={"datetime-local"}
                  placeholder={"Registration End date and time"}
                  title={"Registration End date and time"}
                  value={formData.registration_end_date}
                  onChange={handleInputChange}
                />
              </div>
              <div class="col-md-6">
                <FormInput
                  id="price"
                  type={"number"}
                  placeholder={"Price"}
                  title={"Price"}
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>
              <div class="col-md-12">
                <FormInput
                  id="event_image"
                  type={"file"}
                  placeholder={""}
                  title={"Event Image for Ticket"}
                  onChange={handleInputChange}
                />
              </div>
              <div class="col-md-12">
                <TextArea
                  id="description"
                  placeholder={"Description"}
                  title={"Description"}
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button type="submit" className="btn button-color w-100 mt-3">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
