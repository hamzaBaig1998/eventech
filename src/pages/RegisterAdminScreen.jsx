import React from "react";
import FormInput from "../components/FormInput";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import { API_BASE_URL } from "../constants";

export default function RegisterAdminScreen() {
  return (
    <div className="bg-crowd">
      <NavBar />
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 class="text-center mb-4">Register Admin</h1>
        <Form>
          <FormInput
            id="username"
            type={"text"}
            placeholder={"Username"}
            title={"Username"}
          />
          <FormInput
            id="email"
            type={"email"}
            placeholder={"Email"}
            title={"Email"}
          />
          <FormInput
            id="password"
            type={"password"}
            placeholder={"password"}
            title={"Password"}
          />
          <FormInput
            id="confirm_password"
            type={"password"}
            placeholder={"password"}
            title={"Confirm Password"}
          />
          <button type="submit" className="btn button-color w-100 mt-3">
            Register
          </button>
        </Form>
      </div>
    </div>
  );
}
