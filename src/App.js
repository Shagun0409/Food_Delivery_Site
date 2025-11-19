import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter,Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";  
import RestaurantMenu from "./components/RestaurantMenu.js";
import {Provider} from "react-redux";
import appstore from "./utils/appStore.js";
import Cartnew from "./components/Cartnew.js";
import { useState, useEffect } from "react"; 
import UserContext from "./utils/UserContext.js";
// Header component



// App component
const AppLayout = () => {
  
  const [userName, setUserName] = useState();

  useEffect(
    () => {
      const data = {
        name: "Shagun",
      }
      setUserName(data.name);
    }, []);
  


  return (
    <Provider store={appstore}>
    <UserContext.Provider
      // store={appstore}
      value={{ loggedInUser: userName, setUserName }}  >
    <div className="App">
     
      <Header />
   <Outlet />
      <Footer />
      </div>
      </UserContext.Provider>
    </Provider>
  );
}

const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
    {
    path: "/",
    element: <Body />
    },
    
    {
    path: "/about",
    element: <About />
    },
    {
    path: "/contact",
    element: <Contact />
    },
    {
   path: "/restaurant/:resId",
  element: <RestaurantMenu />
    },
    
    {
      path: "/cart",
      element: <Cartnew/>
    }
    ],



    errorElement: <Error />
  },
  
  
])

export default appRouter; 