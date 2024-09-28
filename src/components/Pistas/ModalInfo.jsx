import React from "react";
import { EventDetails } from "./styledPistas";

const ModalInfo = ({ data }) => {
    return (
        <EventDetails>
            <h2>Detalhes do Evento</h2>
            <img src={data.img} alt={data.circuit} />
            <p className="legenda">{data.circuit}</p><br />
            <p className="pmodal">ROUND: {data.round}</p>
            <p className="pmodal">{data.description}</p>
            <p className="pmodal">{data.extension}</p>
            <p className="pmodal">{data.attackMode}</p>
            <p className="pmodal"><strong>VENCEDOR ROUND {data.round}:</strong></p>
            <p className="pmodal">{data.winner}</p>
        </EventDetails>
    );
};

export default ModalInfo;
