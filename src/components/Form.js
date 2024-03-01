import React, { useEffect, useState } from "react";
import { ButtonCustomised } from "./ButtonCustomised";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get("http://localhost:3001/users/" + id)
        .then((res) => setValues(res.data))
        .catch((err) => console.log(err));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted");
    // console.log(values);
    axios
      .post("http://localhost:3001/users", values)
      .then((res) => {
        console.log(res.data);
        navigate("/list");
      })
      .catch((err) => console.log(err));
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log("Submitted");
    // console.log(values);
    console.log("HandleUpdate");
    axios
      .put("http://localhost:3001/users/" + id, values)
      .then((res) => {
        console.log(res.data);
        navigate("/list");
      })
      .catch((err) => console.log(err));
  };
  // console.log(values);
  return (
    <form onSubmit={id ? handleUpdate : handleSubmit}>
      <div className="mb-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter Name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Enter Email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          name="phone"
          className="form-control"
          placeholder="Enter Phone"
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
        />
      </div>
      <div className="d-flex justify-content-between">
        {id ? (
          <ButtonCustomised name="UPDATE" btn_type="submit" />
        ) : (
          <ButtonCustomised name="Submit" btn_type="submit" />
        )}
        <Link to="/">
          <ButtonCustomised name="Back" color="success" />
        </Link>
      </div>
    </form>
  );
};
