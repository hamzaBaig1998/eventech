import React from "react";

export default function ShowCaseComponent() {
  return (
    <section
      id="showcase"
      class="d-flex justify-content-center align-items-center"
    >
      <div id="overlay"></div>
      <div id="header" class="container text-white text-center">
        <h3 class="display-5 mb-0">EVENT MANAGEMENT</h3>
        <h1 class="display-1">EVENTECH</h1>
        <p class="lead d-none d-md-block">
          Streamline your events with ease using our powerful and user-friendly
          event management app.
        </p>
        <button id="book" class="btn btn-lg btn-primary px-5">
          JOIN NOW
        </button>
      </div>
    </section>
  );
}
