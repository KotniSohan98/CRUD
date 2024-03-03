import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ButtonCustomised } from "../components";
import { Link } from "react-router-dom";

export const Detail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    axios
      // .get("http://localhost:3001/users/" + id)
      .get("https://crud-api-92aj.onrender.com/users/" + id)
      .then((res) => setData(res.data))
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Detail of User</h3>
        <div className="mb-2">
          <strong>Name:{data.name}</strong>
        </div>
        <div className="mb-2">
          <strong>Email:{data.email}</strong>
        </div>
        <div className="mb-2">
          <strong>Phone:{data.phone}</strong>
        </div>
        <div className="d-flex justify-content-between">
          <Link to={`/update/${id}`}>
            <ButtonCustomised name="EDIT" />
          </Link>
          <Link to="/">
            <ButtonCustomised name="BACK" color="success" />
          </Link>
        </div>
      </div>
    </div>
  );
};
