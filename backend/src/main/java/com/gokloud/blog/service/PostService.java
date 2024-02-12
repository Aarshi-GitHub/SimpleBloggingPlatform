package com.gokloud.blog.service;

import java.util.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.gokloud.blog.model.*;
import com.gokloud.blog.repository.PostRepo;

@Service
public class PostService {
	@Autowired
	PostRepo postRep;
	@Autowired
	UserService userSer;
	
	public List<Post> getAll(){
		return postRep.findAll();
	}
	
	public List<Post> getAll(String username){
		User user = userSer.getUser(username);
		return postRep.findByUser(user);
	}
	
	public Post createPost(String username,Post post) {
		User user = userSer.getUser(username);
		post.setUser(user);
		post.setDate(new Date());
		postRep.save(post);
		return post;
	}
	
	public Post getPost(int id) {
		Optional<Post> postData = postRep.findById(id);
		if(postData.isPresent()) return postData.get();
		return null;
	}
	
	public Post updatePost(String username,int id,Post post){
		if(getPost(id)==null)
			return null;
		User postUser = getPost(id).getUser();
		Post p = getPost(id);
		if(username.equals(postUser.getUsername())) {
			p.setTitle(post.getTitle());
			p.setContent(post.getContent());
			p.setImageurl(post.getImageurl());
			postRep.save(p);
			return p;
		}
		return p;
	}
	
	public Post deletePost(String username,int id){
		if(getPost(id)==null)
			return null;
		User postUser = getPost(id).getUser();
		if(username.equals(postUser.getUsername())) {
			Post p = getPost(id);
			postRep.deleteById(id);
			return p;
		}
		return null;
	}
}
