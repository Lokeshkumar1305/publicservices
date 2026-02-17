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
      name: 'Legal Consultation',
      category: 'Consultation',
      description: 'Initial consultation to assess your legal needs and provide strategic advice',
      price: 200,
      type: 'Fixed',
      duration: '60m',
      active: true,
      public: true
    },
    {
      id: 'SVC-002',
      name: 'Contract Drafting',
      category: 'Documentation',
      description: 'Professional contract drafting and review by experienced attorneys',
      price: 150,
      type: 'Hourly',
      duration: '120m',
      active: true,
      public: true
    },
    {
      id: 'SVC-003',
      name: 'Legal Notice',
      category: 'Litigation',
      description: 'Drafting and serving of legal notices',
      price: 300,
      type: 'Fixed',
      duration: '90m',
      active: true,
      public: true
    },
    {
      id: 'SVC-004',
      name: 'Business Formation',
      category: 'Corporate',
      description: 'LLC, Corporation, or Partnership formation with full documentation',
      price: 1500,
      type: 'Fixed',
      duration: '180m',
      discount: '10% OFF',
      active: true,
      public: true
    },
    {
      id: 'SVC-005',
      name: 'IP Registration',
      category: 'IP Law',
      description: 'Trademark and patent registration services',
      price: 250,
      type: 'Hourly',
      duration: '60m',
      active: true,
      public: true
    },
    {
      id: 'SVC-006',
      name: 'Estate Planning',
      category: 'Estate',
      description: 'Comprehensive estate planning including wills, trusts, and power of attorney',
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
    category: '',
    duration: 60,
    taxRate: 0,
    discount: 0,
    description: '',
    public: true,
    active: true
  };

  categories = ['Consultation', 'Documentation', 'Litigation', 'Corporate', 'IP Law', 'Estate'];

  ngOnInit(): void { }

  toggleAddModal() {
    this.showAddModal = !this.showAddModal;
  }

  createService() {
    this.services.unshift({
      id: `SVC-00${this.services.length + 1}`,
      name: this.newService.name,
      category: this.newService.category,
      description: this.newService.description,
      price: this.newService.price,
      type: this.newService.type,
      duration: `${this.newService.duration}m`,
      active: this.newService.active,
      public: this.newService.public
    });
    this.toggleAddModal();
    // Reset
    this.newService = { name: '', price: 0, type: 'Fixed', category: '', duration: 60, taxRate: 0, discount: 0, description: '', public: true, active: true };
  }

  deleteService(index: number) {
    this.services.splice(index, 1);
  }
}
