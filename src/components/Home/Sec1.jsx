import { SectionGeral } from "./styledHome";

export default function Sec1() {
    return (
        <>
        <div className="video-background">
        <video autoPlay loop muted width={'300%'}>
        <source src="/video.mp4" type="video/mp4" />
        </video>
        </div>
        </>
    );
}
