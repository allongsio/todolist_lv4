import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Add from "../pages/Add";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Add" element={<Add />} />
        {/* <Route elemet={<TodoList />} /> */}
        {/* <Route elemet={<Detail />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
