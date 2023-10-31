import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import EventsType from "./Pages/EventTypes/EventsType";
import EventsPage from "./Pages/EventsPage/EventsPage";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<HomePage/>}/>
        <Route path="EventsType" element={<EventsType/>}/>
        <Route path="EventsPage" element={<EventsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
