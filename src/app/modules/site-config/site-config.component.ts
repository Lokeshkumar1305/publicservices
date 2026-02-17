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

import { Router } from '@angular/router';

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
  activeTab: string = 'branding';

  orgDetails = {
    name: 'Toucan Media Group',
    industry: 'Media',
    subdomain: 'media-group',
    email: 'admin@mediagroup.com',
    supportPhone: '+1 800-MEDIA-01'
  };

  branding = {
    primaryColor: '#6366f1',
    logoUrl: 'assets/logo.svg',
    fontFamily: 'Inter',
    buttonRadius: '8',
    favicon: null
  };

  paymentConfig = {
    provider: 'Toucan Payment',
    apiKey: 'pk_live_••••••••••••••••••••••••',
    webhookSecret: 'whsec_••••••••••••••••••••••',
    currency: 'USD',
    autoInvoice: true,
    platformFee: '5.0'
  };

  portalConfig = {
    showServiceCatalog: true,
    showBookings: true,
    showInvoices: false,
    welcomeMessage: 'Welcome to our platform. Explore our premium media services below.',
    heroTitle: 'Book Your Next Production'
  };

  moduleControl = [
    { id: 'events', name: 'Event Booking', enabled: true, tooltip: 'Allow customers to book media events' },
    { id: 'payments', name: 'Online Payments', enabled: true, tooltip: 'Enable checkout for services' },
    { id: 'recon', name: 'Auto-Reconciliation', enabled: false, tooltip: 'Match bank statements automatically' },
    { id: 'dms', name: 'Document Vault', enabled: true, tooltip: 'Secure storage for media files' },
    { id: 'portal', name: 'Customer Portal', enabled: true, tooltip: 'Enable the public facing booking site' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  saveConfig() {
    alert('CONFIGURATION DEPLOYED: Your white-labeled application settings have been updated across the cluster.');
  }

  previewSite() {
    this.router.navigate(['/portal-preview']);
  }
}

