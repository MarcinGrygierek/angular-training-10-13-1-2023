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

@NgModule({
  declarations: [
    AppComponent,
    AppButtonComponent,
    UserActionsComponent,
    AlertButtonComponent,
    DirectivesComponent,
    AlertsContainerComponent,
    ContentTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
