import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
})
export class OnboardingComponent implements OnInit {
  // Provisioning State
  provisioning = {
    firmName: '',
    industry: 'Law Firm',
    email: '',
    branding: {
      primaryColor: '#3E5AB9',
      logoScale: 100,
    },
  };

  industries = ['Law Firm', 'Contracting', 'Accounting', 'Healthcare'];

  marketContext = [
    {
      title: 'Integrated Lifecycle',
      desc: 'Move from fragmented tools to a unified platform strategy.',
    },
    {
      title: 'Zero-Touch Ops',
      desc: 'Automatic provisioning of databases, roles, and workflows.',
    },
    {
      title: 'White-Label Ready',
      desc: 'Maintain brand sovereignty with customizable tenant layers.',
    },
  ];

  // Dynamic config based on selected industry
  get currentStarterPack() {
    if (this.provisioning.industry === 'Law Firm') {
      return [
        { type: 'Roles', items: ['Admin', 'Partner', 'Associate', 'Paralegal'] },
        {
          type: 'Service Catalog',
          items: ['"Initial Consultation" ($200/Fixed)', '"Contract Review" ($150/Hour)'],
        },
        { type: 'Workflows', items: ['Discovery', 'In Court', 'Settled'] },
        { type: 'Templates', items: ['Retainer Agreement', 'NDA'] },
      ];
    } else if (this.provisioning.industry === 'Contracting') {
      return [
        { type: 'Roles', items: ['Owner', 'Project Manager', 'Foreman', 'Subcontractor'] },
        { type: 'Service Catalog', items: ['"Site Inspection" ($50)', '"HVAC Repair" ($90/hr)'] },
        { type: 'Workflows', items: ['Permitting', 'In Progress', 'Inspection'] },
        { type: 'Templates', items: ['Safety Waiver', 'Change Order'] },
      ];
    }
    return []; // Placeholder for others
  }

  get adaptiveFieldsPreview() {
    const isLawyer = this.provisioning.industry === 'Law Firm';
    return [
      { label: 'Primary ID', value: isLawyer ? 'Bar Number' : 'License Number' },
      { label: 'Certification', value: isLawyer ? 'Jurisdiction (State)' : 'Safety Certificate' },
      { label: 'Specialty', value: isLawyer ? 'Practice Area' : 'Trade Type (e.g. Electrical)' },
    ];
  }

  ngOnInit(): void {}

  deployFirm() {
    alert(
      `Deploying ${this.provisioning.firmName} on Toucan Infrastructure... \nTarget: Multi-Tenant MongoDB Cluster \nDefault Config: ${this.provisioning.industry} Starter Pack`,
    );
  }
}
