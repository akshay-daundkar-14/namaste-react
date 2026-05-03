import  React  from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import MenuCard from "./components/MenuCard";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


// Main Container Layout

const AppLayout = () =>
    (
        <div className="container">
            <div className="header">
                <Header/>
            </div>
            <div className="body">
                <Outlet/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );

    const appRoute = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>              
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/restaurants/:resId",
                element: <MenuCard/>
            }
        ],
        errorElement:<Error/>
    }    
], { 
    future: { 
        v7_startTransition: true,
        v7_relativeSplatPath: true
    } 
});

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} future={{ v7_startTransition: true }}/>);