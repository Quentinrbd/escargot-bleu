import Accueil from './pages/Accueil/Accueil'
import Restaurant from './pages/Restaurant/Restaurant'
import Carte from './pages/Carte/Carte'
import {RouterProvider, createBrowserRouter} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil/>
  },
  {
    path: '/restaurant',
    element: <Restaurant/>
  },
  {
    path: '/menu',
    element: <Carte/>
  },
])

function App() {

  return <RouterProvider router={router}/>
}

export default App