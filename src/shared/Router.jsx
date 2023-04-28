import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route elemet={<Main />} />
        <Route elemet={<Add />} />
        <Route elemet={<TodoList />} />
        <Route elemet={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
