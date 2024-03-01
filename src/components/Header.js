import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          CRUD
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link active" to="/create">
              Create
            </Link>
            <Link className="nav-item nav-link" to="/list">
              List
            </Link>
            {/* <Link className="nav-item nav-link" to="/detail">
              Detail
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
};
