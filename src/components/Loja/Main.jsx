import { useState } from 'react';
import styled from 'styled-components';
import bannerImage from '../../../public/img/produtos/bones.jfif'; // Certifique-se de que o caminho esteja correto

const MainContent = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Começar no primeiro "produto" real

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

  const itemsPerSlide = 3; // Exibir 3 produtos por vez
  const totalSlides = products.length; // Número total de produtos

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


      {/* Carrossel de produtos */}
      <CarouselContainer>
        <Arrow onClick={prevSlide}>&#8249;</Arrow>
        <ProductList style={{ transform: `translateX(-${((currentSlide - 1) * 100) / itemsPerSlide}%)` }}>
          {/* Adiciona o último conjunto de produtos no início */}
          <ProductCard>
            <ProductImage src={products[totalSlides - 1].img} alt={products[totalSlides - 1].name} />
            <ProductInfo>
              <h3>{products[totalSlides - 1].name}</h3>
              <p>{products[totalSlides - 1].price}</p>
            </ProductInfo>
          </ProductCard>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.img} alt={product.name} />
              <ProductInfo>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </ProductInfo>
            </ProductCard>
          ))}
          {/* Adiciona o primeiro conjunto de produtos no final */}
          <ProductCard>
            <ProductImage src={products[0].img} alt={products[0].name} />
            <ProductInfo>
              <h3>{products[0].name}</h3>
              <p>{products[0].price}</p>
            </ProductInfo>
          </ProductCard>
        </ProductList>
        <Arrow onClick={nextSlide}>&#8250;</Arrow>
      </CarouselContainer>
      <Desconto>
      <h1>Equipes em destaque</h1>

      <div>
        
        <div className="card">
          <img className='dimg' src="/img/02022021_TESTHP_01.webp" alt="TAG Heuer Porsche" />
          <h2>TAG Heuer Porsche</h2>
          <div className="desconto"> Até 50% de desconto</div>
          <button>Compre agora</button>
        </div>

        
        <div className="card">
          <img className='dimg' src="/img/jordan-kin.webp" alt="MAHINDRA" />
          <h2>MAHINDRA</h2>
          <div className="desconto"> Até 50% de desconto</div>
          <button>Compre agora</button>
        </div>
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
  

  /* Título principal acima das outras divs */
  h1 {
    font-size: 36px;
    color: #000;
    margin-bottom: 50px; /* Espaço abaixo do título */
    font-family: "Audiowide", sans-serif;
  }
  h2{
    font-size: 36px;
    color: #000;
    margin-bottom: 40px;
    font-family: "Roboto", system-ui;
  }


  /* Container dos cards */
  > div {
    display: flex;
    gap: 20px; /* Espaço entre os cards */
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    justify-content:space-between ;
  }

  /* Estilo dos cards */
  .card {
    background-color: #fff;      /* Fundo do card */
    color: white;                /* Cor do texto */
    border-radius: 8px;          /* Borda arredondada */
    padding: 20px;               /* Espaçamento interno */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */
    width: 45%;                  /* Largura do card */
    text-align: center;          /* Centraliza o conteúdo */
    transition: transform 0.3s ease; /* Transição para efeito de hover */

    &:hover {
      transform: translateY(-10px); /* Efeito de elevar ao passar o mouse */
    }

    img {
      width: 100%;               /* Faz a imagem ocupar a largura do card */
      border-radius: 8px;        /* Arredonda a imagem */
      margin-bottom: 10px;       /* Espaço entre a imagem e o título */
    }

    h1 {
      font-size: 24px;           /* Tamanho do título */
      margin-bottom: 10px;       /* Espaço abaixo do título */
    }

    .desconto {
      font-size: 18px;
      margin-bottom: 15px;
      color: #0077ff;            /* Cor vermelha para destacar o desconto */
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
        background-color: #00c3ff; /* Efeito de hover no botão */
      }
    }
  }

`
  


const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #0077ff, #00c3ff);
  border-radius: 12px;
  padding: 10px; /* Ajuste o padding conforme necessário */
  min-height: 250px; /* Altura do banner */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px; /* Ajuste a margem conforme necessário */
`;

const BannerContent = styled.div`
  color: white;
  max-width: 500px;

  h1 {
    font-size: 36px; /* Tamanho ajustado */
    margin-bottom: 10px; /* Ajuste da margem */
    font-family: "Audiowide", sans-serif;
  }

  p {
    font-size: 18px; /* Tamanho ajustado */
    margin-bottom: 20px; /* Ajuste da margem */
    color: #e0e0e0;
  }
`;

const BannerImage = styled.img`
  width: 400px; /* Ajuste a largura conforme necessário */
  height: auto;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px; /* Ajuste o padding conforme necessário */
  font-size: 16px; /* Tamanho ajustado */
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:#00c3ff;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 20px; /* Ajuste conforme necessário */
`;

const Arrow = styled.div`
  font-size: 45px; /* Tamanho ajustado */
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
  width: calc(100% * 3); /* A largura agora ocupa todo o espaço do carrossel */
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 10px; /* Ajuste o padding conforme necessário */
  margin: 0 5px; /* Margem ajustada */
  flex: 0 0 calc(100% / 3); /* Cada card ocupa 1/3 do espaço total */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px); /* Efeito de hover */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%; /* Ajuste a largura da imagem conforme necessário */
  height: auto;
  max-width: 150px; /* Ajuste a largura máxima conforme necessário */
  margin: 0 auto; /* Centraliza a imagem no card */
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  margin-top: 10px;

  h3 {
    font-size: 14px; /* Tamanho ajustado */
    font-weight: bold;
  }

  p {
    font-size: 12px; /* Tamanho ajustado */
    color: #333;
  }
`;
