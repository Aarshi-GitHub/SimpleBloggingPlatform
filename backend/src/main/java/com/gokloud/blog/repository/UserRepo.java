package com.gokloud.blog.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.gokloud.blog.model.*;


@Repository
public interface UserRepo extends JpaRepository<User,String>{
	@Query("Select u from User u where u.username=:uname and u.password=:pass")
	public User findUser(@Param("uname")String uname,@Param("pass")String pass);
}