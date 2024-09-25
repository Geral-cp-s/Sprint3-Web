import React from 'react';
import { TeamInfoContainer, Logo, Bandeira } from './styledMahindra'; // Supondo que as estilizações estão no styles.js

function Team() {
  return (
    <TeamInfoContainer>
        <div>
            <h3>Equipe</h3><br />
            <div ><span>Pilotos reservas ------------------------ </span> <span >Jordan King, Kush Maini</span></div>
            <div ><span>Fabricante da equipe ------------------------------------- </span> <span >Mahindra</span></div>
            <div ><span>Carro de equipe ---------------------------- </span> <span >Mahindra M10Electro</span></div>
            <div><span>Chefe de equipe --------------------------------- </span> <span >Frederic Bertrand</span></div>
        </div>
    </TeamInfoContainer>
  );
}

export default Team;
