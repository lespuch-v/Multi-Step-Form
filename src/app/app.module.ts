import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FormStepOneComponent} from './form-step-one/form-step-one.component';
import {FormStepTwoComponent} from './form-stap-two/form-step-two.component';

const routes: Routes = [
  {path: 'component1', component: FormStepOneComponent},
  {path: 'component2', component: FormStepTwoComponent},
  { path: '', redirectTo: '/component1', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormStepOneComponent,
    FormStepTwoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
