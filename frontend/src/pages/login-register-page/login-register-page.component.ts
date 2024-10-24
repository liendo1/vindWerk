import { Component } from '@angular/core';
import {LoginComponent} from '../../component/login/login.component';
import {RegisterComponent} from '../../component/register/register.component';

@Component({
  selector: 'app-login-register-page',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './login-register-page.component.html',
  styleUrl: './login-register-page.component.css'
})
export class LoginRegisterPageComponent {

}
