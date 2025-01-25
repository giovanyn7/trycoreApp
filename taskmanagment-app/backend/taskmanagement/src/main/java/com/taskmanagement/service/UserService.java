package com.taskmanagement.service;

import com.taskmanagement.model.User;
import com.taskmanagement.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
	
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
    	
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getUsers(User.Role role) {
    	return role != null ? userRepository.findByRole(role) : userRepository.findAll();
    }
}
