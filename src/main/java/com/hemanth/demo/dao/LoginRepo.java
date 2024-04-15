package com.hemanth.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hemanth.demo.model.Login;

public interface LoginRepo extends JpaRepository<Login,Long>{

	Login findByEmail(String username);

}
