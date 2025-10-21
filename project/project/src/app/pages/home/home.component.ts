import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-container">
      <div class="content-wrapper">
        <div class="left-section">
          <div class="hero-content">
            <h1 class="logo-large">PetCare</h1>
            <p class="tagline">Care for your pets, anytime, anywhere!</p>
            <p class="description">
              Your trusted companion in providing the best care for your furry friends.
              Professional services, expert advice, and a loving community.
            </p>
            <button class="cta-button" (click)="navigateToAbout()">Let's Go</button>
          </div>
        </div>

        <div class="right-section">
          <div class="image-collage">
            <div class="image-card card-1">
              <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Happy dog">
            </div>
            <div class="image-card card-2">
              <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Cute cat">
            </div>
            <div class="image-card card-3">
              <img src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Puppy">
            </div>
            <div class="image-card card-4">
              <img src="https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Rabbit">
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      min-height: calc(100vh - 80px);
      background: linear-gradient(135deg, #F5F5DC 0%, #E8DCC8 100%);
      padding: 3rem 2rem;
    }

    .content-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .left-section {
      padding: 2rem;
    }

    .hero-content {
      animation: fadeInUp 0.8s ease-out;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .logo-large {
      font-size: 4rem;
      font-weight: 700;
      color: #3E2723;
      margin-bottom: 1rem;
      font-family: 'Georgia', serif;
      letter-spacing: 2px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .tagline {
      font-size: 1.5rem;
      color: #5D4037;
      margin-bottom: 1.5rem;
      font-style: italic;
      font-weight: 500;
    }

    .description {
      font-size: 1.1rem;
      color: #6D4C41;
      line-height: 1.8;
      margin-bottom: 2.5rem;
    }

    .cta-button {
      background-color: #3E2723;
      color: #F5F5DC;
      border: none;
      padding: 1.2rem 3.5rem;
      font-size: 1.3rem;
      font-weight: 600;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(62, 39, 35, 0.3);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .cta-button:hover {
      background-color: #5D4037;
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(62, 39, 35, 0.4);
    }

    .cta-button:active {
      transform: translateY(-1px);
    }

    .right-section {
      padding: 2rem;
    }

    .image-collage {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      animation: fadeIn 1s ease-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .image-card {
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
      background-color: white;
    }

    .image-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
    }

    .image-card img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      display: block;
    }

    .card-1 {
      animation-delay: 0.2s;
    }

    .card-2 {
      animation-delay: 0.4s;
    }

    .card-3 {
      animation-delay: 0.6s;
    }

    .card-4 {
      animation-delay: 0.8s;
    }

    @media (max-width: 968px) {
      .content-wrapper {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .logo-large {
        font-size: 3rem;
      }

      .tagline {
        font-size: 1.3rem;
      }

      .image-card img {
        height: 200px;
      }
    }

    @media (max-width: 480px) {
      .logo-large {
        font-size: 2.5rem;
      }

      .tagline {
        font-size: 1.1rem;
      }

      .cta-button {
        padding: 1rem 2.5rem;
        font-size: 1.1rem;
      }

      .image-collage {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToAbout(): void {
    this.router.navigate(['/auth']);
  }
}
