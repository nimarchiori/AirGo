import React, { useState } from 'react';
import '../Voos/SelecaoIngressos.css';

const TicketSelection = () => {
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);

    const handleAdultChange = (change) => {
        setAdultCount(prevCount => Math.max(0, prevCount + change));
    };

    const handleChildChange = (change) => {
        setChildCount(prevCount => Math.max(0, prevCount + change));
    };

    return (

        <center>
            <div className="ticket-selection">
            <h2>Escolha o seu ingresso</h2>
            <p>Insira o dia de visita para ver o preço final do seu ingresso.</p>
            <div className="date-input">
                <label>
                    <i className="fa fa-calendar"></i>
                    Primeiro dia da visita ao parque
                    <input type="date" />
                </label>
            </div>
            <div className="counter">
                <div className="counter-item">
                    <span>Adultos <small>(10 anos ou mais)</small></span>
                    <button onClick={() => handleAdultChange(-1)}>-</button>
                    <input type="text" value={adultCount} readOnly />
                    <button onClick={() => handleAdultChange(1)}>+</button>
                </div>
                <div className="counter-item">
                    <span>Crianças <small>(3 a 9 anos)</small></span>
                    <button onClick={() => handleChildChange(-1)}>-</button>
                    <input type="text" value={childCount} readOnly />
                    <button onClick={() => handleChildChange(1)}>+</button>
                </div>
            </div>
            <div className="info">
                <p><i className="fa fa-child"></i> Ingresso gratuito para crianças menores de 3 anos (a idade deve ser comprovada ao entrar no parque)</p>
                <p><i className="fa fa-times-circle"></i> Cancelamento gratuito até 90 dias depois da compra.</p>
            </div>
        </div>
        </center>
        
    );
}

export default TicketSelection;
