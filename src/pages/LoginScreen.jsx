import React from "react";
import FormInput from "../components/FormInput";
import Form from "../components/Form";
import NavBar from "../components/NavBar";

export default function LoginScreen() {
  return (
    <div className="bg-crowd">
      <NavBar />
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 class="text-center mb-4">Login</h1>
        <Form>
          <FormInput
            id="email"
            type={"email"}
            placeholder={"xyz@gmail.com"}
            title={"Email address"}
          />
          <FormInput
            id="password"
            type={"password"}
            placeholder={"Password"}
            title={"Password"}
          />
          <button type="submit" className="btn button-color w-100 mt-3">
            Sign in
          </button>
        </Form>
      </div>
    </div>
  );
}
