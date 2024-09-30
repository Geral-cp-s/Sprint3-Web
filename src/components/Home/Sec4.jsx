import Card from "./Card"
import img from "../../../public/img/noticia/img3.webp"

const Sec4 =()=>{

    return(
        <div className="secao4" style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
            <Card 
                title="Fórmula E definida para a Semana do Clima de Nova York"
                content="Líder em esporte global sustentável, a Fórmula E estará presente na Semana do Clima de Nova York, com a vice-presidente de Sustentabilidade, Julia Palle, programada para falar em diversos eventos."
                imageUrl={img}
                link="https://www.fiaformulae.com/pt-br/news/508907" // URL externa para Pascal Wehrlein
            />
        </div>
    )
}
export default Sec4