import React from "react";

export default function EmailComponent() {
  return (
    <section id="newsletter" class="bg-dark">
      <div class="container text-white text-center py-5">
        <p class="lead">JOIN OUR NEWSLETTER FOR DEALS AND UPDATES AND OFFER</p>
        <div class="row justify-content-center">
          <div class="col-10 col-sm-8 col-md-6 col-lg-4">
            <form action="" class="form-inline">
              <div class="input-group">
                <input type="text" placeholder="Email" class="form-control" />
                <div class="input-group-append">
                  <button class="btn btn-primary">Join Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
