import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <div class="about-content">
        <h1 class="page-title">About Us</h1>
        <div class="divider"></div>

        <div class="mission-section">
          <h2 class="section-title">Our Mission</h2>
          <p class="mission-text">
            At PetCare, we believe that every pet deserves the highest quality of care and attention.
            Founded with a passion for animal welfare, our mission is to provide comprehensive,
            compassionate, and professional pet care services that give pet owners peace of mind.
          </p>
          <p class="mission-text">
            We understand that pets are not just animals—they're beloved family members. That's why
            we've built a trusted platform connecting pet owners with expert care, resources, and a
            supportive community. Whether you need grooming, veterinary guidance, training tips, or
            simply a place to share your pet's journey, PetCare is here for you, anytime, anywhere.
          </p>
          <p class="mission-text">
            Our team of dedicated professionals and animal lovers work tirelessly to ensure your pets
            receive the love, care, and attention they deserve. We're committed to making pet ownership
            a joyful, rewarding experience for both you and your furry companions.
          </p>
        </div>

        <div class="values-section">
          <h2 class="section-title">Our Values</h2>
          <div class="values-grid">
            <div class="value-card">
              <h3>Compassion</h3>
              <p>Every pet is treated with love and kindness</p>
            </div>
            <div class="value-card">
              <h3>Excellence</h3>
              <p>We strive for the highest standards in pet care</p>
            </div>
            <div class="value-card">
              <h3>Trust</h3>
              <p>Building lasting relationships with pet families</p>
            </div>
            <div class="value-card">
              <h3>Community</h3>
              <p>Supporting pet owners every step of the way</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      min-height: calc(100vh - 80px);
      background: linear-gradient(135deg, #F5F5DC 0%, #E8DCC8 100%);
      padding: 4rem 2rem;
    }

    .about-content {
      max-width: 900px;
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
      margin: 0 auto 3rem;
      border-radius: 2px;
    }

    .mission-section {
      background-color: white;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      margin-bottom: 3rem;
    }

    .section-title {
      font-size: 2rem;
      font-weight: 600;
      color: #3E2723;
      margin-bottom: 1.5rem;
      font-family: 'Georgia', serif;
    }

    .mission-text {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #5D4037;
      margin-bottom: 1.5rem;
      text-align: justify;
    }

    .mission-text:last-child {
      margin-bottom: 0;
    }

    .values-section {
      padding: 2rem 0;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      margin-top: 2rem;
    }

    .value-card {
      background-color: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      text-align: center;
    }

    .value-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }

    .value-card h3 {
      font-size: 1.5rem;
      color: #3E2723;
      margin-bottom: 0.8rem;
      font-weight: 600;
    }

    .value-card p {
      font-size: 1rem;
      color: #6D4C41;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.5rem;
      }

      .mission-section {
        padding: 2rem;
      }

      .values-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .about-container {
        padding: 2rem 1rem;
      }

      .page-title {
        font-size: 2rem;
      }

      .section-title {
        font-size: 1.6rem;
      }

      .mission-section {
        padding: 1.5rem;
      }

      .mission-text {
        font-size: 1rem;
      }
    }
  `]
})
export class AboutComponent {}
