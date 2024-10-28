import styled from 'styled-components';
import videoSrc from '/video.mp4'; // Verifique se o caminho está correto
import { Link } from 'react-router-dom';


// Estilização da Seção que conterá o vídeo de fundo
const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  margin: 0;
  overflow: hidden;
`;

// Estilização do Vídeo para cobrir o fundo
const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cobre toda a área sem distorcer o vídeo */
  z-index: -1; /* Coloca o vídeo atrás do conteúdo */
  background-color: black; /* Adiciona uma cor de fundo como fallback */
`;

// Estilização do Texto
const Text = styled.h1`
  font-size: 3rem;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente para o texto */
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centraliza o texto */
  z-index: 1;
`;

// Nova seção da Loja com layout flexbox para texto à esquerda e imagem à direita
const LojaSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px; /* Reduzi o padding */
  background: var(--black-color-light);
  text-align: left;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  gap: 20px; /* Reduzi o gap entre o texto e a imagem */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Container de texto
const LojaTextContainer = styled.div`
  flex: 1;
  padding-right: 15px; /* Reduzi o espaçamento */

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

// Estilização do título da Loja
const LojaTitle = styled.h2`
  font-size: 2.5rem; /* Reduzi o tamanho do título */
  color: #fff;
  margin-bottom: 15px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`;

// Estilização do texto descritivo
const LojaText = styled.p`
  font-size: 1.1rem; /* Reduzi um pouco o tamanho do texto */
  color: #ddd;
  margin-bottom: 20px;
  max-width: 500px; /* Reduzi a largura máxima */
`;

// Estilização do botão da Loja
const LojaButton = styled.a`
  background-color: #0077ff;
  color: white;
  padding: 12px 30px; /* Reduzi o padding do botão */
  font-size: 1.3rem; /* Reduzi o tamanho da fonte */
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #00c3ff;
    transform: translateY(-5px);
    box-shadow: 0 8px 16px #00c3ff83;
  }

  .link{
    text-decoration: none;
    color: #fff;
  }


`;

// Estilização da imagem (agora menor)
const LojaImage = styled.img`
  flex: 0.6; /* Reduzi o tamanho relativo da imagem */
  max-width: 400px; /* Reduzi o tamanho máximo da imagem */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 15px;
  }
`;


// Estilização do Container dos Cards
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  z-index: 1;
`;

// Estilização de cada Card
const Card = styled.div`
  font-family: "Roboto", system-ui;
  width: 400px;
  max-width: 100%;
  padding: 30px;
  background-color: #f4f4f4;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

// Estilização da Imagem do Card
const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

// Estilização do Título do Card
const CardTitle = styled.h2`
  font-size: 26px;
  color: #d32f2f;
  font-weight: bold;
  text-align: center;
  line-height: 1.4;
  margin: 15px 0;
`;

// Estilização do Conteúdo do Card
const CardContent = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  margin: 15px 0;
`;

