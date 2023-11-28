import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import TableauDeBord from './componnents/tbd.jsx';
import Navbar from './componnents/Navbar.jsx';
import Banniere from './componnents/Banniere.jsx';
import Cards from './componnents/Cards.jsx';
import Footer from './componnents/Footer.jsx';


const route = createBrowserRouter ([

  {
      path: "/",
      element: <App/>,
  },
  
  {
      path: "/tbd",
      element: <TableauDeBord />,
      
  },
  {
      path: "/Navbar",
      element: <Navbar />,
      
  },
  {
    path: "/Banniere",
    element: <Banniere />,
    
},
{
  path: "/Cards",
  element: <Cards />,
  
},
{
  path: "/Footer",
  element: <Footer />,
  
},

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={route}/>
</React.StrictMode>
);
