import React from 'react'
import { useState } from 'react'


import axios from 'axios'
const Contact = () => {
 
 const[user,setuser]=useState({
     uname:"",
     Email:"",
     contact:""


})

const inputChnageHandler=(event)=>{

    const {type,name,value}=event.target;
    setuser({...user,[name]:value});
}
   
 const hello=(event)=>{
    event.preventDefault();
    if(user.uname.trim()===""){
        window.alert("name is required");
        return false;
      }
      if(!user.uname.trim().match('^[a-zA-Z]{2,15}$')){
        window.alert("name must contain only chacter min-2 and max-15");
        return false;
   
      }
      if(user.Email.trim()===""){
        window.alert("Email is required");
        return false;
      }
     
      if(!user.Email.trim().match('^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$')){
        window.alert("Email must contain  '^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$'");
        return false;
     }
     if(user.contact.trim()===""){
        window.alert("contact is required");
        return false;
      }
     if(user.contact.trim().match('^[0-9]{9}$')){
        window.alert("contact must contain only [7-9][0-9]{9}");
        return false;
     }
     window.alert(JSON.stringify(user));
     
     
     axios.post("http://localhost:8888/user",user).then(()=>{
       window.alert("Data submitted successfully ");
       
     }
  
     ).catch((error)=>{})
    }
    return (
        <div>
            <form onSubmit={hello} >
                <label for="uname" className='form-label' >User name</label>
            <input type="text" name="uname" className='form-control' onChange={inputChnageHandler}   value={user.uname}></input>
            <label for="Email" className='form-label'>Email</label>
            <input type="email" name="Email" className='form-control'onChange={inputChnageHandler} value={user.Email}></input>
            <label for="contact" className='form-label'>Contact</label>
            <input type="number" name="contact" className='form-control'  onChange={inputChnageHandler} value={user.contact}></input><br></br>
           <button type="submit" className='btn btn-primary '>Submit</button>
            </form>
            
        </div>
    )

}
export default Contact;
