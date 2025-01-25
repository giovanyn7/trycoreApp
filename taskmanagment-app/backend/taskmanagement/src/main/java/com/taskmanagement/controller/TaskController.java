package com.taskmanagement.controller;

import com.taskmanagement.model.Task;
import com.taskmanagement.model.User;
import com.taskmanagement.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @PutMapping("/{id}/status")
    public Task updateTaskStatus(@PathVariable Long id, @RequestParam Task.Status status) {
        return taskService.updateTaskStatus(id, status);
    }

    @GetMapping
    public List<Task> getTasks(@RequestParam(required = false) Task.Status status, @RequestParam(required = false) User user) {
        return taskService.getTasks(status, user);
    }
}
