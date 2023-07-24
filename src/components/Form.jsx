import React from "react";

export default function Form({ children, onSubmit }) {
  return (
    <form
      className="mt-3 p-5 rounded shadow bg-white"
      onSubmit={onSubmit}
      style={{ width: "450px" }}
    >
      {children}
    </form>
  );
}
