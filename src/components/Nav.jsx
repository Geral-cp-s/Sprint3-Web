import { Link } from 'react-router-dom'

const Nav =()=>{
    return(
        <>
        <Link to ='/'>Home</Link>
        <Link to ='/login'>Login</Link>
        <Link to ='/quem-somos'>Quem Somos</Link>
        <Link to ='/pistas'>Pistas</Link>
        <Link to ='/equipes'>Equipes</Link>
        <Link to ='/comparativos'>Comparativos</Link>

        </>
    )
}
export default Nav