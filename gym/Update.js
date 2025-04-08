import axios from 'axios';
import React, { useEffect ,useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const Update = () => {

    const nav = useNavigate();
    const {id} = useParams();

    const [user,setuser]=useState({
        id:"",
        uname:"",
        Email:"",
        contact:""
    })
    const inputChangeHandler = (event)=>{
        const {type,name,value} = event.target;
        setuser({...user,[name]:value});
    }
    const addData =(event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8888/user/${id}`,user).then(()=>{
         window.alert("Record updated successfully");
         nav("/data");
        }).catch((err)=>{})
     }  
      useEffect(()=>{
        axios.get(`http://localhost:8888/user/${id}`).then((res)=>{
            // console.log(res.data);
            setuser(res.data);
        }).catch((err)=>{})
    },[])

    return (
        <div>
             <h2>This is Product update Component</h2>
            <form onSubmit={addData}>
                <label>Enter  Name:</label>
                <input type='text' name='uname' onChange={inputChangeHandler} value={user.uname} /> <br />
                <label>Enter Email:</label>
                <input type='text' name='Email' onChange={inputChangeHandler} value={user.Email} /> <br />
                <label>EnterContact:</label>
                <input type='text' name='contact' onChange={inputChangeHandler} value={user.contact} /> <br />
                <button type='submit' className='btn btn-primary'>submit</button>
            </form>
        </div>
    )
}

export default Update;












