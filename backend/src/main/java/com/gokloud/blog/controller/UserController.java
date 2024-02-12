package com.gokloud.blog.controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.gokloud.blog.model.*;
import com.gokloud.blog.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:4200")
public class UserController {
	@Autowired
	UserService userSer;
	@PostMapping("/register")
	public User userRegister(@RequestBody User user) {
		return userSer.register(user);
	}
	@PostMapping("/login")
	public User userLogin(@RequestBody User user) {
		return userSer.login(user);
	}
	
}
