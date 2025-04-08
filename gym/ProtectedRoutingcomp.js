import React,{useEffect} from 'react'
import { useNavigate } from 'react-router'

const ProtectedRoutingcomp = ({Component}) => {
  const nav =useNavigate();


  useEffect(()=>{
    if(!sessionStorage.getItem("users")){
        nav("/");
    }
  },[])
    return (
        <div>
           <Component></Component> 
        </div>
    )
}

export default ProtectedRoutingcomp
