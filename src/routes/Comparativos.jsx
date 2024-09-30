// src/components/Comparativo.js
import React from 'react';
import {
  Container,
  Title,
  Paragraph,
  Section,
  TeamDetails,
  Detail,
  Subtitle,
  Subheading,
  Formula1Text,
  FormulaEText,
  ConclusionSection,
} from '../components/styledComparativos'; // Importando os estilos

const Comparativo = () => {
  return (
    <Container>
      <Title id="h1soluc">COMPARATIVOS</Title>
      <Paragraph>
        A <FormulaEText>Fórmula E</FormulaEText> e a <Formula1Text>Fórmula 1</Formula1Text> são duas das principais categorias de automobilismo no mundo, cada uma com suas próprias características, objetivos e públicos. Abaixo está um comparativo detalhado entre as duas:
      </Paragraph>
      
      {/* Seções para Comparativo */}
      <Section className="team-info">
        <TeamDetails>
          <Subtitle>1. TECNOLOGIA</Subtitle>
          <Detail>
            <FormulaEText>Fórmula E</FormulaEText>
            <Formula1Text>Fórmula 1</Formula1Text>
          </Detail>
          
          <Subheading>Motorização:</Subheading>
          <Detail>
            <FormulaEText>Carros elétricos.</FormulaEText>
            <Formula1Text>Motores híbridos</Formula1Text>
          </Detail>
          <Detail>
            <FormulaEText>Bateria</FormulaEText>
            <Formula1Text>Combustível</Formula1Text>
          </Detail>

          <Subheading>Velocidade:</Subheading>
          <Detail>
            <FormulaEText>Velocidade máxima em torno de 280 km/h.</FormulaEText>
            <Formula1Text>Velocidade máxima podendo exceder 360 km/h.</Formula1Text>
          </Detail>

          <Subheading>Autonomia:</Subheading>
          <Detail>
            <FormulaEText>Aproximadamente 45 minutos a 1 hora</FormulaEText>
            <Formula1Text>Duram cerca de 1,5 a 2 horas.</Formula1Text>
          </Detail>
        </TeamDetails>
      </Section>

      <Section className="team-info">
        <TeamDetails>
          <Subtitle>2. CIRCUITOS</Subtitle>
          <Detail>
            <FormulaEText>Fórmula E</FormulaEText>
            <Formula1Text>Fórmula 1</Formula1Text>
          </Detail>
          
          <Subheading>Circuitos:</Subheading>
          <Detail>
            <FormulaEText>Principalmente em circuitos urbanos</FormulaEText>
            <Formula1Text>Variedade de circuitos, incluindo tradicionais e novos</Formula1Text>
          </Detail>

          <Subheading>Localizações:</Subheading>
          <Detail>
            <FormulaEText>Pistas em locais como São Paulo, Londres...</FormulaEText>
            <Formula1Text>Mistura de circuitos de rua e permanentes</Formula1Text>
          </Detail>
        </TeamDetails>
      </Section>

      <Section className="team-info">
        <TeamDetails>
          <Subtitle>3. SUSTENTABILIDADE</Subtitle>
          <Detail>
            <FormulaEText>Fórmula E</FormulaEText>
            <Formula1Text>Fórmula 1</Formula1Text>
          </Detail>
          
          <Subheading>Sustentabilidade:</Subheading>
          <Detail>
            <FormulaEText>Foco em promover a sustentabilidade e a tecnologia de veículos elétricos.</FormulaEText>
            <Formula1Text>Esforços para se tornar mais sustentável, com metas para ser neutra em carbono até 2030.</Formula1Text>
          </Detail>

          <Subheading>Impacto Ambiental:</Subheading>
          <Detail>
            <FormulaEText>Emissões de carbono muito menores devido ao carro elétrico.</FormulaEText>
            <Formula1Text>Historicamente maior, embora os sistemas híbridos tenham reduzido esse impacto.</Formula1Text>
          </Detail>
        </TeamDetails>
      </Section>

      <Section className="team-info">
        <TeamDetails>
          <Subtitle>4. REGULAMENTAÇÕES</Subtitle>
          <Detail>
            <FormulaEText>Fórmula E</FormulaEText>
            <Formula1Text>Fórmula 1</Formula1Text>
          </Detail>
          
          <Subheading>Regulamentações:</Subheading>
          <Detail>
            <FormulaEText>Regras rígidas, com limitação de desenvolvimento em aspectos dos carros.</FormulaEText>
            <Formula1Text>Regulamentações: Regras complexas com espaço para inovações, mas com limites de desenvolvimento para controlar custos.</Formula1Text>
          </Detail>

          <Subheading>Formato:</Subheading>
          <Detail>
            <FormulaEText>Uso de "Attack Mode" e "Fanboost" para adicionar estratégias e engajamento dos fãs.</FormulaEText>
            <Formula1Text>Formato: Qualificação e corrida principal com foco na estratégia de pneus, combustível e gerenciamento de energia.</Formula1Text>
          </Detail>
        </TeamDetails>
      </Section>

      <Section className="team-info">
        <TeamDetails>
          <Subtitle>5. POPULARIDADE</Subtitle>
          <Detail>
            <FormulaEText>Fórmula E</FormulaEText>
            <Formula1Text>Fórmula 1</Formula1Text>
          </Detail>
          
          <Subheading>Audiência:</Subheading>
          <Detail>
            <FormulaEText>Crescente, especialmente entre um público mais jovem interessado em tecnologia e sustentabilidade.</FormulaEText>
            <Formula1Text>Global e massiva, com um grande número de fãs leais e uma longa história.</Formula1Text>
          </Detail>
          
          <Subheading>Popularidade:</Subheading>
          <Detail>
            <FormulaEText>Ainda em crescimento, mas com uma base de fãs dedicada.</FormulaEText>
            <Formula1Text>Uma das categorias mais populares do automobilismo, com ampla cobertura midiática.</Formula1Text>
          </Detail>
        </TeamDetails>
      </Section>

      <Section className="team-info">
        <TeamDetails>
          <Subtitle>6. ECONOMIA</Subtitle>
          <Detail>
            <FormulaEText>Fórmula E</FormulaEText>
            <Formula1Text>Fórmula 1</Formula1Text>
          </Detail>
          
          <Subheading>Custo:</Subheading>
          <Detail>
            <FormulaEText>Menor custo de operação e desenvolvimento em comparação com a Fórmula 1.</FormulaEText>
            <Formula1Text>Muito mais alto, com orçamentos das equipes principais chegando a centenas de milhões de dólares.</Formula1Text>
          </Detail>
          
          <Subheading>Popularidade:</Subheading>
          <Detail>
            <FormulaEText>Atrai investimentos de empresas de tecnologia e fabricantes de automóveis focados em eletrificação.</FormulaEText>
            <Formula1Text>Envolve grandes montadoras e patrocinadores globais.</Formula1Text>
          </Detail>
        </TeamDetails>
      </Section>

      <ConclusionSection className="solucao">
        <Title id="h1comp">Conclusão</Title>
        <Paragraph>
          A <FormulaEText>Fórmula E</FormulaEText> é sinônimo de velocidade extrema e tradição, enquanto a <Formula1Text>Fórmula 1</Formula1Text> representa o futuro da mobilidade sustentável e inovações em tecnologia elétrica.
        </Paragraph>
      </ConclusionSection>
    </Container>
  );
};

export default Comparativo;
