import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/input.css";

//Importar complementos aqui
import Rotas from "./Routes";

//Importar componentes aqui
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Rotas />
        <Footer />
      </Router>
    </>
  );
};

export default App;
