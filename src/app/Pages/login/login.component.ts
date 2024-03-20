import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(){
    this.loginForm = new FormGroup({
      "userLoginEmail": new FormControl('', Validators.required),
      "userLoginPassword": new FormControl('', Validators.required)
    })
  }
  Entry(){
    console.log('Lox')
  } 
}

