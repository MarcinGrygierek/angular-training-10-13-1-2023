import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { UserFormService } from './user-form.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [UserFormService]
})
export class UserFormComponent {
  constructor(private usersService: UsersService, private userFormService: UserFormService) { }

  public handleSubmit = () => {
    const { name, surname } = this.userFormService.form.value;
    this.usersService.addUser(name, surname);
  }

  get form() {
    return this.userFormService.form;
  }
}
