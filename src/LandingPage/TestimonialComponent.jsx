import React from "react";

export default function TestimonialComponent() {
  return (
    <section id="quotes">
      <div class="container text-center mt-4">
        <h3>WHAT OUR HAPPY CUSTOMERS ARE SAYING</h3>
        <div class="row">
          <div class="col-md-4 my-2">
            <i class="fas fa-quote-left fa-2x text-primary mb-3"></i>
            <blockquote class="blockquote">
              <p>
                I recently used this platform to register for a conference, and
                I was blown away by how easy and intuitive the process was. The
                app made it simple to navigate through the registration process,
                and I had no problems with payment. Highly recommend!
              </p>
              <footer class="blockquote-footer">Sarah Johnson</footer>
            </blockquote>
          </div>
          <div class="col-md-4 my-2">
            <i class="fas fa-quote-left fa-2x text-primary mb-3"></i>
            <blockquote class="blockquote">
              <p>
                I attended a music festival that was managed through this app,
                and I have to say, it was one of the best festival experiences
                I've had. The app's interactive features kept me engaged and
                entertained throughout the event, and the attendance tracking
                made it easy to keep track of my group. Looking forward to using
                this app for future events!
              </p>
              <footer class="blockquote-footer">Michael Lee</footer>
            </blockquote>
          </div>
          <div class="col-md-4 my-2">
            <i class="fas fa-quote-left fa-2x text-primary mb-3"></i>
            <blockquote class="blockquote">
              <p>
                I've been an event organizer for years, and I have to say, this
                app has made my job so much easier. The platform's user-friendly
                interface makes it simple to manage attendee registrations,
                track attendance, and collect feedback. Plus, the real-time
                polling feature has been a hit with our attendees. Highly
                recommend for any event organizer!
              </p>
              <footer class="blockquote-footer">Emily Davis</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
