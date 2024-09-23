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
      {path:'/equipes', element:<Equipes/>},

      //Chamando as outras equipes
      {path:'/equipes/mahindra', element:<Mahindra/>}
    ]
  }
])
  
    
  


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
