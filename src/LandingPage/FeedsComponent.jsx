import React from "react";

export default function FeedsComponent() {
  return (
    <section id="feeds">
      <div class="container text-center">
        <h2 class="pt-5">PRESENTING THE BEST EVENT EXPERIENCE EVER</h2>
        <div class="rounded p-3  row">
          <div class="col-md-4 p-2">
            <div className="card bg-white rounded shadow m-1 p-3 h-100">
              <img
                src="assets/images/feeds/undraw_Credit_card_re_blml.png"
                alt="Card Payment"
                class="img-fluid d-none d-md-inline"
                id="feeds-image"
              />
              <h3 class="text-center text-md-left">Payment Through Card</h3>
              <p class="lead text-left text-md-left">
                We make event registration easy with our secure payment
                processing system. We accept all major credit and debit cards,
                so you can quickly and securely pay for your event registration
                without any hassle.
              </p>
            </div>
          </div>
          <div class="col-md-4 p-2">
            <div className="card bg-white rounded shadow m-1 p-3 h-100">
              <img
                src="assets/images/feeds/undraw_Around_the_world_re_n353.png"
                alt="Card Payment"
                class="img-fluid d-none d-md-inline"
                id="feeds-image"
              />
              <h3 class="text-center text-md-left">Countless Events Await!</h3>
              <p class="lead text-left text-md-left">
                Discover a world of endless possibilities with our event
                management system, featuring a vast selection of events to suit
                every interest and occasion. From music festivals to business
                conferences, we've got you covered.
              </p>
            </div>
          </div>
          <div class="col-md-4 p-2">
            <div className="card bg-white rounded shadow m-1 p-3 h-100">
              <img
                src="assets/images/feeds/undraw_Mobile_pay_re_sjb8.png"
                alt="Card Payment"
                class="img-fluid d-none d-md-inline"
                id="feeds-image"
              />
              <h3 class="text-center text-md-left">Interactive Features</h3>
              <p class="lead text-left text-md-left">
                Experience events like never before with our interactive event
                management system. Engage with speakers and presenters,
                participate in live polling, and provide real-time feedback. Our
                app offers a unique and immersive event experience that sets us
                apart from the competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
