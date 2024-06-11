import React from "react";
import "./CardVoos.css";
import CardVoos from "./CardVoos";
import CardDisney from "./CardDisney"
import DisneyPagina from "./DisneyPagina";
import GaleriaFotos from "./GaleriaFotos"
import TicketCard from '../Voos/CardsIngressos';
import "../Voos/index.css"
import TicketSelection from '../Voos/SelecaoIngressos'


const Voos = () => {
  return (
    <>
      <center>
        <p className="pvoos">
          <b>Alguns pacotes com Voos populares!</b>
        </p>
      </center>

      <CardVoos />
      
      <br/>
      <CardDisney/>
      < GaleriaFotos />
     <TicketSelection/>
      <div className="App">
            <TicketCard 
                title="Ingresso ao evento de Halloween: Mickey's Not so..."
                date="Ter 13 Ago 2024"
                validity="Ter 13 Ago 2024"
                adultPrice="732"
                childPrice="671"
                selected
            />
            <TicketCard 
                title="Ingresso de 4 dias"
                date="A partir da data que você escolher o seu ingresso, terá 7 dias para usá-lo completamente."
                validity=""
                adultPrice="2.702"
                childPrice="2.599"
            />
            <TicketCard 
                title="Ingresso de 5 dias"
                date="A partir da data que você escolher o seu ingresso, terá 8 dias para usá-lo completamente."
                validity=""
                adultPrice="2.850"
                childPrice="2.740"
            />
        </div>
      
      <DisneyPagina />
    
    </>
  );
};

export default Voos;
