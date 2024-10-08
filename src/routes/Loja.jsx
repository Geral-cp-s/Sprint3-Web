import styled from 'styled-components';
import Header from '../components/Loja/Header';
import SideBar from '../components/Loja/SideBar';
import MainContent from '../components/Loja/Main';
;

function Loja() {
  return (
    <AppContainer>
      <Header />
      <Main>
        <SideBar />
        <MainContent />
      </Main>
    </AppContainer>
  );
}

export default Loja;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
`;
