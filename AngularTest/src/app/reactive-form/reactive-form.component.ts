import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pipe, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  loginForm!: FormGroup;
  isStrongPassword: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })

    // this.loginForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // })

    this.loginForm.get('password')?.valueChanges
      .pipe(
        debounce(() => timer(500)),
      )
      .subscribe(this.validatePassword)
  }

  private validatePassword = (password: string) => {
    console.log('Validating');
    if (password.length > 8) {
      this.isStrongPassword = true;
    } else {
      this.isStrongPassword = false;
    }
  }

}
