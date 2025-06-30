import { RouterProvider, createBrowserRouter} from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Root from "./components/Root"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import './App.css'

// array of objects 
const router = createBrowserRouter ([
  {path: "/", element:<Root/>, 
  errorElement:<Error/>,
  children: [
      {path: "/", element: <Home/>},
      {path: "/about", element:<About/>},
      {path: "/contact", element: <Contact />}
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
