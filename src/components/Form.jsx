import React, { Children } from "react";

export default function Form({ children }) {
  return <form className="p-5 rounded shadow bg-white">{children}</form>;
}
