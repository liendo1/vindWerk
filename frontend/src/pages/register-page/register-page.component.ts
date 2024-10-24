import { Component } from '@angular/core';
import {LoginComponent} from '../../component/login/login.component';
import {RegisterComponent} from '../../component/register/register.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

}
