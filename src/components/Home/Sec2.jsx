import Card from "./Card"
import img from "../../../public/img/noticia/img1.webp"

const Sec2 =()=>{

    return(
        <div className="secao2" style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
            <Card 
                title="Pascal Wehrlein, da Porsche, supera adversidades e conquista o Campeonato Mundial de Fórmula E em Londres"
                content="Wehrlein garantiu a vitória após uma temporada cheia de desafios, consolidando seu lugar entre os melhores da categoria elétrica."
                imageUrl={img}
                link="https://www.fiaformulae.com/pt-br/news/504132" // URL externa para Pascal Wehrlein
            />
        </div>
    )
}
export default Sec2