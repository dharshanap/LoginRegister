import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
this.loginForm=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$")]),
  pwd:new FormControl('',[Validators.required,Validators.minLength(8)])
 //pwd:new FormControl('',[Validators.required,Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")])
})

  }

}
