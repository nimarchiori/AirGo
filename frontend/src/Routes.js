import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Cadastro from "./Pages/Cadastro";
import TabelaUsuarios from "./Pages/ListaUsuarios";
<<<<<<< HEAD
import Login from "./Pages/Login"
=======
import Voos from "./Pages/Voos";


>>>>>>> d49d2d9e7faff1fbb905a0180447aec43a11576c
const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listaUsuarios" element={<TabelaUsuarios />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
=======
        <Route path="/Voos" element={<Voos/>} />
>>>>>>> d49d2d9e7faff1fbb905a0180447aec43a11576c
      </Routes>
    </>
  );
};

export default Rotas;
