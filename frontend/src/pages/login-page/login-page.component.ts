import { Component } from '@angular/core';
import {LoginComponent} from '../../component/login/login.component';
import {RegisterComponent} from '../../component/register/register.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
