import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  menuGroups = [
    {
      name: 'Overview',
      items: [
        { name: 'Dashboard', icon: 'grid_view', route: '/dashboard' },
      ],
    },
    {
      name: 'Operations',
      items: [
        { name: 'CRM', icon: 'group', route: '/crm' },
        { name: 'Cases', icon: 'business_center', route: '/cases' },
        { name: 'Services', icon: 'widgets', route: '/services' },
        { name: 'Bookings', icon: 'event', route: '/bookings' },
      ],
    },
    {
      name: 'Finance & Docs',
      items: [
        { name: 'Invoices', icon: 'description', route: '/invoices' },
        { name: 'Onboarding', icon: 'person_add', route: '/onboarding-kyb' },
        { name: 'Documents', icon: 'folder', route: '/documents' },
      ],
    },
    {
      name: 'Insights & System',
      items: [
        { name: 'Reports', icon: 'bar_chart', route: '/reports' },
        { name: 'Modules', icon: 'dashboard_customize', route: '/modules' },
        { name: 'Settings', icon: 'settings', route: '/settings' },
      ],
    },
  ];

  user = {
    name: 'Lokesh Kumar',
    email: 'lokesh@toucanus.com',
    avatar: 'https://i.pravatar.cc/150?u=suman',
    role: 'superadmin',
  };
}
