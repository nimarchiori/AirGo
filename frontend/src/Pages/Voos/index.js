import React from "react";
import "./CardVoos.css";
import CardVoos from "./CardVoos";
import { ImAirplane } from "react-icons/im";

const Voos = () => {
  return (
    <>
      <center>
        <h3>
          <b>VOOS COM ATÉ 50% DE DESCONTO</b>
        </h3>
      </center>

      <CardVoos />
    </>
  );
};

export default Voos;
