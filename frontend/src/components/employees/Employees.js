import{ useState, useEffect } from "react";
import React from "react";
import './Employees.css';
import axios from "axios";
import {Button,Modal} from "react-bootstrap";
import { set,useForm } from 'react-hook-form';

function Employees() {
	
  const [employees, setEmployees] = useState([]);
  const [err, setErr] = useState("");
  
  let {register,handleSubmit,formState : {errors},reset,setValue,getValues} = useForm();
  
  {/**showing  step : 1*/}
  let [showing,setShowing] = useState(false);
  
  let showModel = () => setShowing(true);
  let closeModel = () => setShowing(false);
  {/**step 1 ending */}
  
  {/*step : 2 */}
  {/**editing */}
  
  let [usertoedit,setUsertoedit] = useState();
  
  {/**actual editing */}
  let edituser = (userobject)=>{
	  showModel();
	  setUsertoedit(userobject);
	  setValue("ename",userobject.ename);//setValue will set the value which we gave.
	  setValue("esurname",userobject.esurname);
	  setValue("eemail",userobject.eemail);
	  setValue("edob",userobject.edob);
	  setValue("eimgurl",userobject.eimgurl);
  }
  {/**step 2 ending  */}
  
  
  {/**step 3 */}
  {/**this is saving the user */}
  let saveuser = () =>{
	  closeModel();
	  
	  let modifyuser = getValues();//this function will get all the values
	  modifyuser.id = usertoedit.id;
	  
	  console.log(modifyuser);
	  axios.post("http://localhost:8080/updating",modifyuser)
	.then((response) => {
		  console.log(response);
	  })
	  .catch((error) => {
		  if(error.response){
			  setErr(error.message);
		  }
		  else if(error.request){
			  setErr(error.message);
		  }
		  else{
			  setErr(error.message);
		  }
	  })
  }
  {/** step 3 ending */}
  
  {/**deleting the user */}
  let deleteemployee = (deletingobject) =>{
	  axios.post("http://localhost:8080/inserting",deletingobject);
	  //axios.delete("http://localhost:8080/delete",deletingobject);
	  axios.delete("http://localhost:8080/delete", { data: deletingobject });
	  console.log("the object was deleted");
  }

  useEffect(() => {
    axios.get("http://localhost:8080/get")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((err) => {
        if (err.response) {
          setErr(err.message);
        } else if (err.request) {
          setErr(err.message);
        } else {
          setErr(err.message);
        }
      });
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-around">
        {employees.map((employee) => (
          <div  className="card gap-2" style={{ width: '18rem' }} key={employee.id}>
            <img src={employee.eimgurl} className="card-img-top" alt="..." style={{height:'18rem', width:'18rem'}}></img>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{employee.ename}</li>
              <li className="list-group-item">{employee.esurname}</li>
              <li className="list-group-item">{employee.eemail}</li>
              <li className="list-group-item">{employee.edob}</li>
            </ul>
            <div className="card-body">
              <button className="btn btn-danger" onClick={()=>deleteemployee(employee)}>delete</button>
              <button className="btn btn-warning float-end" onClick={()=>edituser(employee)}>edit</button>
            </div>
          </div>
        ))}
      </div>
      <div>
      <Modal
      show={showing}
      onHide = {closeModel}
      backdrop = 'static'
      centered
      className = 'model'
      >
      <Modal.Header>
      <Modal.Title>Edit form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form>
      <div className="mb-4">
      <div className="mb-4">
      <input type="text" className="form-control" {...register("ename")}></input>
      </div>
      <div className="mb-4">
      <input type="text" className="form-control" {...register("esurname")}></input>
      </div>
      <div className="mb-4">
      <input type="text" className="form-control" {...register("eemail")}></input>
      </div>
      <div className="mb-4">
      <input type="text" className="form-control" {...register("edob")}></input>
      </div>
      <div className="mb-4">
      <input type="text" className="form-control" {...register("eimgurl")}></input>
      </div>
      </div>
      </form>
      </Modal.Body>
      <Modal.Footer>
      <button className="btn btn-info" onClick={()=>saveuser()}>Save</button>
      </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
}

export default Employees;
