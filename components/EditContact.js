import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link ,useNavigate,useParams} from 'react-router-dom'
import {toast} from "react-toastify"

const EditContact = () => {
    const [name,setname]=useState('')

    const [email,setEmail]=useState('')
    const [number,setNumber]=useState('')
    const {id}=useParams()

    const contacts=useSelector(state=>state);
    const currentContact=contacts.find(contact=>contact.id===parseInt(id))
  
   useEffect(()=>{
       if(currentContact){
           setname(currentContact.name)
           setEmail(currentContact.email)
           setNumber(currentContact.number)
       }
   },[currentContact])


   const dispatch=useDispatch()
   const navigate=useNavigate()
   
   const checkEmail=contacts.find((contact)=>contact.id!==parseInt(id) && contact.email===email)
   const checkNumber=contacts.find((contact)=>contact.id!==parseInt(id) && contact.number===parseInt(number))


   
   const handleSubmit=(e)=>{
    e.preventDefault()
    if(!email ||!name||!number){
        return toast.warning("please fill in all fields")
    }

    if(checkEmail){
        return toast.error("This Email Already Exist")

    }
    
    
    if(checkNumber){
        return toast.error("This Number Already Exist")

    }

    const data={
        id:parseInt(id),
        name,email,number,
    }
    dispatch({type:"UPDATE_CONTACT",payload:data})
    toast.success("Student Updated successfully!!")
    navigate("/")

}





  
    return (
    <div className='container'>
        {currentContact?(
            <>
                <h1 className='display-3 text-center my-5' >
            Edit Student {id}
            </h1>
        <div className='row'>
           
            <div className="col-md-6 shadow mx-auto p-5">
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type="text" placeholder='Name' className='form-control' value={name} onChange={(e)=>setname(e.target.value)}></input>
                    </div>

                    <div className='form-group'>
                        <input type="email" placeholder='Email'  className='form-control'   value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>

                    <div className='form-group'>
                        <input type="number" placeholder='Phone Number'  className='form-control' value={number} onChange={(e)=>setNumber(e.target.value)}></input>
                    </div>

                    <div className='form-group'>
                        <input type="Submit" value="Update Student" className='btn btn-dark'></input>
                        <Link to="/" className='btn btn-danger ml-5' >Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
            </>
        ):(
            <h1 className='display-3 my-5 text-center'>
                Student contact with id:{id} is not exist
            </h1>
        )
    
    }
    </div>
  )
}

export default EditContact