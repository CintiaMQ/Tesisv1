import { useState } from "react";
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Registro from "./components/Registro";
import Inicio  from "./components/Inicio";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<Inicio />} />
          <Route path="/contactame" element={<Inicio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
