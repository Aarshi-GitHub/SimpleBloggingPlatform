package com.gokloud.blog.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.gokloud.blog.model.*;
import com.gokloud.blog.service.*;

@RestController
@RequestMapping("/blogs")
@CrossOrigin("http://localhost:4200")
public class PostController {
	@Autowired
	PostService postSer;
	
	@GetMapping("/")
	public List<Post> getPosts(){
		return postSer.getAll();
	}
	
	@GetMapping("/{id}")
	public Post getPost(@PathVariable("id")int id){
		return postSer.getPost(id);
	}
	
	@GetMapping("/user/{username}")
	public List<Post> getPost(@PathVariable("username")String username){
		return postSer.getAll(username);
	}
	
	@PostMapping("/create/{username}")
	public Post createPosts(@PathVariable("username")String username,@RequestBody Post post){
		return postSer.createPost(username, post);
	}
	
	@PutMapping("/update/{id}/{username}")
	public Post updatePost(@PathVariable("username")String username,@PathVariable("id")int id,@RequestBody Post post){
		return postSer.updatePost(username, id, post);
	}
	
	@DeleteMapping("/delete/{id}/{username}")
	public Post deletePost(@PathVariable("username")String username,@PathVariable("id")int id){
		return postSer.deletePost(username, id);
	}
	
}

