import React from 'react'
import loginimage from '../images/login_image.jpg'
import './Login.css'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
function Login() {

  let {register,handleSubmit,formState :{errors},reset} = useForm();
  let[err,setErr] = useState("");
  let [responce,setResponce] =  useState("");
  let [eandp,setEandp] = useState("");
  let [datas,setData] = useState();
  
  let navigate = useNavigate();  
  
  useEffect(() => {
  if (responce === "Login successful") {
  //here i want to pass emial to the home  to fetch data from the database
  const  email = eandp.email;
  localStorage.setItem('userEmail',email);
  navigate("/home");
  }
}, [responce]);


  let printcredientials = (details) =>{
    console.log(details);
    setEandp(details);
    axios.post("http://localhost:8080/login",details)
    .then(Response => {
      console.log(Response);
      setResponce(Response.data);
    })
    .catch(err => {
      if(err.response){
        setErr(err.message);
      }
      else if(err.request){
        setErr(err.message);
      }
      else{
        setErr(err.message);
      }
    })
    console.log(err);
    reset();
  }
  return (
    <div className='lcontainer'>
    <div className='badcredientials'>
    {responce && responce !== "Login successful" && <h2 className='text-danger'>WRONG CREDIENTIALS</h2> }
    </div>
      <div className='lmain_div'>
      <div className='lfirst_div '>
        <img src={loginimage} alt='loginimage' style={{width:'250px',height:'250px'}}></img>
      </div>
      <div className='lsecond_div col-4'>
        <div className='col-12'>
      <form onSubmit={handleSubmit(printcredientials)}>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="text" className="form-control" {...register("email",{required:true})}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    {errors.email?.type ==='required' && <p className='text-danger'>*this is Required.</p>}
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" {...register("password",{required:true})}/>
    {errors.password?.type === "required" && <p className='text-danger'>*this is Required.</p>}
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
    </div>
    </div>
  )
}

export default Login