//package com.hemanth.demo.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import com.hemanth.demo.dao.LoginRepo;
//import com.hemanth.demo.model.Login;
//
//@Service
//public class CustomUserDetailsService implements UserDetailsService {
//	
//	@Autowired
//	private LoginRepo repo;
//
//	@Override
//	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//		// TODO Auto-generated method stub
//		Login cred  = repo.findByEmail(email);
//		if(cred == null) {
//			throw new UsernameNotFoundException("No User Found For The Given Email.");
//		}
//		return new CustomUserDetails(cred);
//	}
//
//}
