import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Cadastro from "./Pages/Cadastro";
import Usuarios from "./Pages/Usuarios";
import Login from "./Pages/Login";
import Voos from "./Pages/Voos";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listaUsuarios" element={<Usuarios />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Voos" element={<Voos />} />
      </Routes>
    </>
  );
};

export default Rotas;
