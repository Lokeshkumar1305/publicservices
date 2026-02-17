import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

interface OnboardingRequest {
  firmName: string;
  industry: string;
  email: string;
  subdomain: string;
  status: 'pending' | 'in-progress' | 'completed';
  joined: string;
  selected?: boolean;
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
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
})
export class OnboardingComponent implements OnInit {
  activeFilter: string = 'all';

  allRequests: OnboardingRequest[] = [
    { firmName: 'Innovate Labs', industry: 'Law Firm', email: 'contact@innovate.com', subdomain: 'innovate', status: 'completed', joined: 'Feb 10, 2026' },
    { firmName: 'TechCorp Solutions', industry: 'Consulting Firm', email: 'admin@techcorp.io', subdomain: 'techcorp', status: 'in-progress', joined: 'Feb 12, 2026' },
    { firmName: 'Greenfield Legal', industry: 'Law Firm', email: 'office@greenfield.com', subdomain: 'greenfield', status: 'pending', joined: 'Feb 15, 2026' },
    { firmName: 'Nova Soft', industry: 'Agency', email: 'hello@novasoft.net', subdomain: 'novasoft', status: 'completed', joined: 'Feb 05, 2026' },
    { firmName: 'Blue Ridge CA', industry: 'CA Firm', email: 'support@blueridge.ca', subdomain: 'blueridge', status: 'in-progress', joined: 'Feb 16, 2026' },
  ];

  filteredRequests: OnboardingRequest[] = [];
  showNewOnboardingModal: boolean = false;

  newRequest = {
    firmName: '',
    industry: 'Law Firm',
    email: '',
    subdomain: '',
    status: 'pending',
    notes: ''
  };

  industries = ['Law Firm', 'Event Management', 'Consulting Firm', 'Carpenter / Contractor', 'CA Firm', 'Agency'];
  statuses = ['pending', 'in-progress', 'completed'];

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

  toggleNewOnboardingModal() {
    this.showNewOnboardingModal = !this.showNewOnboardingModal;
  }

  deployOnboarding() {
    this.allRequests.unshift({
      firmName: this.newRequest.firmName,
      industry: this.newRequest.industry,
      email: this.newRequest.email,
      subdomain: this.newRequest.subdomain,
      status: this.newRequest.status as any,
      joined: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
    this.filterRequests(this.activeFilter);
    this.toggleNewOnboardingModal();
    // Reset
    this.newRequest = { firmName: '', industry: 'Law Firm', email: '', subdomain: '', status: 'pending', notes: '' };
  }
}
