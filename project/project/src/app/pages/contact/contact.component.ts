import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="contact-container">
      <div class="contact-content">
        <h1 class="page-title">Contact Us</h1>
        <div class="divider"></div>
        <p class="subtitle">We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>

        <div class="form-wrapper">
          <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                [(ngModel)]="formData.name"
                placeholder="Enter your name"
                required
                #nameInput="ngModel"
              >
              <div class="error-message" *ngIf="nameInput.invalid && nameInput.touched">
                Name is required
              </div>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="formData.email"
                placeholder="Enter your email"
                required
                email
                #emailInput="ngModel"
              >
              <div class="error-message" *ngIf="emailInput.invalid && emailInput.touched">
                Please enter a valid email
              </div>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                [(ngModel)]="formData.message"
                placeholder="Write your message here..."
                rows="6"
                required
                #messageInput="ngModel"
              ></textarea>
              <div class="error-message" *ngIf="messageInput.invalid && messageInput.touched">
                Message is required
              </div>
            </div>

            <button type="submit" class="submit-button" [disabled]="contactForm.invalid">
              Send Message
            </button>
          </form>

          <div class="success-message" *ngIf="submitted">
            <div class="success-content">
              <div class="success-icon">✓</div>
              <h3>Thank you for reaching out!</h3>
              <p>We've received your message and will get back to you soon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      min-height: calc(100vh - 80px);
      background: linear-gradient(135deg, #F5F5DC 0%, #E8DCC8 100%);
      padding: 4rem 2rem;
    }

    .contact-content {
      max-width: 700px;
      margin: 0 auto;
      animation: fadeIn 0.8s ease-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .page-title {
      font-size: 3.5rem;
      font-weight: 700;
      color: #3E2723;
      text-align: center;
      margin-bottom: 1rem;
      font-family: 'Georgia', serif;
      letter-spacing: 1px;
    }

    .divider {
      width: 100px;
      height: 4px;
      background-color: #3E2723;
      margin: 0 auto 2rem;
      border-radius: 2px;
    }

    .subtitle {
      text-align: center;
      font-size: 1.1rem;
      color: #5D4037;
      margin-bottom: 3rem;
      line-height: 1.6;
    }

    .form-wrapper {
      background-color: white;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    label {
      font-size: 1rem;
      font-weight: 600;
      color: #3E2723;
      margin-bottom: 0.5rem;
    }

    input, textarea {
      padding: 1rem;
      font-size: 1rem;
      border: 2px solid #D7CCC8;
      border-radius: 10px;
      transition: all 0.3s ease;
      font-family: inherit;
      background-color: #FAFAFA;
    }

    input:focus, textarea:focus {
      outline: none;
      border-color: #3E2723;
      background-color: white;
      box-shadow: 0 0 0 3px rgba(62, 39, 35, 0.1);
    }

    textarea {
      resize: vertical;
      min-height: 150px;
    }

    .error-message {
      color: #D32F2F;
      font-size: 0.9rem;
      margin-top: 0.3rem;
      font-weight: 500;
    }

    .submit-button {
      background-color: #3E2723;
      color: #F5F5DC;
      border: none;
      padding: 1.2rem 2.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(62, 39, 35, 0.3);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 1rem;
    }

    .submit-button:hover:not(:disabled) {
      background-color: #5D4037;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(62, 39, 35, 0.4);
    }

    .submit-button:disabled {
      background-color: #BCAAA4;
      cursor: not-allowed;
      box-shadow: none;
    }

    .success-message {
      animation: slideIn 0.5s ease-out;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .success-content {
      text-align: center;
      padding: 2rem;
    }

    .success-icon {
      font-size: 4rem;
      color: #4CAF50;
      margin-bottom: 1rem;
      animation: scaleIn 0.5s ease-out;
    }

    @keyframes scaleIn {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }

    .success-content h3 {
      font-size: 1.8rem;
      color: #3E2723;
      margin-bottom: 0.5rem;
    }

    .success-content p {
      font-size: 1.1rem;
      color: #5D4037;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.5rem;
      }

      .form-wrapper {
        padding: 2rem;
      }
    }

    @media (max-width: 480px) {
      .contact-container {
        padding: 2rem 1rem;
      }

      .page-title {
        font-size: 2rem;
      }

      .form-wrapper {
        padding: 1.5rem;
      }

      .subtitle {
        font-size: 1rem;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
    }, 4000);
  }
}
