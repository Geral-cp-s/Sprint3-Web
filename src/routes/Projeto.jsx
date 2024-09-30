import styled from 'styled-components';
import {
  Container,
  Title,
  ProblemSection,
  SolutionSection,
  BenefitText,
  PainText,
  Description,
  FeedbackSection,
  FeedbackTextarea,
  FeedbackButton,
  CallToAction
} from '../components/styledProjeto';

const Projeto = () => {
  return (
    <Container>
      <Title id="h1prob">O PROBLEMA</Title>
      <ProblemSection className="problema">
        <p>A Fórmula E, uma categoria inovadora de automobilismo com carros elétricos, enfrenta desafios para se conectar emocionalmente com os fãs e atingir a mesma visibilidade que outras categorias, como a Fórmula 1. A falta de uma história rica e momentos icônicos dificulta a atração do público. Além disso, muitos fãs de automobilismo criticam a ausência do som dos motores a combustão e o interesse geral no automobilismo é menor em comparação com outros esportes.</p>
        <h2>Dores</h2>
        <PainText><strong>Baixa visibilidade:</strong> O público ainda não está suficientemente engajado.</PainText>
        <PainText><strong>Interação limitada:</strong> Falta de ferramentas interativas que mantenham o interesse do público.</PainText>
      </ProblemSection>
      <Title id="h1soluc">A SOLUÇÃO</Title>
      <SolutionSection className="solucao">
        <p>Uma solução tecnológica inovadora pode aumentar a interação e atrair novos públicos para a Fórmula E. Propomos desenvolver uma plataforma digital robusta que inclui:</p>
        <ol>
          <li><strong>Site responsivo:</strong> Informações detalhadas, alertas de eventos e, futuramente, transmissão ao vivo.</li>
          <li><strong>FUTURAMENTE - Sistema de Pontuação e Recompensas:</strong> Pontos que podem ser trocados por prêmios, ganhando-os pelo login diário e pela competição no <strong>Fantasy League</strong>.</li>
          <li>Sistema IoT para monitoramento do tempo de voltas.</li>
          <li><strong>FUTURAMENTE - Conteúdo:</strong> Vídeos de bastidores, entrevistas e a história da Fórmula E.</li>
        </ol>
        <h2>Benefícios</h2>
        <BenefitText><strong>Aumento da Base de Fãs:</strong> Atração de novos públicos através de uma experiência digital envolvente.</BenefitText>
        <BenefitText><strong>Melhor Engajamento:</strong> Interações contínuas que mantêm os fãs engajados.</BenefitText>
        <BenefitText><strong>Maior Visibilidade:</strong> Ampliação da presença nas mídias sociais e plataformas digitais.</BenefitText>
        <p id="solu-final">Com essa solução, a Fórmula E pode se posicionar como líder em inovação e sustentabilidade, conquistando uma base de fãs leal e diversificada.</p>
      </SolutionSection>

      {/* Descrição do Protótipo */}
<Title>Descrição do Protótipo</Title>
<Description style={{ marginBottom: '30px' }}>
  Este projeto implementa um sistema de captura de tempos de volta em uma corrida, utilizando um ESP32, um sensor PIR para detecção de movimento, e MQTT para a comunicação de dados. Ele permite registrar, armazenar e visualizar estatísticas detalhadas de voltas em tempo real.
</Description>

{/* Seção para Feedback */}
<Title>Seu Feedback é Importante</Title>
<FeedbackSection style={{ marginBottom: '40px' }}>
  <Description style={{ marginBottom: '15px' }}>
    Queremos ouvir você! Compartilhe suas ideias e sugestões sobre como podemos melhorar a plataforma e a experiência da Fórmula E.
  </Description>
  <form>
    <FeedbackTextarea placeholder="Deixe seu feedback aqui..." rows="4" />
    <FeedbackButton type="submit">Enviar Feedback</FeedbackButton>
  </form>
</FeedbackSection>

{/* Chamada para Ação */}
<CallToAction style={{ marginTop: '50px' }}>
  Junte-se a nós na jornada para tornar a Fórmula E mais acessível e emocionante! Inscreva-se para atualizações e fique por dentro das novidades.
</CallToAction>

    </Container>
  );
};

export default Projeto;
