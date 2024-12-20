import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 signupForm : FormGroup;

 constructor(private fb : FormBuilder) { 
  this.signupForm = this.fb.group({
    username: ['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
 }

 ngOnInit(): void {}

onSignup(){
  if(this.signupForm.valid){
    console.log("Signup Details:", this.signupForm.value);
  }
}
}


