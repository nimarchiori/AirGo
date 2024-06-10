import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/input.css";

//Importar complementos aqui
import Rotas from "./Routes";

//Importar componentes aqui
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

const App = () => {
  return (
    <>
      
    <ChakraBaseProvider theme={theme}>
      <Router>
        <NavBar />
        <Rotas />
        <Footer />
      </Router>
    </ChakraBaseProvider>
    </>
  );
};

export default App;
