import styled from 'styled-components';

const CardBack = styled.main`
  width: 150px;
  height: 150px;
  background: #8f1010;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  /* Texto "Fórmula E" */
  &::after {
    content: 'Fórmula E';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-25deg);
    color: #ffffff;
    font-size: 1.5em;
    font-weight: bold;
    opacity: 0.7;
  }
`;

const MemoriaCard = () => {
  return <CardBack />;
};

export default MemoriaCard;
