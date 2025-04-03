import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import BookList from './components/BookList.jsx';
import Error from './components/Error.jsx';
import BookDetails from './components/BookDetails.jsx';


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement : <Error /> 
  },
  {
        path:"/about",
        element:<About />,  
  },
  {
        path:"/contact",
        element:<Contact />,
  },
  {
    path:"/book/:id",
    element:<BookDetails />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={appRouter} />
  </StrictMode>,
)
