import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Here you would typically send the credentials to your backend for authentication
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    // Reset the form after submission
    this.username = '';
    this.password = '';
  }
}