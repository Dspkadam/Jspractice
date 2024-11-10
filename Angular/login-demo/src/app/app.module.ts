import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Import the LoginComponent

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent // Declare the LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Include FormsModule in imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }