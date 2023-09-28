import React from "react";
import FilterTest1 from "./components/FilterTest1";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FilterTest1 />} />
      </Routes>
    </BrowserRouter>
  );
}
