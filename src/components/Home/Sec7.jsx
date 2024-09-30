import Card from "./Card"
import img from "../../../public/img/noticia/img6.webp"

const Sec7 =()=>{

    return(
        <div className="secao7" style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
            <Card 
                title="Lucas di Grassi: “10 anos de trabalho duro e noites sem dormir”"
                content="Dez anos atrás, hoje: Lucas di Grassi venceu o primeiro E-Prix para a ABT em Pequim. Desde então, a Fórmula E cresceu de força em força."
                imageUrl={img}
                link="https://www.fiaformulae.com/pt-br/news/508221" // URL externa para Pascal Wehrlein
            />
        </div>
    )
}
export default Sec7