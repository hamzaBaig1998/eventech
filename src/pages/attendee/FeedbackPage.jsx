import React, { useState } from "react";
import { API_BASE_URL } from "../../constants";
import { useParams } from "react-router-dom";
import AttendeeSidebar from "../../components/AttendeeSidebar";

export default function FeedbackPage() {
  const { event_id } = useParams();
  const user_id = localStorage.getItem("user_id");
  const [event, setEvent] = useState("");
  const [attendee, setAttendee] = useState("");
  const [rating, setRating] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const feedbackData = {
      event: event_id,
      attendee: user_id,
      rating: rating,
      feedback_text: feedbackText,
    };
    fetch(`${API_BASE_URL}/events/${event_id}/feedbacks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if ("error" in data) {
          alert("Error: " + data.error);
        } else if ("message" in data) {
          alert("Message: " + data.message);
        } else {
          const msg = JSON.stringify(data);
          alert(msg);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container-fluid m-0 p-0">
      <div className="d-flex ">
        <AttendeeSidebar />
        <div className="container-fluid px-5">
          <div className="container-fluid m-0 p-0">
            <h1 className="display-4 text-center">Submit Feedback</h1>
            <form onSubmit={handleSubmit}>
              {/* <div className="form-group">
                <label htmlFor="event">Event:</label>
                <input
                  type="number"
                  className="form-control"
                  id="event"
                  value={event}
                  onChange={(event) => setEvent(event.target.value)}
                  required
                />
              </div> */}
              {/* <div className="form-group">
          <label htmlFor="attendee">Attendee:</label>
          <input
            type="number"
            className="form-control"
            id="attendee"
            value={attendee}
            onChange={(event) => setAttendee(event.target.value)}
            required
          />
        </div> */}
              <div className="form-group">
                <label htmlFor="rating">Rating:</label>
                <select
                  className="form-control"
                  id="rating"
                  value={rating}
                  onChange={(event) => setRating(event.target.value)}
                  required
                >
                  <option value="">Select rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="feedbackText">Feedback Text:</label>
                <textarea
                  className="form-control"
                  id="feedbackText"
                  rows="5"
                  value={feedbackText}
                  onChange={(event) => setFeedbackText(event.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
