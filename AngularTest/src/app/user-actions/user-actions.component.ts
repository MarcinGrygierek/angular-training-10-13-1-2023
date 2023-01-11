import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss']
})
export class UserActionsComponent {

  @Input()
  user!: User;

  
  handleMailClick() {
    console.log(this);
    console.log('Mailing', this.user.email)
  }

  handlePhoneClick = () => {
    console.log('Phoninh', this.user.tel)
  }

}
