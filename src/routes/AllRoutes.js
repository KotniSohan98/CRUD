import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Create, ListUser, Detail, Update } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/list" element={<ListUser />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
};
