import styled from "styled-components";

export const MainMahindra = styled.main`

    flex-grow: 1;           /* aliado ao display flex manda o header e o footer para as extremidades da sala */
    background-color: #ddf;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    'sec1 sec1'
    'sec2 sec3'
    'sec4 sec4'
    'sec5 sec5'
    'sec6 sec6'
    'sec7 sec7';

    .secao1 {grid-area: sec1;}
    .secao2 {grid-area: sec2;}
    .secao3 {grid-area: sec3;}
    .secao4 {grid-area: sec4;}
    .secao5 {grid-area: sec5;}
    .secao6 {grid-area: sec6;}
    .secao7 {grid-area: sec7;}

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-areas:
        'sec1'
        'sec2'
        'sec3'
        'sec4'
        'sec5'
        'sec6'
        'sec7';
    }
`

export const SectionGeral = styled.section`

    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        background-color: orange;

    }

    #logo{
    margin-top: 15px;
    width: 40%;
  }
  
  #bandeira{
    width: 20px;
  }
  /*Config. time*/
  .team-info {
    background: white;
    padding: 20px;
    margin-top: 6%;
    text-align: center;
  }
  
  .team-info h1 {
    color: #333;
    font-size: 36px;
  }
  
  .team-info p {
    font-size: 18px;
    margin: 10px 0;
  }
  
  .dois{
    color: red;
    font-weight: 900;
  }
  
  /*Config. carro*/
  .car-image {
    width: 100%;
    max-width: 600px;
    display: block;
    margin: 20px auto;
  }
  
  /*Config. quem é*/
  .quem-e{
    background: white;
    padding: 20px;
    margin-top: 20px;
    text-align: center;
  }
  
  .quem-e h2{
    color: black;
    text-decoration: underline red;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  /*Config. detalhes*/
  .team-details {
    margin-top: 20px;
    text-align: left;
  }
  
  .team-details .detail {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  
  /*Config. estatisticas*/
  .statistics {
    background: white;
    padding: 20px;
    margin-top: 20px;
    text-align: center;
  }
  
  .statistics h2 {
    color: black;
    text-decoration: underline red;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .stats {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .stat {
    background: #f9f9f9;
    padding: 20px;
    text-align: center;
    flex: 1;
    margin: 10px;
    border-radius: 10px;
    min-width: 120px;
  }
  
  /*Config. pilotos*/
  .drivers {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  
  .driver {
    background: white;
    padding: 20px;
    text-align: center;
    flex: 1 1 300px;
    margin: 10px;
    border-radius: 10px;
  }
  
  .driver img {
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
  }
  
  .driver .name {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .driver .number {
    font-size: 24px;
    color: red;
    font-weight: 700;
  }
  
  .driver .country img {
    width: 35px;
    margin-right: 5px;
  }
  
  @media (max-width: 768px) {
    .team-details .detail {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .team-details .detail span {
        margin-bottom: 10px;
    }
    
    .stat {
        flex: 1 1 100%;
    }
  }
  
  
  #modal12 div h2{
    text-align: left;
    text-decoration: underline red;
  }
  
  #modal12 div img{
    width: 180px;
  }
  
  #modal13 div h2{
    text-align: left;
    text-decoration: underline red;
  }
  
  #modal13 div img{
    width: 180px;
  }
  
  .label{
    font-weight: 500;
    margin-left: 10px;
  }
  
  .value{
    margin-right: 10px;
    color: red;
    font-weight: 700;
  }

`