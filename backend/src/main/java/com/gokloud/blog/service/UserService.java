package com.gokloud.blog.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.gokloud.blog.model.*;
import com.gokloud.blog.repository.*;

@Service
public class UserService {
	@Autowired
	UserRepo userRep;
	@Autowired
	PasswordEncoder passwordencoder;
	public User getUser(String username) {
		Optional<User> userData = userRep.findById(username);
		if(userData.isPresent()) return userData.get();
		return null;
	}
	
	public User register(User user) {
		User u = getUser(user.getUsername());
		if(u!=null) 
			return null;
		user.setPassword(passwordencoder.encode(user.getPassword()));
		userRep.save(user);
		return user;
	}
	
	public User login(User user){
		User u = getUser(user.getUsername());
		boolean matches = passwordencoder.matches(user.getPassword(), u.getPassword());
		if(matches)
			return u;
		return null;
	}
}

