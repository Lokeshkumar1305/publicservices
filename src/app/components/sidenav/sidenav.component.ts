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
      name: 'Analytics',
      items: [
        { name: 'Dashboard', icon: 'grid_view', route: '/dashboard' },
        { name: 'Insights & BI', icon: 'bar_chart', route: '/reports' },
      ],
    },
    {
      name: 'Client Services',
      items: [
        { name: 'CRM Hub', icon: 'people', route: '/crm' },
        { name: 'Workflows & Cases', icon: 'business_center', route: '/cases' },
        { name: 'Service Catalog', icon: 'widgets', route: '/services' },
        { name: 'Events & Tickets', icon: 'confirmation_number', route: '/events' },
        { name: 'Bookings', icon: 'event', route: '/bookings' },
      ],
    },
    {
      name: 'Finance & Cloud',
      items: [
        { name: 'Invoices', icon: 'description', route: '/invoices' },
        { name: 'Accounting Recon', icon: 'sync', route: '/reconciliation' },
        { name: 'Document Vault', icon: 'folder', route: '/documents' },
      ],
    },
    {
      name: 'Administration',
      items: [
        { name: 'Provisioning', icon: 'rocket_launch', route: '/onboarding-kyb' },
        { name: 'Merchant Setup', icon: 'storefront', route: '/merchant-onboarding' },
        { name: 'Identity & UAM', icon: 'admin_panel_settings', route: '/uam' },
        { name: 'App Marketplace', icon: 'dashboard_customize', route: '/modules' },
        { name: 'Site Configuration', icon: 'settings', route: '/settings' },
        { name: 'Customer Portal', icon: 'open_in_new', route: '/portal-preview' },
      ],
    },
  ];

  user = {
    name: 'Lokesh Kumar',
    email: 'lokesh@toucanus.com',
    avatar: 'https://i.pravatar.cc/150?u=lokesh',
    role: 'Platform Owner',
  };
}
