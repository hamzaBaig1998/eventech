import React from "react";

export default function TextArea() {
  return (
    <div class="form-group">
      <label for="messageInput">Message</label>
      <textarea
        class="form-control"
        id="messageInput"
        rows="5"
        placeholder="Enter your message"
      ></textarea>
    </div>
  );
}
