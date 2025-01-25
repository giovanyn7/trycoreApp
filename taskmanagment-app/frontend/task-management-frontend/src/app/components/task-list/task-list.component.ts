import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    imports: [FormsModule, CommonModule],
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
    tasks: any[] = [];
    status: string = '';
    userId: number = 0;

    constructor(private taskService: TaskService) { }

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        this.taskService.getTasks(this.status, this.userId).subscribe((data) => {
            this.tasks = data;
        });
    }
}
