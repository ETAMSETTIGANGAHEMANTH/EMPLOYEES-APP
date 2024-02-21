package com.hemanth.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "singleemp")
public class Employee {

	@Id
	private long id;
	private String ename;
	private String esurname;
	private String eemail;
	private String edob;
	private String eimgurl;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}
	public String getEsurname() {
		return esurname;
	}
	public void setEsurname(String esurname) {
		this.esurname = esurname;
	}
	public String getEemail() {
		return eemail;
	}
	public void setEemail(String eemail) {
		this.eemail = eemail;
	}
	public String getEdob() {
		return edob;
	}
	public void setEdob(String edob) {
		this.edob = edob;
	}
	public String getEimgurl() {
		return eimgurl;
	}
	public void setEimgurl(String eimgurl) {
		this.eimgurl = eimgurl;
	}
	@Override
	public String toString() {
		return "Employee [id =" + id +",ename=" + ename + ", esurname=" + esurname + ", eemail=" + eemail + ", edob=" + edob
				+ ", eimgurl=" + eimgurl + "]";
	}
	
}


