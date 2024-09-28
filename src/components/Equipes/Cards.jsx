import React from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de ter o react-router-dom instalado
import {
  CardListContainer,
  CardContainer,
  DateSection,
  DetailsSection,
  TeamFlagSection,
  ImageSection
} from './styledEquipes';

// Importando as imagens
import abtCupraCar from '../../../public/img/abt-cupra/carro.png';
import abtCupraLogo from '../../../public/img/abt-cupra/logo.png';

import andrettiLogo from '../../../public/img/andretti/Logo-Andretti.webp';
import andrettiCar from '../../../public/img/andretti/carro.png';

import dsPenskeLogo from '../../../public/img/DS PENSKE/logo.png';
import dsPenskeCar from '../../../public/img/DS PENSKE/carro.png';

import envisionLogo from '../../../public/img/ENVISION RACING/logo.png';
import envisionCar from '../../../public/img/ENVISION RACING/carro.png';

import ertLogo from '../../../public/img/ERT FORMULA E TEAM/logo.jpg';
import ertCar from '../../../public/img/ERT FORMULA E TEAM/carro.png';

import jaguarLogo from '../../../public/img/JAGUAR TCS RACING/logo.png';
import jaguarCar from '../../../public/img/JAGUAR TCS RACING/carro.png';

import mahindraLogo from '../../../public/img/mahindra/logo-mahindra.png';
import mahindraCar from '../../../public/img/mahindra/carro.png';

import maseratiLogo from '../../../public/img/MASERATI MSG RACING/logo.jpg';
import maseratiCar from '../../../public/img/MASERATI MSG RACING/carro.png';

import mclarenLogo from '../../../public/img/NEOM MCLAREN FORMULA E TEAM/logo.png';
import mclarenCar from '../../../public/img/NEOM MCLAREN FORMULA E TEAM/carro.png';

import nissanLogo from '../../../public/img/NISSAN FORMULA E TEAM/logo.png';
import nissanCar from '../../../public/img/NISSAN FORMULA E TEAM/carro.png';

import porscheLogo from '../../../public/img/TAG HEUER PORSCHE FORMULA E TEAM/logo.png';
import porscheCar from '../../../public/img/TAG HEUER PORSCHE FORMULA E TEAM/carro.png';

// Componente Card
const Card = ({ victories, podiums, races, teamName, teamLogo, carImage, link }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <CardContainer>
        <DateSection>
          <div className="metric-item">
            <span className="metric-label">🏆 Vitórias</span>
            <span className="metric-value">{victories}</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">Pódios</span>
            <span className="metric-value">{podiums}</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">🏁 Corridas</span>
            <span className="metric-value">{races}</span>
          </div>
        </DateSection>
        <DetailsSection>
          <TeamFlagSection>
            <img src={teamLogo} alt={`${teamName} logo`} />
            <span>{teamName}</span>
          </TeamFlagSection>
        </DetailsSection>
        <ImageSection>
          <img src={carImage} alt={`Carro da equipe ${teamName}`} />
        </ImageSection>
      </CardContainer>
    </Link>
  );
};

// Componente que renderiza a lista de cards
const Cards = () => {
  const teamsData = [
    {
      victories: 14,
      podiums: 47,
      races: 111,
      teamName: 'ABT Cupra',
      teamLogo: abtCupraLogo,
      carImage: abtCupraCar,
      // link: '/equipes/abt-cupra' // Adicione a URL correspondente
    },
    {
      victories: 11,
      podiums: 37,
      races: 128,
      teamName: 'Andretti Formula E',
      teamLogo: andrettiLogo,
      carImage: andrettiCar,
      // link: '/equipes/andretti' // Adicione a URL correspondente
    },
    {
      victories: 3,
      podiums: 16,
      races: 128,
      teamName: 'DS Penske',
      teamLogo: dsPenskeLogo,
      carImage: dsPenskeCar,
      // link: '/equipes/ds-penske' // Adicione a URL correspondente
    },
    {
      victories: 16,
      podiums: 50,
      races: 128,
      teamName: 'Envision Racing',
      teamLogo: envisionLogo,
      carImage: envisionCar,
      // link: '/equipes/envision' // Adicione a URL correspondente
    },
    {
      victories: 2,
      podiums: 6,
      races: 128,
      teamName: 'ERT Formula E Team',
      teamLogo: ertLogo,
      carImage: ertCar,
      // link: '/equipes/ert' // Adicione a URL correspondente
    },
    {
      victories: 16,
      podiums: 43,
      races: 107,
      teamName: 'Jaguar TCS Racing',
      teamLogo: jaguarLogo,
      carImage: jaguarCar,
      // link: '/equipes/jaguar' // Adicione a URL correspondente
    },
    {
      victories: 5,
      podiums: 24,
      races: 127,
      teamName: 'Mahindra Racing',
      teamLogo: mahindraLogo,
      carImage: mahindraCar,
      link: '/equipes/mahindra' // Adicione a URL correspondente
    },
    {
      victories: 10,
      podiums: 27,
      races: 128,
      teamName: 'Maserati MSG Racing',
      teamLogo: maseratiLogo,
      carImage: maseratiCar,
      // link: '/equipes/maserati' // Adicione a URL correspondente
    },
    {
      victories: 8,
      podiums: 26,
      races: 83,
      teamName: 'NEOM McLaren Formula E Team',
      teamLogo: mclarenLogo,
      carImage: mclarenCar,
      // link: '/equipes/mclaren' // Adicione a URL correspondente
    },
    {
      victories: 18,
      podiums: 46,
      races: 128,
      teamName: 'Nissan Formula E Team',
      teamLogo: nissanLogo,
      carImage: nissanCar,
      // link: '/equipes/nissan' // Adicione a URL correspondente
    },
    {
      victories: 9,
      podiums: 18,
      races: 70,
      teamName: 'TAG Heuer Porsche Formula E Team',
      teamLogo: porscheLogo,
      carImage: porscheCar,
      // link: '/equipes/porsche' // Adicione a URL correspondente
    }
    // Outras equipes...
  ];

  return (
    <CardListContainer>
      {teamsData.map((team, index) => (
        <Card
          key={index}
          victories={team.victories}
          podiums={team.podiums}
          races={team.races}
          teamName={team.teamName}
          teamLogo={team.teamLogo}
          carImage={team.carImage}
          link={team.link} // Passando o link
        />
      ))}
    </CardListContainer>
  );
};

export default Cards;
