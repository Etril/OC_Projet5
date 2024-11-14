import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import Home from "./pages/Home/Home";
import APropos from "./pages/A-propos/A-propos";
import FicheLogement from "./pages/Fiche-Logement/Fiche-logement";
import Erreur from "./pages/Erreur/Erreur";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:logement" element={<FicheLogement />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/about" element={<APropos />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
