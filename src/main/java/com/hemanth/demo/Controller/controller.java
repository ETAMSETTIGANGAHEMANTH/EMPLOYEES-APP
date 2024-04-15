package com.hemanth.demo.Controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hemanth.demo.dao.DeletedObjectRepo;
import com.hemanth.demo.dao.ObjectRepo;
import com.hemanth.demo.model.DeletedEmployee;
import com.hemanth.demo.model.Employee;
import com.hemanth.demo.model.Login;



@RestController
public class controller {
 
@Autowired
ObjectRepo repo;

@Autowired
DeletedObjectRepo deletedrepo;

@RequestMapping("/")
public String home() {
	return "Home.jsp";
}

@RequestMapping("/home")
public String Home() {
	return "Home.jsp";
}


@CrossOrigin(origins = "http://localhost:3000")
@PostMapping("put")
public void put(@RequestBody Employee obj) {
	  try {
          repo.save(obj);
          System.out.println("The data was saved");
      } catch (Exception e) {
          // Handle the exception appropriately, e.g., log it or return an error response
          System.err.println("Error saving data: " + e.getMessage());
      }
}

@CrossOrigin(origins = "http://localhost:3000")
@GetMapping("get")
public List<Employee> get(){
	try {
	List<Employee> list = (List<Employee>)repo.findAll();
	return list;
	}
	catch(Exception e) {
		System.out.print("Error Saving the data :"+e.getMessage());
		return Collections.emptyList();
	}
}

@CrossOrigin(origins = "http://localhost:3000")
@PostMapping("updating")
public void updating(@RequestBody Employee obd) {
	 long id = obd.getId();
	    String newename = obd.getEname();
	    String newesurname = obd.getEsurname();
	    String newemail = obd.getEemail();
	    String newedob = obd.getEdob();
	    String neweimgurl = obd.getEimgurl();
	    Employee obj = repo.findByid(id);
	    
	    if (newename != null && !newename.isEmpty()) {
	        obj.setEname(newename);
	    }
	    if (newesurname != null && !newesurname.isEmpty()) {
	        obj.setEsurname(newesurname);
	    }
	    if (newemail != null && !newemail.isEmpty()) {
	        obj.setEemail(newemail);
	    }
	    if (newedob != null && !newedob.isEmpty()) {
	        obj.setEdob(newedob);
	    }
	    if (neweimgurl != null && !neweimgurl.isEmpty()) {
	        obj.setEimgurl(neweimgurl);    
	    }
	    repo.save(obj);
	    
	    System.out.println("The data was updated successfully.");
	
}

@CrossOrigin(origins = "http://localhost:3000")
@DeleteMapping("delete")
public void delete(@RequestBody Employee obj) {
	try {
		
	repo.delete(obj);
	System.out.print("the object was deleted.");
	}
	catch(Exception e) {
		System.out.print("the error is :"+e.getMessage());
	}
}

@CrossOrigin(origins = "http://localhost:3000")
@PostMapping("inserting")
public void inserting(@RequestBody DeletedEmployee obj) {
	try {
	deletedrepo.save(obj);
	System.out.print("the object was inserted into deleted table successfully.");
	}
	catch(Exception e){
		System.out.print("the error occured is :" + e.getMessage());
	}
}
@CrossOrigin(origins = "http://localhost:3000")
@GetMapping("gettingdeleted")
public List<DeletedEmployee> gettingdelted(){
	try {
		List<DeletedEmployee> lis = (List<DeletedEmployee>)deletedrepo.findAll();
		return lis;
	}
	catch(Exception e) {
		System.out.print("error in getting the data :"+e.getMessage());
		return Collections.emptyList();
	}
}
@CrossOrigin(origins = "http://localhost:3000")
@DeleteMapping("deleteperminent")
public void deleteperminent(@RequestBody DeletedEmployee obj) {
	try {
		deletedrepo.delete(obj);
	}
	catch(Exception e) {
		System.out.print("the error occured is :"+e.getMessage());
	}
}

@CrossOrigin(origins = "http://localhost:3000")
@PostMapping("login")
public void login(@RequestBody Login cred) {
	
	System.out.println("the email is  :"+cred.getEmail() + "the password is :"+cred.getPassword());
}







}
