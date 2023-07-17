import React, { Children } from "react";

export default function Form({ children, onSubmit }) {
  return (
    <form className="p-5 rounded shadow bg-white" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
