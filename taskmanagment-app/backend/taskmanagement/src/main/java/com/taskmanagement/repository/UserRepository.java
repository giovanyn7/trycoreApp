package com.taskmanagement.repository;

import com.taskmanagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
	
    List<User> findByRole(User.Role role);
}
