import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  declarations: [
    PageTitleComponent
  ],
  exports: [
    PageTitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