// Estilização do Link como Botão
const CardButton = styled.a`
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Componente Principal
export default function Index() {
  return (
    <div>
      <Section>
        {/* Vídeo de Fundo */}
        <BackgroundVideo autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
        </BackgroundVideo>

        {/* Texto Centralizado */}
        {/* <Text><a href="/loja">Acesse nossa loja</a></Text> */}
      </Section>

      {/* Seção da Loja */}
      <LojaSection>
        <LojaTextContainer>
          <LojaTitle>Explore a Nossa Loja</LojaTitle>
          <LojaText>
            Confira os melhores produtos sobre a melhor corrida elétrica do mundo e muito mais em nossa loja!
          </LojaText>
          <LojaButton><Link className='link' to="/loja">Visite nossa loja</Link></LojaButton>
        </LojaTextContainer>
        {/* Imagem da loja à direita */}
        <LojaImage src="/img/produtos/prod.webp" alt="Imagem ilustrativa da loja" />
      </LojaSection>

      <CardContainer>
        {/* CARD 1 */}
        <Card>
          <CardImage src="../../img/noticia/img1.webp" alt="Imagem do Card" />
          <CardTitle>Pascal Wehrlein, da Porsche, supera adversidades e conquista o Campeonato Mundial de Fórmula E em Londres</CardTitle>
          <CardContent>Wehrlein garantiu a vitória após uma temporada cheia de desafios, consolidando seu lugar entre os melhores da categoria elétrica.</CardContent>
          <CardButton href="https://www.fiaformulae.com/pt-br/news/504132" target="_blank" rel="noopener noreferrer">
            Saiba Mais
          </CardButton>
        </Card>
        {/* CARD 2 */}
        <Card>
          <CardImage src="../../../img/noticia/img2.webp" alt="Imagem do Card" />
          <CardTitle>A parceria juntará o piloto mais experiente da Fórmula E com o único novato até agora, destacando o compromisso da Lola em desenvolver novos talentos e tecnologias no automobilismo.</CardTitle>
          <CardContent>Lola Yamaha ABT completa a formação de pilotos estreantes com o novato Zane Maloney se juntando ao “Sr. Fórmula E” Lucas di Grassi.</CardContent>
          <CardButton href="https://www.fiaformulae.com/pt-br/news/509022" target="_blank" rel="noopener noreferrer">
            Saiba Mais
          </CardButton>
        </Card>
        {/* CARD 3 */}
        <Card>
          <CardImage src="../../../img/noticia/img3.webp" alt="Imagem do Card" />
          <CardTitle>Fórmula E definida para a Semana do Clima de Nova York</CardTitle>
          <CardContent>Líder em esporte global sustentável, a Fórmula E estará presente na Semana do Clima de Nova York, com a vice-presidente de Sustentabilidade, Julia Palle, programada para falar em diversos eventos.</CardContent>
          <CardButton href="https://www.fiaformulae.com/pt-br/news/508907" target="_blank" rel="noopener noreferrer">
            Saiba Mais
          </CardButton>
        </Card>
        {/* CARD 4 */}
        <Card>
          <CardImage src="../../../img/noticia/img4.webp" alt="Imagem do Card" />
          <CardTitle>Buemi e Frijns retornam com a Envision Racing para a 11ª temporada</CardTitle>
          <CardContent>A Envision Racing tem o prazer de confirmar uma escalação de pilotos inalterada para a Temporada 11 do Campeonato Mundial de Fórmula E da ABB FIA. Sébastien Buemi e Robin Frijns continuarão com a equipe para a Temporada 11 do Campeonato Mundial de Fórmula E da ABB FIA.</CardContent>
          <CardButton href="https://www.fiaformulae.com/pt-br/news/508413" target="_blank" rel="noopener noreferrer">
            Saiba Mais
          </CardButton>
        </Card>
        {/* CARD 5 */}
        <Card>
          <CardImage src="../../../img/noticia/img5.webp" alt="Imagem do Card" />
          <CardTitle>Fórmula E abre inscrições para o Fundo Better Futures da Temporada 11</CardTitle>
          <CardContent>A Fórmula E lançou hoje o processo de inscrição para seu principal programa de apoio beneficente, o Better Futures Fund, que fornecerá suporte direto a projetos de impacto local e causas em todos os locais de corrida na 11ª temporada.</CardContent>
          <CardButton href="https://www.fiaformulae.com/pt-br/news/508409" target="_blank" rel="noopener noreferrer">
            Saiba Mais
          </CardButton>
        </Card>
        {/* CARD 6 */}
        <Card>
          <CardImage src="../../../img/noticia/img6.webp" alt="Imagem do Card" />
          <CardTitle>Lucas di Grassi: “10 anos de trabalho duro e noites sem dormir”</CardTitle>
          <CardContent>Dez anos atrás, hoje: Lucas di Grassi venceu o primeiro E-Prix para a ABT em Pequim. Desde então, a Fórmula E cresceu de força em força.</CardContent>
          <CardButton href="https://www.fiaformulae.com/pt-br/news/508221" target="_blank" rel="noopener noreferrer">
            Saiba Mais
          </CardButton>
        </Card>
      </CardContainer>
    </div>
  );
}
