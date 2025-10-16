import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserLoginService } from './user-login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
   private userService:UserLoginService
  ) {
    
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
login() {
    if (this.loginForm.valid) {
      const loginPayload = this.loginForm.value;

      this.userService.login(loginPayload).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          if (response?.token) {
            localStorage.setItem('authToken', response.token);
          }
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Login failed', err);
          alert('Invalid credentials or server error');
        }
      });

    } else {
      alert('Please fill in all required fields');
    }
  }
}
