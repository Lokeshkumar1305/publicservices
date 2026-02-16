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
      items: [{ name: 'Dashboard', icon: 'grid_view', route: '/dashboard', hasDot: false }],
    },
    {
      name: 'Modular OS',
      items: [
        { name: 'Inventory', icon: 'inventory_2', route: '/inventory', hasDot: false },
        { name: 'Cases', icon: 'gavel', route: '/cases', hasDot: false },
        { name: 'Billing', icon: 'receipt_long', route: '/billing', hasDot: false },
        {
          name: 'Reconciliation',
          icon: 'account_balance_wallet',
          route: '/reconciliation',
          hasDot: false,
        },
      ],
    },
    {
      name: 'Infrastructure',
      items: [{ name: 'Provisioning', icon: 'layers', route: '/onboarding-kyb', hasDot: false }],
    },
  ];

  user = {
    name: 'Suman Dhumale',
    email: 'suman@toucanus.com',
    avatar: 'assets/images/user-avatar.jpg',
    role: 'superadmin',
  };
}
