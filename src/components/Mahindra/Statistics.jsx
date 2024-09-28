import React, { useState, useEffect } from 'react';
import { StatisticsContainer, StatisticsHeading, StatsGrid, StatBox } from './styledMahindra'; 

function Statistics() {
  const [contador1, setContador1] = useState(0);

  useEffect(() => {
    let valor1 = 0;
    const tempo1 = setInterval(() => {
      valor1 += 1;
      setContador1(valor1);

      if (valor1 === 11) {
        clearInterval(tempo1);
      }
    }, 500);

    return () => clearInterval(tempo1);
  }, []);

  return (
    <StatisticsContainer>
      <StatisticsHeading>Estatísticas da temporada</StatisticsHeading>
      <StatsGrid>
        <StatBox>
          <span>Classificação: </span>
          <span id="contador1">+{contador1}</span>
        </StatBox>
        <StatBox>
          <span>Vitórias: </span>
          <span>0</span>
        </StatBox>
        <StatBox>
          <span>Pódios: </span>
          <span>0</span>
        </StatBox>
      </StatsGrid>
    </StatisticsContainer>
  );
}

export default Statistics;
