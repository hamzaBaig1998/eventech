import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Form from "../../components/Form";
import FormInput from "../../components/FormInput";
import { API_BASE_URL } from "../../constants";
import { NavLink } from "react-router-dom";

export default function RegisterAttendeePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_BASE_URL}/attendee-signup/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(JSON.stringify(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-crowd">
      <NavBar />
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center mb-4">Register As Attendee</h1>
        <Form onSubmit={handleSubmit} style={{ width: "500px" }}>
          <FormInput
            id="username"
            type="text"
            name="username"
            placeholder="username"
            title="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <FormInput
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            title="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <FormInput
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            title="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <FormInput
            id="firstName"
            type="text"
            name="first_name"
            placeholder="First Name"
            title="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <FormInput
            id="lastName"
            type="text"
            name="last_name"
            placeholder="Last Name"
            title="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <FormInput
            id="phoneNumber"
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            title="Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <input
            type="submit"
            value="Sign in"
            className="btn button-color w-100 mt-3"
          />
          <NavLink to="/login-attendee" className={"nav-link"}>
            Already a user?
          </NavLink>
        </Form>
      </div>
    </div>
  );
}
