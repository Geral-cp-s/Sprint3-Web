import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Pistas from './routes/Pistas.jsx'
import Login from './routes/Login.jsx'
import QuemSomos from './routes/QuemSomos.jsx'
import Comparativos from './routes/Comparativos.jsx'
import Equipes from './routes/Equipes.jsx'
import Mahindra from './routes/Mahindra.jsx'
import GlobalStyled from './global-styled.js'
import Forum from './routes/Forum.jsx'
import Projeto from  './routes/Projeto.jsx'
import Conta from './routes/Conta.jsx'
import Assinatura from './routes/Assinatura.jsx'
import Loja from './routes/Loja.jsx'
import Memoria from './routes/Memoria.jsx'
import Corrida from './routes/Corrida.jsx'
import MiniGames from './routes/MiniGames.jsx'
import Desenho from './routes/Desenho.jsx'


const router = createBrowserRouter([
  {
    //Elemento PAI
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //Elemento FILHO
    children:[
      {path:'/', element:<Home/>},
      {path:'/pistas', element:<Pistas/>},
      {path:'/login', element:<Login/>},
      {path:'/quem-somos', element:<QuemSomos/>},
      {path:'/comparativos', element:<Comparativos/>},
      {path:'/projeto', element:<Projeto/>},
      {path:'/equipes', element:<Equipes/>},
      {path:'/forum', element:<Forum/>},
      {path:'/conta', element:<Conta/>},
      {path:'/assinatura', element:<Assinatura/>},
      {path:'/loja', element:<Loja/>},
      {path:'/memoria', element:<Memoria/>},
      {path:'/corrida', element:<Corrida/>},
      {path:'/minigames', element:<MiniGames/>},
      {path:'/desenho', element:<Desenho/>},

      //Chamando as equipes
      {path:'/equipes/mahindra', element:<Mahindra/>}
    ]
  }
])
  
    
  


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
    <GlobalStyled/>
  </StrictMode>,
)
