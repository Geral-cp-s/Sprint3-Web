import Card from "./Card"
import img from "../../../public/img/noticia/img2.webp"

const Sec3 =()=>{

    return(
        <div className="secao3" style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
            <Card 
                title="A parceria juntará o piloto mais experiente da Fórmula E com o único novato até agora, destacando o compromisso da Lola em desenvolver novos talentos e tecnologias no automobilismo."
                content="Lola Yamaha ABT completa a formação de pilotos estreantes com o novato Zane Maloney se juntando ao “Sr. Fórmula E” Lucas di Grassi."
                imageUrl={img}
                link="https://www.fiaformulae.com/pt-br/news/509022" // URL externa para Pascal Wehrlein
            />
        </div>
    )
}
export default Sec3