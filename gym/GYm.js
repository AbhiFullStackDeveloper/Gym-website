import React from 'react'
import { Outlet } from 'react-router-dom'
 import Navcomp from './Navcomp'

const GYm = () => {
    
    return ( <>
        <Navcomp/>
        <Outlet />
        Welcome to the Gym 
        {/* <div className='container'>
            <div className='card'>
             <div className='card-header'><Navcomp/></div>
             <div className='card-body'>
                <Outlet />
             </div>
             <div className='card-footer'>
                Welcome to the Gym 
             </div>

             </div>
        </div> */}
        </>
    )
}

export default GYm
