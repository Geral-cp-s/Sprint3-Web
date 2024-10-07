import { useState } from 'react';
import styled from 'styled-components';

const SideBar = () => {
  // Estados para controlar abertura dos dropdowns
  const [produtosOpen, setProdutosOpen] = useState(false);
  const [equipesOpen, setEquipesOpen] = useState(false);

  return (
    <SidebarContainer>
      {/* Dropdown para Produtos Oficiais */}
      <Dropdown>
        <DropdownHeader onClick={() => setProdutosOpen(!produtosOpen)}>
          Produtos Oficiais {produtosOpen ? '▲' : '▼'}
        </DropdownHeader>
        {produtosOpen && (
          <DropdownList>
            <li><a href="#">Camisetas</a></li>
            <li><a href="#">Casacos e Jaquetas</a></li>
            <li><a href="#">Bonés</a></li>
            <li><a href="#">Acessórios</a></li>
            <li><a href="#">Todos os produtos</a></li>
          </DropdownList>
        )}
      </Dropdown>

      {/* Dropdown para Equipes */}
      <Dropdown>
        <DropdownHeader onClick={() => setEquipesOpen(!equipesOpen)}>
          Equipes {equipesOpen ? '▲' : '▼'}
        </DropdownHeader>
        {equipesOpen && (
          <DropdownList>
            <li><a href="#">Mahindra</a></li>
            <li><a href="#">Tag Heuer Porsche</a></li>
            <li><a href="#">Neom McLaren</a></li>
            <li><a href="#">ABT Cupra</a></li>
            <li><a href="#">Andretti</a></li>
            <li><a href="#">DS Penske</a></li>
            <li><a href="#">Envision Racing</a></li>
            <li><a href="#">ERT Formula e</a></li>
            <li><a href="#">Jaguar TCS Racing</a></li>
            <li><a href="#">Maserati MSG Racing</a></li>
            <li><a href="#">Nissan</a></li>
          </DropdownList>
        )}
      </Dropdown>

      <OffersTitle><a href="#">Ofertas</a></OffersTitle> {/* Estiliza o título "Ofertas" */}
    </SidebarContainer>
  );
};

export default SideBar;

const SidebarContainer = styled.aside`
  width: 400px; /* Aumentar a largura da sidebar */
  background-color: #e0e0e0;
  padding: 20px;
  font-size: 16px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Sombra para profundidade */

  h3 {
    font-size: 18px;
    margin-top: 20px;
    color: #333; /* Cor do título */
  }
`;

const Dropdown = styled.div`
  margin-bottom: 20px;
`;

const DropdownHeader = styled.div`
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5; /* Cor de fundo do header do dropdown */
  color: #333; /* Cor do texto */
  padding: 10px; /* Padding para o header */
  border-radius: 5px; /* Arredondamento dos cantos */
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0; /* Cor ao passar o mouse */
  }
`;

const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;

  li {
    margin-bottom: 8px;
    color: white;
    background-color: #4169E1;
    cursor: pointer;
    padding: 5px; /* Padding para as opções da lista */
    border-radius: 4px; /* Arredondamento dos cantos */

    &:hover {
      background-color: #5A8EEB; /* Cor ao passar o mouse */
    }
  }
`;

const OffersTitle = styled.h3`
  font-size: 18px; /* Tamanho da fonte */
  margin-top: 20px; /* Espaço acima */
  color: #333; /* Cor do texto */
  cursor: pointer; /* Muda o cursor para pointer */
  padding: 10px; /* Adiciona padding */
  background-color: #f5f5f5; /* Cor de fundo */
  border-radius: 5px; /* Arredondamento dos cantos */
  transition: background-color 0.3s; /* Transição suave para a cor de fundo */

  &:hover {
    background-color: #e0e0e0; /* Cor ao passar o mouse */
  }
`;

