import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Add from "../pages/Add";
import TodoList from "../pages/TodoList";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";
import Header from "../components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Add' element={<Add />} />
        <Route path='/TodoList' element={<TodoList />} />
        <Route path='/Detail/:id' element={<Detail />} />
        <Route path='/Edit/:id' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
