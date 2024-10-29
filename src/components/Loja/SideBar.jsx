import { useState } from 'react';
import styled from 'styled-components';

const SideBar = () => {
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
          Modalidades {equipesOpen ? '▲' : '▼'}
        </DropdownHeader>
        {equipesOpen && (
          <DropdownList>
            <li><a href="#">Fórmula E</a></li>
            <li><a href="#">Fórmula Truck</a></li>
            <li><a href="#">Stock Car</a></li>
            <li><a href="#">Fórmula Delta</a></li>
          </DropdownList>
        )}
      </Dropdown>

      <OffersTitle><a href="#">Ofertas</a></OffersTitle>
    </SidebarContainer>
  );
};

export default SideBar;

const SidebarContainer = styled.aside`
  width: 100%; /* A largura é 100% em dispositivos pequenos */
  max-width: 400px; /* Limita a largura máxima */
  background-color: #e0e0e0;
  padding: 20px;
  font-size: 16px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%; /* Largura total em dispositivos pequenos */
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
  background-color: #f5f5f5;
  color: #333;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;

  li {
    margin-bottom: 8px;

    a {
      color: white;
      background-color: #4169E1;
      cursor: pointer;
      padding: 5px;
      border-radius: 4px;
      display: block;
      transition: background-color 0.3s;

      &:hover {
        background-color: #00c3ff;
      }
    }
  }
`;

const OffersTitle = styled.h3`
  font-size: 18px;
  margin-top: 20px;
  color: #333;
  cursor: pointer;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;
