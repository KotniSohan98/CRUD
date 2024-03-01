import React from "react";

export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        // backgroundColor: "red",
      }}
    >
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">CRUD Operation</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Welcome to CRUD Operation!
          </h6>
          <p className="card-text">
            We can create, read, update, and delete data of users in this app.
          </p>
        </div>
      </div>
    </div>
  );
};
