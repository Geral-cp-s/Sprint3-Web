import { SectionGeral } from "./styledHome";

export default function Sec1() {
    return (

// O VIDEO NAO ESTA QUERENDO APARECER NA PAGINA HOME, TENTA RESOLVER

            <div className="video-background">
                <video autoPlay loop muted>
                    <source src="/formulae.mp4" type="video/mp4" />
                </video>
            </div>
    );
}
