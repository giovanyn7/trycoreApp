package com.taskmanagement.service;

import com.taskmanagement.model.Task;
import com.taskmanagement.model.User;
import com.taskmanagement.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
	
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public Task updateTaskStatus(Long id, Task.Status status) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Tarea no encontrada"));
        task.setStatus(status);
        return taskRepository.save(task);
    }

    public List<Task> getTasks(Task.Status status, User user) {
        if (status != null) {
            return taskRepository.findByStatus(status);
        }
        if (user != null) {
            return taskRepository.findByAssignedUser(user);
        }
        return taskRepository.findAll();
    }
}
