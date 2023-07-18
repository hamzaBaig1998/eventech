import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import FormInput from "../../components/FormInput";
import TextArea from "../../components/TextArea";
import { API_BASE_URL } from "../../constants";
import { useParams } from "react-router-dom";

export default function EditEventPage() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    max_attendees: null,
    location: "",
    start_date: "",
    end_date: "",
    registration_start_date: "",
    registration_end_date: "",
    price: null,
    event_image: null,
    description: "",
  });

  //   TODO: fix logic for file, not letting update
  useEffect(() => {
    fetch(`${API_BASE_URL}/events/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
      })
      .catch((error) => {
        console.log(error);
        // handle error
        alert(error);
      });
  }, [id]);

  function handleInputChange(event) {
    const { id, value, type } = event.target;
    setFormData((prevFormData) => {
      if (type === "number") {
        return { ...prevFormData, [id]: parseInt(value) };
      } else if (type === "file") {
        return { ...prevFormData, [id]: event.target.files[0] };
      } else {
        return { ...prevFormData, [id]: value };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formDataWithImage = new FormData();
    for (const key in formData) {
      if (formData[key] !== null && formData[key] !== "") {
        if (key === "event_image") {
          if (formData[key] instanceof File) {
            formDataWithImage.append(key, formData[key]);
          }
        } else {
          formDataWithImage.append(key, formData[key]);
        }
      }
    }

    fetch(`${API_BASE_URL}/events/${id}/`, {
      method: "PUT",
      body: formDataWithImage,
    })
      .then((response) => response.json())
      .then((data) => {
        // handle successful update
        alert("Event updated successfully!");
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
          <div className="row">
            <h1>Update Event</h1>
            <form
              className="p-5 rounded shadow bg-white"
              onSubmit={handleSubmit}
            >
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
              <button className="btn btn-primary px-5 mt-3" type="submit">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
