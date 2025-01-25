import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task-service.service';
import { UserService } from '../../services/user-service.service';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [FormsModule],
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {
    description = '';
    priority = 'HIGH';
    assignedUserId = 0;
    users: any[] = [];

    constructor(private taskService: TaskService, private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers().subscribe((data) => {
            this.users = data;
        });
    }

    createTask() {
        const task = {
            description: this.description,
            priority: this.priority,
            assignedUser: { id: this.assignedUserId },
        };
        this.taskService.createTask(task).subscribe((response) => {
            console.log('Task created:', response);
            alert('Task created successfully!');
        });
    }
}
