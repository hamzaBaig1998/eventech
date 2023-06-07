import React from "react";

export default function FormInput({ id, type, title, placeholder }) {
  return (
    <div class="mb-3">
      <label for={id} class="form-label">
        {title}
      </label>
      <input
        type={type}
        class="form-control"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
