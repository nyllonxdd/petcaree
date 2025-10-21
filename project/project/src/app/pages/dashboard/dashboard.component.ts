import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

interface Pet {
  id: string;
  name: string;
  breed: string;
  age: number;
  photo_url: string;
  vaccination_status: string;
}

interface Activity {
  id: string;
  activity_date: string;
  activity_type: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private supabase: SupabaseClient;
  userName: string = 'User';
  pets: Pet[] = [];
  activities: Activity[] = [];
  sidebarCollapsed = false;

  constructor(private router: Router) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async ngOnInit() {
    await this.loadUserData();
    await this.loadPets();
    await this.loadActivities();
  }

  async loadUserData() {
    const { data: { user } } = await this.supabase.auth.getUser();

    if (user) {
      const { data: profile } = await this.supabase
        .from('profiles')
        .select('name')
        .eq('id', user.id)
        .maybeSingle();

      if (profile) {
        this.userName = profile.name;
      }
    }
  }

  async loadPets() {
    const { data: { user } } = await this.supabase.auth.getUser();

    if (user) {
      const { data, error } = await this.supabase
        .from('pets')
        .select('*')
        .eq('owner_id', user.id)
        .order('created_at', { ascending: false });

      if (data) {
        this.pets = data;
      }
    }
  }

  async loadActivities() {
    const { data: { user } } = await this.supabase.auth.getUser();

    if (user) {
      const { data, error } = await this.supabase
        .from('activities')
        .select('*')
        .eq('user_id', user.id)
        .order('activity_date', { ascending: false })
        .limit(5);

      if (data) {
        this.activities = data;
      }
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  async logout() {
    await this.supabase.auth.signOut();
    this.router.navigate(['/home']);
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  getVaccinationIcon(status: string): string {
    return status === 'Up to Date' ? '✔' : '⚠';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}
