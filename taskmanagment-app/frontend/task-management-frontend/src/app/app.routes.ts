import { Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'users', component: UserFormComponent },
    { path: 'tasks/create', component: TaskFormComponent },
    { path: 'tasks', component: TaskListComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
