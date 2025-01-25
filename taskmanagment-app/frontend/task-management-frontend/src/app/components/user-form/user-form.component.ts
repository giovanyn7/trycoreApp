import { Component } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [FormsModule],
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
})

export class UserFormComponent {
    name: string = '';
    email: string = '';
    role: string = 'DEVELOPER';

    constructor(private userService: UserService) { }

    createUser() {
        const user = { name: this.name, email: this.email, role: this.role };
        this.userService.createUser(user).subscribe(
            (response) => {
                console.log('User created:', response);
                alert('User created successfully!');
            },
            (error) => {
                console.error('Error creating user:', error);
            }
        );
    }
}
