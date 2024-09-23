import Sec1 from "../components/Home/Sec1"
import Sec2 from "../components/Home/Sec2"
import Sec3 from "../components/Home/Sec3"
import { MainHome } from "../components/Home/styledHome"

const Home = () => {
    return(
        <MainHome>
            <Sec1/>
            <Sec2/>
            <Sec3/>
        </MainHome>
    )
}
export default Home