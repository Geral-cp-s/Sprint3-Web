import styled from 'styled-components';
import videoSrc from '../../../public/video.mp4'; // Verifique se o caminho está correto

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
        <Text><a href="/loja" target='_blank'>Acesse nossa loja</a></Text>
      </Section>
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
