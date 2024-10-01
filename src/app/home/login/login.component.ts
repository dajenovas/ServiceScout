import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // Flag to toggle between sign-in and sign-up modes
  isSignUpMode: boolean = false;

  // Method to switch to Sign-Up mode
  enableSignUpMode(): void {
    this.isSignUpMode = true;
  }

  // Method to switch to Sign-In mode
  enableSignInMode(): void {
    this.isSignUpMode = false;
  }
}
