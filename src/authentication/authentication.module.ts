import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SigninComponent]
})
export class AuthenticationModule { }
