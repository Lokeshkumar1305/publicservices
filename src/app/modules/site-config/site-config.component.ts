import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-site-config',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './site-config.component.html',
  styleUrl: './site-config.component.scss',
})
export class SiteConfigComponent implements OnInit {
  activeTab: string = 'general';

  organizationDetails = {
    name: 'Sterling Legal Partners',
    industry: 'Law Firm',
    email: 'info@sterlinglegal.com',
    phone: '+1 (555) 234-5678',
    tagline: 'Excellence in Legal Services',
    address: '500 Market Street, Suite 1200, San Francisco, CA 94105',
  };

  branding = {
    logo: null,
    domain: 'www.yourfirm.com',
    primaryColor: '#6366f1',
    secondaryColor: '#8b5cf6',
  };

  templates = [
    { title: 'Law Firm', description: 'Case management, client billing, document vault', applied: true },
    { title: 'Consulting Firm', description: 'Timesheet, invoice, reports, CRM', applied: false },
    { title: 'Event Management', description: 'Event booking, vendor payments, budget tracking', applied: false },
    { title: 'Carpenter / Contractor', description: 'Work orders, material tracking, site management', applied: false },
    { title: 'CA Firm', description: 'Tax filing, compliance, document management', applied: false },
    { title: 'Agency', description: 'Project management, client reporting, billing', applied: false },
  ];

  roles = [
    { name: 'Admin', description: 'Full access to all modules and settings' },
    { name: 'Manager', description: 'Can manage cases, clients, and team members' },
    { name: 'Operator', description: 'Can handle day-to-day operations' },
    { name: 'Viewer', description: 'Read-only access to dashboards and reports' },
  ];

  industries = ['Law Firm', 'Consulting Firm', 'Real Estate', 'Education', 'Healthcare', 'Construction'];

  ngOnInit(): void { }

  saveGeneral() {
    console.log('General settings saved:', this.organizationDetails);
  }

  saveBranding() {
    console.log('Branding settings saved:', this.branding);
  }

  applyTemplate(template: any) {
    this.templates.forEach(t => (t.applied = false));
    template.applied = true;
  }
}
