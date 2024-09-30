import Card from "./Card"
import img from "../../../public/img/noticia/img5.webp"

const Sec6 =()=>{

    return(
        <div className="secao6" style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
            <Card 
                title="Fórmula E abre inscrições para o Fundo Better Futures da Temporada 11"
                content="A Fórmula E lançou hoje o processo de inscrição para seu principal programa de apoio beneficente, o Better Futures Fund, que fornecerá suporte direto a projetos de impacto local e causas em todos os locais de corrida na 11ª temporada."
                imageUrl={img}
                link="https://www.fiaformulae.com/pt-br/news/508409" // URL externa para Pascal Wehrlein
            />
        </div>
    )
}
export default Sec6