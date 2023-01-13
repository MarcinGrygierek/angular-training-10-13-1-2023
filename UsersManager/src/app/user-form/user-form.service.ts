import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Injectable()
export class UserFormService {
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    console.log('UsersFormService init')
   }
}
