import React from 'react';
import { TeamInfoContainer, Logo, Bandeira } from './styledMahindra'; // Supondo que as estilizações estão no styles.js

function Sede() {
  return (
    <TeamInfoContainer>
      <Logo src="/img/mahindra/mahindra.png" alt="Mahindra Logo" />
      <p>
        <Bandeira src="/img/bandeira/londres.png" alt="Banbury, REINO UNIDO" />
        Banbury, REINO UNIDO
      </p>
    </TeamInfoContainer>
  );
}

export default Sede;
