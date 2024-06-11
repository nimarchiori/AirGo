import React from 'react';
import '../Voos/CardsIngressos.css';

const TicketCard = ({ title, date, validity, adultPrice, childPrice, selected }) => {
    return (
        <div className={`ticket-card ${selected ? 'selected' : ''}`}>
            <h2>{title}</h2>
            <p><i className="fa fa-calendar"></i> Data da visita: {date}</p>
            <p><i className="fa fa-calendar-check"></i> Ingresso válido até: {validity}</p>
            <a href="#details">Ver mais detalhes</a>
            <div className="prices">
                <p>Preço por adulto a partir de <strong>R$ {adultPrice}</strong></p>
                <p>Preço por criança a partir de <strong>R$ {childPrice}</strong></p>
            </div>
            <button className="select-button">{selected ? 'Ingresso selecionado' : 'Escolher este ingresso'}</button>
        </div>
    );
}

export default TicketCard;
