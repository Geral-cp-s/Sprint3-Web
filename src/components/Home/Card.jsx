import React from 'react';
import { CardContainer, CardTitle, CardContent, CardImage, CardButton } from './styledCard';

const Card = ({ title, content, imageUrl, link }) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt="Card Image" />
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      {/* Link envolvente para abrir em nova aba */}
      <a href={link} target="_blank"> {/* Removido o rel */}
        <CardButton>Leia mais</CardButton>
      </a>
    </CardContainer>
  );
};

export default Card;
