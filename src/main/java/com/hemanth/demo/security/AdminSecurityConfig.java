//package com.hemanth.demo.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationProvider;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
//
//@Configuration
//@EnableWebSecurity
//public class AdminSecurityConfig {
//	
//	@Autowired
//	public CustomUserDetailsService userDetailsService;
//	
//	@Bean
//	public AuthenticationProvider authprovider() {
//		
//		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//		 provider.setUserDetailsService(userDetailsService);
//		 provider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
//		return provider;
//	}
//	
//	
////	@Bean
////	public SecurityFilterChain adminsecurityFilterChain(HttpSecurity http) throws Exception {
//////		http
//////		.csrf().disable()
//////		.authorizeRequests()
//////		 .requestMatchers("/login").permitAll() // Allow login without authentication 
//////         .anyRequest().authenticated() // Any
//////         .and()
//////         .formLogin()
//////         .loginPage("http://localhost:3000/login").permitAll()
//////         .defaultSuccessUrl("http://localhost:3000/addemployee")
//////         .and()
//////         .logout().invalidateHttpSession(true)
//////         .clearAuthentication(true)
//////         .logoutRequestMatcher(new AntPathRequestMatcher("/logout"));
////		return http.build();
////	}
//}
