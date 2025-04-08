
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import React,{useEffect,useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Empty from './Empty';
import "../acutal/abhi.css";
import logo from "../img/logogym.jpg";
import { useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Datas = () => {
const nav= useNavigate();
const [user,setUser]=useState([]);

const Signout=()=>{
    if(window.confirm(" Really want to sign out")){
        sessionStorage.removeItem("users");
        nav("/Login");
    }
}

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (val) => {
    setShow(true);
    setShow(val);

  }

useEffect(()=>{
    fetchdata();
},[])



    const fetchdata=()=>{
        axios.get("http://localhost:8888/user").then((res)=>{
            setUser(res.data)
        }).catch((error)=>{})
    }

    const deleterecord=(id)=>{
        if(window.confirm("are you  to delete data")){
            axios.delete(`http://localhost:8888/user/${id}`).then(()=>{
                window.alert("record deleted successfully");
                fetchdata();

            }).catch((error)=>{})
        }
    }
    return (
        <div> 
             <div className='container'>
             <div className='card'>
             <div className='card-header'><Empty/>
            <h2 style={{color:"red"}}> <marquee>This is New Era Gym</marquee></h2>
            {/* <Link to="/maind/Pro" className='btn btn-primary mb-2' > <AddIcon></AddIcon></Link> */}
           <img src={logo} className="abhi" />
           <Button variant="contained" onClick={()=>Signout()} style={{float:"right"}}>SignOut<ExitToAppIcon/></Button>
            </div>
            <div className='card-body'>
            <table className="table table-hover table-striped table-bordered">
                 <thead>
                    <th>srno</th>
                    <th>User</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Action</th>

                 </thead>
                <tbody>
                    {
                        user.length>0 && user.map((val,index)=>{
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{val.uname}</td>
                                <td>{val.Email}</td>
                                <td>{val.contact}</td>
                               <td>

                                <Button  variant="outline-primary" size="sm" onClick={()=>handleShow(val)}> <VisibilityIcon></VisibilityIcon> </Button>
      
                               <Link to={`/update/${val.id}`} className='btn btn-outline-success btn-sm'><EditIcon></EditIcon></Link> |
                                <button type="button"  onClick={()=>deleterecord(val.id)}className="btn btn-danger btn-sm" ><DeleteIcon></DeleteIcon> </button>
                               </td>
                                
                            </tr>
                        })
                    }
                </tbody>
            </table>
            
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{show.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>  id : <strong>{show.id}</strong></div>       
          <div>  name : <strong>{show.uname}</strong></div>      
          <div>  Email : <strong>{show.Email}</strong></div>       
          <div>  contact : <strong>{show.contact}</strong></div>       </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
      </div>
             <div className='card-footer' ><p className='apple'><> Welcome  To  New Gym</> </p> </div>
     </div>
      </div>
      </div>
        
    )
}

export default Datas
