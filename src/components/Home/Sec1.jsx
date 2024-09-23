import { SectionGeral } from "./styledHome"

export default function Sec1(){

    return(
        <SectionGeral className="secao1">
            <div className="video-background">
                <video autoplay loop muted>
                    <source src="./src/video/formulae.mp4" type="video/mp4" />
                </video>
            </div>
        </SectionGeral>
    )
}