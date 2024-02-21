package com.hemanth.demo.dao;

import org.springframework.data.repository.CrudRepository;

import com.hemanth.demo.model.DeletedEmployee;

public interface DeletedObjectRepo extends CrudRepository<DeletedEmployee,Long>{

}
