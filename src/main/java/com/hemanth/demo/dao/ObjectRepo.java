package com.hemanth.demo.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.hemanth.demo.model.Employee;


public interface ObjectRepo extends CrudRepository<Employee,Long>{
	
	Employee findByid(Long id);
}
