import React from "react";
import { Form } from "../components";

export const Create = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>Add Details</h1>
      <div className="w-50 rounded bg-white border shadow p-4 ">
        <Form />
      </div>
    </div>
  );
};
