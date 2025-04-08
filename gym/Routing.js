import {createBrowserRouter} from "react-router-dom";
import Home from "../Front/Home";
import GYm from "../acutal/GYm";
import About from "../Front/About";
import Contact from "../Front/Contact";
import Login from "../Front/Login";
import { Component } from "react";
import ProtectedRoutingcomp from "../Front/ProtectedRoutingcomp";
import Datas from "../Front/Datas";
import  Update  from "../Front/Update";

const router = createBrowserRouter([

 {path:"",element:<GYm/>,children:[
    {path:"Home",element:<Home/>},
    {path:"About",element:<About/>},
    {path:"Contact",element:<Contact/>},
    {path:"Login",element:<Login/>}
    // {path:"data",element:<Datas/>}
]},
{path:"data",element:<ProtectedRoutingcomp Component={Datas}/>},

{path:"update/:id",element:<Update/>}

])
export default router;