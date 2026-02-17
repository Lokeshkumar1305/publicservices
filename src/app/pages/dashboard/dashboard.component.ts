import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  metrics = [
    { label: 'Total Clients', value: '7', icon: 'groups', trend: '12% from last month', trendUp: true, color: 'blue' },
    { label: 'Active Cases', value: '5', icon: 'business_center', color: 'orange' },
    { label: 'Bookings', value: '4', icon: 'calendar_today', subtext: 'Upcoming', color: 'purple' },
    { label: 'Revenue', value: '$3,526.25', icon: 'attach_money', trend: '8% from last month', trendUp: true, color: 'green' },
    { label: 'Pending', value: '2', icon: 'description', subtext: 'Invoices', color: 'red' },
    { label: 'Total Cases', value: '7', icon: 'trending_up', color: 'cyan' },
  ];

  recentCases = [
    { title: 'TechCorp Merger Agreement', subtitle: 'Sarah Mitchell · Feb 16, 2026', status: 'in progress' },
    { title: 'Greenfield IP Dispute', subtitle: 'James Rodriguez · Feb 16, 2026', status: 'open' },
    { title: 'Chen Estate Planning', subtitle: 'Emily Chen · Feb 16, 2026', status: 'pending review' },
    { title: 'Blue Edge Employment Contract', subtitle: 'Michael Thompson · Feb 16, 2026', status: 'open' },
    { title: 'Sharma Immigration Case', subtitle: 'Priya Sharma · Feb 16, 2026', status: 'in progress' },
  ];

  recentBookings = [
    { client: 'Sarah Mitchell', subtitle: 'Sarah Mitchell · Feb 16, 2026', status: 'confirmed' },
    { client: 'Michael Thompson', subtitle: 'Michael Thompson · Feb 16, 2026', status: 'pending' },
    { client: 'Amanda Foster', subtitle: 'Amanda Foster · Feb 16, 2026', status: 'confirmed' },
  ];

  recentInvoices = [
    { client: 'Sarah Mitchell', subtitle: 'Sarah Mitchell · Feb 16, 2026', status: 'paid' },
    { client: 'James Rodriguez', subtitle: 'James Rodriguez · Feb 16, 2026', status: 'paid' },
    { client: 'Emily Chen', subtitle: 'Emily Chen · Feb 16, 2026', status: 'sent' },
  ];

  constructor() { }

  ngOnInit(): void { }

  getStatusClass(status: string): string {
    return status.replace(' ', '-').toLowerCase();
  }
}
