import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  stats = [
    { label: 'Revenue (MTD)', value: '$ 14,250', icon: 'trending_up', trend: '+12%' },
    { label: 'Active Matters', value: '24 Open Cases', icon: 'gavel', trend: 'Stable' },
    { label: 'Client Retention', value: '98.5%', icon: 'group_add', trend: '+2%' },
    { label: 'Billable Hours', value: '1,240h', icon: 'timer', trend: '+5%' },
  ];

  modules = [
    { name: 'Case Management', status: 'Optimal', health: 98, icon: 'assignment_turned_in' },
    { name: 'Financial Billing', status: 'Optimal', health: 100, icon: 'payments' },
    { name: 'Document Vault', status: 'Optimal', health: 95, icon: 'lock' },
    { name: 'Client CRM', status: 'Optimal', health: 92, icon: 'contact_page' },
  ];

  recentActivity = [
    { text: 'Case #102 Updated', time: '10 mins ago' },
    { text: 'New Client: J. Doe', time: '1 hr ago' },
    { text: 'Invoice #99 Approved', time: '2 hrs ago' },
  ];

  pendingActions = [
    { text: 'Sign Retainer (Doe vs State)', action: 'SIGN' },
    { text: 'Approve Invoice #99', action: 'APPROVE' },
    { text: 'Review Evidence Folder', action: 'REIVEW' },
  ];
}
