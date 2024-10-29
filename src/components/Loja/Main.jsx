import { useState } from 'react';
import styled from 'styled-components';
import bannerImage from '../../../public/img/produtos/bones.jfif';

const MainContent = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const products = [
    { id: 1, img: '../../../img/produtos/bone.webp', name: 'Boné New Era Repreve 9FORTY', price: 'R$160,00' },
    { id: 2, img: '../../../img/produtos/mochila.jpg', name: 'Mochila Dobrável', price: 'R$250,00' },
    { id: 3, img: '../../../img/produtos/garrafa.webp', name: 'Garrafa de Água Gradiente', price: 'R$50,00' },
    { id: 4, img: '../../../img/produtos/camiseta.jpg', name: 'Camiseta Oficial Fórmula E', price: 'R$180,00' },
    { id: 5, img: '../../../img/produtos/jaqueta.jpg', name: 'Jaqueta Impermeável', price: 'R$400,00' },
    { id: 6, img: '../../../img/produtos/gymsack.jpg', name: 'Pull Bag Camuflada', price: 'R$60,00' },
    { id: 7, img: '../../../img/produtos/chaveiro.jpg', name: 'Chaveiro Oficial', price: 'R$30,00' },
    { id: 8, img: '../../../img/produtos/tokyo.jpg', name: 'Camiseta E-Prix de Tóquio', price: 'R$110,00' },
    { id: 9, img: '../../../img/produtos/moletbranco.jpg', name: 'Moletom Gradiente', price: 'R$230,00' }
  ];

  const itemsPerSlide = 3; // Ajuste conforme necessário
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  return (
    <ContentContainer>
      <Banner>
        <BannerContent>
          <h1>Venda de campeonato</h1>
          <p>50% de desconto na linha oficial da Fórmula E e da FIA</p>
          <Button>Compre Agora</Button>
        </BannerContent>
        <BannerImage src={bannerImage} alt="Venda de campeonato" />
      </Banner>

      <CarouselContainer>
        <Arrow onClick={prevSlide}>&#8249;</Arrow>
        <ProductList style={{ transform: `translateX(-${((currentSlide - 1) * 100) / itemsPerSlide}%)` }}>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.img} alt={product.name} />
              <ProductInfo>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductList>
        <Arrow onClick={nextSlide}>&#8250;</Arrow>
      </CarouselContainer>

      <CarouselContainer>
        <Arrow onClick={prevSlide}>&#8249;</Arrow>
        <ProductList style={{ transform: `translateX(-${((currentSlide - 1) * 100) / itemsPerSlide}%)` }}>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.img} alt={product.name} />
              <ProductInfo>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductList>
        <Arrow onClick={nextSlide}>&#8250;</Arrow>
      </CarouselContainer>
      
      <CarouselContainer>
        <Arrow onClick={prevSlide}>&#8249;</Arrow>
        <ProductList style={{ transform: `translateX(-${((currentSlide - 1) * 100) / itemsPerSlide}%)` }}>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.img} alt={product.name} />
              <ProductInfo>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductList>
        <Arrow onClick={nextSlide}>&#8250;</Arrow>
      </CarouselContainer>

      <Desconto>
        <h1>Equipes em destaque</h1>
        <div>
          <Card>
            <img className='dimg' src="/img/02022021_TESTHP_01.webp" alt="TAG Heuer Porsche" />
            <h2>TAG Heuer Porsche</h2>
            <div className="desconto">Até 50% de desconto</div>
            <button>Compre agora</button>
          </Card>

          <Card>
            <img className='dimg' src="/img/jordan-kin.webp" alt="MAHINDRA" />
            <h2>MAHINDRA</h2>
            <div className="desconto">Até 50% de desconto</div>
            <button>Compre agora</button>
          </Card>
        </div>
      </Desconto>
    </ContentContainer>
  );
};

export default MainContent;

const ContentContainer = styled.div`
  padding: 20px;
`;

const Desconto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

  h1 {
    font-size: 36px;
    color: #000;
    margin-bottom: 50px;
    font-family: "Audiowide", sans-serif;
  }

  > div {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 45%;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .desconto {
    font-size: 18px;
    margin-bottom: 15px;
    color: #0077ff;
  }

  button {
    padding: 10px 15px;
    background-color: #0077ff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #00c3ff;
    }
  }

  @media (max-width: 768px) {
    width: 90%; /* Ocupa mais espaço em telas pequenas */
  }
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #0077ff, #00c3ff);
  border-radius: 12px;
  padding: 20px;
  min-height: 250px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BannerContent = styled.div`
  color: white;
  text-align: center;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
    font-family: "Audiowide", sans-serif;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    color: #e0e0e0;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00c3ff;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 20px;
`;

const Arrow = styled.div`
  font-size: 45px;
  cursor: pointer;
  user-select: none;
  color: #0077ff;
  position: absolute;
  z-index: 1;
  padding: 0 10px;

  &:first-child {
    left: 0;
  }

  &:last-child {
    right: 0;
  }
`;

const ProductList = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: calc(100% * 3);

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: nowrap; /* Mantém os itens em uma linha em telas pequenas */
  }
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 10px;
  margin: 5px; /* Margem ajustada */
  flex: 1 0 calc(33.333% - 10px); /* Três produtos por linha */

  @media (max-width: 768px) {
    flex: 1 0 calc(100% - 10px); /* Um produto por linha em telas pequenas */
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  margin-top: 10px;

  h3 {
    font-size: 14px;
    font-weight: bold;
  }

  p {
    font-size: 12px;
    color: #333;
  }
`;
