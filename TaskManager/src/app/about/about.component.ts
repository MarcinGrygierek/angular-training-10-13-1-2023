import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  contact = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  })

  ngOnInit(): void {
  }

}
