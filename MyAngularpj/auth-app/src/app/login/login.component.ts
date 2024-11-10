// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    console.log("Login Details:", { email: this.email, password: this.password });
    // Add login logic here
  }
}
