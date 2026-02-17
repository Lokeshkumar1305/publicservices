import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  price: number;
  type: 'Fixed' | 'Hourly';
  duration: string;
  discount?: string;
  active: boolean;
  public: boolean;
}

@Component({
  selector: 'app-service-catalog',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  templateUrl: './service-catalog.component.html',
  styleUrl: './service-catalog.component.scss',
})
export class ServiceCatalogComponent implements OnInit {
  services: ServiceItem[] = [
    {
      id: 'SVC-001',
      name: 'Inventory',
      category: 'Management',
      icon: 'shopping_cart_checkout',
      description: 'Powerful stock management and inventory control software.',
      price: 200,
      type: 'Fixed',
      duration: '60m',
      active: true,
      public: true
    },
    {
      id: 'SVC-002',
      name: 'Sign',
      category: 'Documentation',
      icon: 'history_edu',
      description: 'Digital signature app for businesses.',
      price: 150,
      type: 'Fixed',
      duration: '120m',
      active: true,
      public: true
    },
    {
      id: 'SVC-003',
      name: 'Billing',
      category: 'Finance',
      icon: 'payments',
      description: 'End-to-end billing solution for your business.',
      price: 300,
      type: 'Fixed',
      duration: '90m',
      active: true,
      public: true
    },
    {
      id: 'SVC-004',
      name: 'CRM Hub',
      category: 'Sales',
      icon: 'groups',
      description: 'Complete customer relationship management platform.',
      price: 1500,
      type: 'Fixed',
      duration: '180m',
      active: true,
      public: true
    },
    {
      id: 'SVC-005',
      name: 'Analytics',
      category: 'Data',
      icon: 'bar_chart',
      description: 'Real-time business intelligence and data visualization.',
      price: 250,
      type: 'Fixed',
      duration: '60m',
      active: true,
      public: true
    },
    {
      id: 'SVC-006',
      name: 'Security Vault',
      category: 'Infrastructure',
      icon: 'security',
      description: 'Secure document storage with enterprise-grade encryption.',
      price: 2000,
      type: 'Fixed',
      duration: '240m',
      active: true,
      public: true
    },
  ];

  showAddModal: boolean = false;
  newService: any = {
    name: '',
    price: 0,
    type: 'Fixed',
    category: 'Consultation',
    duration: 60,
    icon: 'star',
    description: '',
    public: true,
    active: true
  };

  categories = ['Consultation', 'Documentation', 'Litigation', 'Corporate', 'IP Law', 'Estate', 'Management', 'Finance', 'Sales', 'Data', 'Infrastructure'];

  ngOnInit(): void { }

  toggleAddModal() {
    this.showAddModal = !this.showAddModal;
  }

  createService() {
    this.services.unshift({
      id: `SVC-00${this.services.length + 1}`,
      name: this.newService.name,
      category: this.newService.category,
      icon: this.newService.icon,
      description: this.newService.description,
      price: this.newService.price,
      type: this.newService.type,
      duration: `${this.newService.duration}m`,
      active: this.newService.active,
      public: this.newService.public
    });
    this.toggleAddModal();
    // Reset
    this.newService = { name: '', price: 0, type: 'Fixed', category: 'Consultation', duration: 60, icon: 'star', description: '', public: true, active: true };
  }

  deleteService(index: number) {
    this.services.splice(index, 1);
  }
}
