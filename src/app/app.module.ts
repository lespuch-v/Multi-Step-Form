import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormStepOneComponent } from './form-step-one/form-step-one.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormStepOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
