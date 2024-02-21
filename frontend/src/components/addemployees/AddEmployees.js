import React from "react";
import './AddEmployees.css';
import {set,useForm} from "react-hook-form";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function AddEmployees(){
	let {register,handleSubmit,formState : {errors},reset} = useForm();
	let [employee,setEmployee] = useState();
	
	let [err,setErr] = useState("");
	
	let navigate = useNavigate();
	
	let empobj = (details)=>{
		setEmployee(details);
		console.log(employee);
		axios.post('http://localhost:8080/put',details)
		.then(Response => {
			console.log(Response);
			navigate("/employees");
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
	}
	return(
		<div>
		<div>
		<h1 className="text-center display-6">Employee Registration</h1>
		<div className="row">
		<div className="col-11 col-sm-8 col-md-6 mx-auto">
		<form onSubmit={handleSubmit(empobj)}>
		<div className="mb-3">
		<input type="text" className="form-control" placeholder = "Name" {...register("ename",{required : true,minLength:"4"})}></input>
		{errors.ename?.type == "required" && <p className="text-danger">* Name is mandotary.</p>}
		{errors.ename?.type == "minLength" && <p className="text-danger">*Minimum length is 4.</p>}
		</div>
		<div className="mb-3">
		<input type="text" className="form-control" placeholder="Surname"{...register("esurname",{required:true,minLength:"4"})}></input>
		{errors.esurname?.type == "required" && <p className="text-danger">*Surname is mandatory.</p>}
		{errors.esurname?.type == "minLength" && <p className="text-danger">*Minimum length is 4.</p>}
		</div>
		<div className="mb-3">
		<input type="text" className="form-control" placeholder="Email" {...register("eemail",{required:true,validate:"/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i"})}></input>
		{errors.email?.type == "required" && <p className="text-danger">*Email is Mandotary.</p>}
		{errors.email?.type == "validate" && <p className="text-danger">*This is not valid Email.</p>}
		</div>
		<div className="mb-3">
		<input type="date" className="form-control" placeholder="DD-MM-YYYY" {...register("edob",{required:true})}></input>
		{errors.edob?.type == "required" && <p className="text-danger">*DOB is Required.</p>}
		</div>
		<div className="mb-3">
		<input type="text" className="form-control" placeholder="ImgUrl" {...register("eimgurl",{required:true})}></input>
		{errors.eimgurl?.type == "required" && <p className="text-danger">*Image url is Mandatory.</p>}
		</div>
		<button type="submit" className="btn btn-success  float-end">Submit</button>
		</form>
		</div>
		</div>
		</div>
		</div>
	);
}
export default AddEmployees;