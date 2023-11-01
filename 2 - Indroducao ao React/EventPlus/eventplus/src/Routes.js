import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import EventsType from "./Pages/EventTypes/EventsType";
import EventsPage from "./Pages/EventsPage/EventsPage";
import Tests from "./Pages/Tests/Tests";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="EventsType" element={<EventsType />} />
        <Route path="EventsPage" element={<EventsPage />} />
        <Route path="TestPage" element={<Tests/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Rotas;
