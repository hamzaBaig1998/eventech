import React from "react";

export default function PackagesComponent() {
  return (
    <section id="explore">
      <div class="container text-center mt-5 p-3">
        <h3 class="text-uppercase">
          We don't just manage events, we create unforgettable experiences
        </h3>
        <div class="row m-2">
          <div class="col-md-6 p-3">
            <div class="card shadow">
              <img
                src="assets/images/types/corporate.jpg"
                alt=""
                class="card-img-top"
              />
              <div class="card-body">
                <h2 class="card-title text-primary text-uppercase">
                  Corporate
                </h2>
                <p class="card-text">
                  With our interactive features you can have real-time analysis
                  of your events.
                </p>
                <a href="#" class="btn btn-lg btn-outline-primary">
                  Create Event
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 p-3">
            <div class="card shadow">
              <img
                src="assets/images/types/academic.jpg"
                alt=""
                class="card-img-top"
              />
              <div class="card-body">
                <h2 class="card-title text-primary text-uppercase">Academic</h2>
                <p class="card-text">
                  Have the freedom to add quizzes, polls, and feedbacks to make
                  your workshops effective.
                </p>
                <a href="#" class="btn btn-lg btn-outline-primary">
                  Create Event
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
