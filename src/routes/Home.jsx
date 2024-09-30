import Sec1 from "../components/Home/Sec1"
import Sec2 from "../components/Home/Sec2"
import Sec3 from "../components/Home/Sec3"
import Sec4 from "../components/Home/Sec4"
import Sec5 from "../components/Home/Sec5.jsx"
import Sec6 from "../components/Home/Sec6.jsx"
import Sec7 from "../components/Home/Sec7.jsx"
import { MainHome } from "../components/Home/styledHome"

const Home = () => {
    return(
        <MainHome>
            <Sec1/>
            <Sec2/>
            <Sec3/>
            <Sec4/>
            <Sec5/>
            <Sec6/>
            <Sec7/>
        </MainHome>
    )
}
export default Home