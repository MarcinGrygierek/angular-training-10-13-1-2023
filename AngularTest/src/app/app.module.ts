import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { UserActionsComponent } from './user-actions/user-actions.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { DirectivesComponent } from './directives/directives.component';
import { AlertsContainerComponent } from './alerts-container/alerts-container.component';
import { ContentTemplateComponent } from './content-template/content-template.component';
import { SmartDivComponent } from './smart-div/smart-div.component';
import { SmartComponentComponent } from './smart-component/smart-component.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { RandomNumberComponent } from './random-number/random-number.component';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppButtonComponent,
    UserActionsComponent,
    AlertButtonComponent,
    DirectivesComponent,
    AlertsContainerComponent,
    ContentTemplateComponent,
    SmartDivComponent,
    SmartComponentComponent,
    TemplateVariablesComponent,
    RandomNumberComponent,
    RandomNumbersComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
