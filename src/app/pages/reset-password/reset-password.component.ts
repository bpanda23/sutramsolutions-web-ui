import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResetPasswordService } from './reset-password.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [RouterModule,CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private resetPasswordService: ResetPasswordService
  ) {}

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required, Validators.minLength(3)]],
      newPassword: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required]]
    });
  }
  resetPassword(): void {
    if (this.resetPasswordForm.valid) {
      const formData = this.resetPasswordForm.value;
      console.log('Reset Password Form Data:', formData);
    } else {
      console.log('Form is invalid!');
    }
  }
}


