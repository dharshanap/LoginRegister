import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
  constructor() { 

  }

  ngOnInit(): void {
  this.registerForm=new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$")]),
    // pwd:new FormControl('',[Validators.required,Validators.minLength(8)]),
    // cpwd:new FormControl('',[Validators.required,Validators.minLength(8)]),
    pwd:new FormControl('',[Validators.required,Validators.minLength(8)]),
    cpwd:new FormControl('',[Validators.required,Validators.minLength(8)]),
    
    contactno:new FormControl('')

  })

}
}
