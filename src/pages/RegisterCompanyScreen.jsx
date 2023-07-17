import React from "react";
import FormInput from "../components/FormInput";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import { API_BASE_URL } from "../constants";

export default function RegisterCompanyScreen() {
  return (
    <div className="bg-crowd">
      <NavBar />
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 class="text-center mb-4">Register Company</h1>
        <Form>
          <FormInput
            id="company_name"
            type={"text"}
            placeholder={"Company Name"}
            title={"Company Name"}
          />
          <FormInput
            id="email"
            type={"email"}
            placeholder={"Email"}
            title={"Email"}
          />
          <FormInput
            id="location"
            type={"text"}
            placeholder={"Location"}
            title={"Company Location"}
          />
          <FormInput
            id="type_of_company"
            type={"text"}
            placeholder={"Example: Corporate"}
            title={"Type of Company"}
          />
          <button type="submit" className="btn button-color w-100 mt-3">
            Register
          </button>
        </Form>
      </div>
    </div>
  );
}
