import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLogin = true;
  authForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.authForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      petName: [''],
      petBreed: [''],
      petYear: ['']
    });
  }

  toggleForm(): void {
    this.isLogin = !this.isLogin;
    this.authForm.reset();

    if (this.isLogin) {
      this.authForm.get('name')?.clearValidators();
      this.authForm.get('petName')?.clearValidators();
      this.authForm.get('petBreed')?.clearValidators();
      this.authForm.get('petYear')?.clearValidators();
    } else {
      this.authForm.get('name')?.setValidators([Validators.required]);
      this.authForm.get('petName')?.setValidators([Validators.required]);
      this.authForm.get('petBreed')?.setValidators([Validators.required]);
      this.authForm.get('petYear')?.setValidators([Validators.required, Validators.min(1900)]);
    }

    this.authForm.get('name')?.updateValueAndValidity();
    this.authForm.get('petName')?.updateValueAndValidity();
    this.authForm.get('petBreed')?.updateValueAndValidity();
    this.authForm.get('petYear')?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.authForm.valid) {
      const formData = this.authForm.value;

      if (this.isLogin) {
        console.log('Login:', {
          email: formData.email,
          password: formData.password
        });
      } else {
        console.log('Signup:', formData);
      }
    }
  }
}
