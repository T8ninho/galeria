import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Pages/Inicio";

export default function App() {
  return(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  )
}
