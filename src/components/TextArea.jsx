import React from "react";

export default function TextArea({ id, onChange }) {
  return (
    <div class="form-group">
      <label htmlFor={id}>Message</label>
      <textarea
        onChange={onChange}
        className="form-control"
        id={id}
        rows="5"
        placeholder="Enter your message"
      ></textarea>
    </div>
  );
}
