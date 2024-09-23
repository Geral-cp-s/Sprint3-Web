import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Header"

function App() {


  return (
    <>
      <Nav />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
