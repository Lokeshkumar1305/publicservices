import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';

interface Module {
  id: string;
  name: string;
  icon: string;
  description: string;
  selected: boolean;
}

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatChipsModule,
    FormsModule
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
})
export class OnboardingComponent implements OnInit {
  activeFilter: string = 'all';

  // Advanced Module Marketplace (Zoho-style)
  availableModules: Module[] = [
    { id: 'crm', name: 'CRM', icon: 'people', description: 'Lead & Contact Management', selected: true },
    { id: 'cases', name: 'Cases', icon: 'business_center', description: 'Project & Workflow Tracking', selected: true },
    { id: 'payments', name: 'Payments', icon: 'payments', description: 'Stripe & PayPal Integration', selected: false },
    { id: 'recon', name: 'Auto Recon', icon: 'sync', description: 'Automated Account Reconciliation', selected: false },
    { id: 'reports', name: 'BI Reports', icon: 'bar_chart', description: 'Advanced Analytics & Insights', selected: false },
    { id: 'nms', name: 'NMS', icon: 'notifications', description: 'Notification Management system', selected: false },
    { id: 'dms', name: 'DMS', icon: 'folder', description: 'Document Management System', selected: false },
    { id: 'event', name: 'Events', icon: 'event', description: 'Booking & Event Management', selected: false },
  ];

  allRequests: any[] = [
    { firmName: 'Innovate Labs', industry: 'Law Firm', email: 'contact@innovate.com', status: 'completed', modules: ['CRM', 'DMS'] },
    { firmName: 'Greenfield Legal', industry: 'Media', email: 'office@greenfield.com', status: 'pending', modules: ['Events', 'Payments'] },
  ];

  filteredRequests: any[] = [];
  showWizard: boolean = false;

  newFirm = {
    name: '',
    industry: 'Law Firm',
    email: '',
    subdomain: '',
    customDomain: '',
    primaryColor: '#6366f1',
    logo: ''
  };

  industries = ['Law Firm', 'Hospital', 'Media', 'Carpenter / Contractor', 'CA Firm', 'Agency'];

  constructor() { }

  ngOnInit(): void {
    this.filterRequests('all');
  }

  filterRequests(status: string) {
    this.activeFilter = status;
    if (status === 'all') {
      this.filteredRequests = this.allRequests;
    } else {
      this.filteredRequests = this.allRequests.filter(req => req.status === status);
    }
  }

  toggleWizard() {
    this.showWizard = !this.showWizard;
  }

  getSelectedModules() {
    return this.availableModules.filter(m => m.selected).map(m => m.name);
  }

  deployFirm() {
    const freshRequest = {
      firmName: this.newFirm.name,
      industry: this.newFirm.industry,
      email: this.newFirm.email,
      status: 'pending',
      modules: this.getSelectedModules(),
      joined: 'Feb 17, 2026'
    };

    this.allRequests.unshift(freshRequest);
    this.filterRequests(this.activeFilter);
    this.toggleWizard();

    alert(`PROVISIONING STARTED: ${this.newFirm.name} environment is being built with ${freshRequest.modules.length} modules.`);

    // Reset wizard
    this.newFirm = { name: '', industry: 'Law Firm', email: '', subdomain: '', customDomain: '', primaryColor: '#6366f1', logo: '' };
    this.availableModules.forEach(m => m.selected = (m.id === 'crm' || m.id === 'cases'));
  }
}
