import React from 'react';
import Sede from '../components/Mahindra/Sede';
import Car from '../components/Mahindra/Car';
import Statistics from '../components/Mahindra/Statistics';
import WhoIs from '../components/Mahindra/WhoIs';
import Mortara from '../components/Mahindra/Mortara;';
import DeVries from '../components/Mahindra/DeVries';
import Team from '../components/Mahindra/Team';
import { DriversContainer } from '../components/Mahindra/styledMahindra'; // Importando o estilo para o contêiner de pilotos

const Mahindra = () => {
  return (
    <div>
        <Sede />
        <WhoIs />
        <DriversContainer>
            <Mortara />
            <DeVries />
        </DriversContainer>
        <Car />
        <Team />
        <Statistics />
        
    </div>
  );
};

export default Mahindra;
