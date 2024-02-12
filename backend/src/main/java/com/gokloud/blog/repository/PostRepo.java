package com.gokloud.blog.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gokloud.blog.model.*;

@Repository
public interface PostRepo extends JpaRepository<Post,Integer>{
	public List<Post> findByUser(User user);
}