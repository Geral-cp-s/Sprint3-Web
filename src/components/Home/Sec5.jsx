import Card from "./Card"
import img from "../../../public/img/noticia/img4.webp"

const Sec5 =()=>{

    return(
        <div className="secao5" style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
            <Card 
                title="Buemi e Frijns retornam com a Envision Racing para a 11ª temporada"
                content="A Envision Racing tem o prazer de confirmar uma escalação de pilotos inalterada para a Temporada 11 do Campeonato Mundial de Fórmula E da ABB FIA. Sébastien Buemi e Robin Frijns continuarão com a equipe para a Temporada 11 do Campeonato Mundial de Fórmula E da ABB FIA."
                imageUrl={img}
                link="https://www.fiaformulae.com/pt-br/news/508413" // URL externa para Pascal Wehrlein
            />
        </div>
    )
}
export default Sec5