import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
//import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

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
  private supabase: SupabaseClient;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.authForm = this.createForm();
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
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

  async onSubmit(): Promise<void> {
    if (this.authForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      const formData = this.authForm.value;

      try {
        if (this.isLogin) {
          const { data, error } = await this.supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password
          });

          if (error) throw error;

          this.router.navigate(['/dashboard']);
        } else {
          const { data: authData, error: authError } = await this.supabase.auth.signUp({
            email: formData.email,
            password: formData.password
          });

          if (authError) throw authError;

          if (authData.user) {
            const { error: profileError } = await this.supabase
              .from('profiles')
              .insert({
                id: authData.user.id,
                name: formData.name,
                email: formData.email
              });

            if (profileError) throw profileError;

            const petAge = new Date().getFullYear() - parseInt(formData.petYear);
            const { error: petError } = await this.supabase
              .from('pets')
              .insert({
                owner_id: authData.user.id,
                name: formData.petName,
                breed: formData.petBreed,
                age: petAge,
                vaccination_status: 'Up to Date'
              });

            if (petError) throw petError;

            const { error: activityError } = await this.supabase
              .from('activities')
              .insert({
                user_id: authData.user.id,
                activity_date: new Date().toISOString().split('T')[0],
                activity_type: 'Account Created',
                description: `Welcome to PetCare! Added ${formData.petName} to your profile`,
                status: 'Completed'
              });

            if (activityError) throw activityError;

            this.router.navigate(['/dashboard']);
          }
        }
      } catch (error: any) {
        this.errorMessage = error.message || 'An error occurred. Please try again.';
      } finally {
        this.loading = false;
      }
    }
  }
}
