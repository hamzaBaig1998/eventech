import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import { API_BASE_URL } from "../constants";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${API_BASE_URL}/admin-signin/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Login failed.");
        }
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("username", data.username);
        // Redirect the user to the dashboard page
        navigate("/admin");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="bg-crowd">
      <NavBar />
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 class="text-center mb-4">Login</h1>
        <Form onSubmit={handleSubmit}>
          <FormInput
            id="username"
            type={"text"}
            placeholder={"username"}
            title={"Username"}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <FormInput
            id="password"
            type={"password"}
            placeholder={"Password"}
            title={"Password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="btn button-color w-100 mt-3">
            Sign in
          </button>
        </Form>
      </div>
    </div>
  );
}
