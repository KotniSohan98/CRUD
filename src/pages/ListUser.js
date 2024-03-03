import React, { useEffect, useState } from "react";
import { ButtonCustomised, UserList } from "../components";
import axios from "axios";
import { Link } from "react-router-dom";

export const ListUser = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      // .get("http://localhost:3001/users")
      .get("https://crud-api-92aj.onrender.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    // console.log("Delete option" + id);
    const confirm = window.confirm("Would You like to delete");
    if (confirm) {
      axios
        // .delete("http://localhost:3001/users/" + id)
        .delete("https://crud-api-92aj.onrender.com/users/" + id)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/create">
            <ButtonCustomised name="ADD +" />
          </Link>
        </div>
        <UserList data={data} handleDelete={handleDelete} />
      </div>
    </div>
  );
};
