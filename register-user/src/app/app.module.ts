import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { CustomValidatorDirective } from './directives/custom-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CountryCodePipe,
    CustomValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
