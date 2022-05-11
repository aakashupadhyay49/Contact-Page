import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"
// import { Toast } from 'react-toastify/dist/components'
const AddContact = () => {
    const [name,setname]=useState('')
    const [email,setEmail]=useState('')
    const [number,setNumber]=useState('')
    const contacts=useSelector((state)=>state)
    // console.log(contacts)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const checkEmail=contacts.find((contact)=>contact.email===email&&email)
    const checkNumber=contacts.find((contact)=>contact.number===parseInt(number)&&number)



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
            id:contacts[contacts.length-1].id+1,
            name,email,number,
        }
        dispatch({type:"ADD_CONTACT",payload:data})
        toast.success("Student adeed successfully!!")
        navigate("/")
   
    }


    
    
    
    
    return (
    <div className='container'>
         <h1 className='display-3 text-center my-5' >
              Add Student
            </h1>
        <div className='row'>
           
            <div className="col-md-6 shadow mx-auto p-5">
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type="text" placeholder='Name' className='form-control' value={name} onChange={(e)=>setname(e.target.value)}></input>
                    </div>

                    <div className='form-group'>
                        <input type="email" placeholder='Email'  className='form-control'  value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>

                    <div className='form-group'>
                        <input type="number" placeholder='Phone Number'  className='form-control'  value={number} onChange={(e)=>setNumber(e.target.value)}></input>
                    </div>

                    <div className='form-group'>
                        <input type="Submit" value="Add Student" className='btn btn-block btn-dark'></input>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddContact