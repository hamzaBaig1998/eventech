import React from "react";

export default function FormInput({
  id,
  type,
  title,
  value,
  placeholder,
  onChange,
}) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {title}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value && value}
      />
    </div>
  );
}
