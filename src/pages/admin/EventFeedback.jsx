import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../constants";
import Sidebar from "../../components/sidebar";
import { useParams } from "react-router-dom";

export default function EventFeedback() {
  const { user_id } = useParams();
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/events/${user_id}/feedbacks/`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbacks(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="container-fluid m-0 p-0">
      <div className="d-flex ">
        <Sidebar />
        <div className="container-fluid px-5">
          <h1 className="display-4 text-center">
            Event Detail Page For: {feedbacks ? feedbacks.event_name : ""}
          </h1>
          <div className="d-flex  justify-content-center align-items-center">
            {feedbacks &&
            feedbacks.feedbacks &&
            feedbacks.feedbacks.length > 0 ? (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Attendee ID</th>
                    <th>Rating</th>
                    <th>Feedback Text</th>
                  </tr>
                </thead>
                <tbody>
                  {feedbacks.feedbacks.map((feedback) => (
                    <tr key={feedback.id}>
                      <td>{feedback.attendee_name}</td>
                      <td>{feedback.rating}</td>
                      <td>{feedback.feedback_text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No feedbacks found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
