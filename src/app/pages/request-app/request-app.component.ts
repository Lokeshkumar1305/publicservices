import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface ProductModule {
    id: string;
    name: string;
    icon: string;
    price: number;
    description: string;
    selected: boolean;
}

@Component({
    selector: 'app-request-app',
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
        FormsModule
    ],
    templateUrl: './request-app.component.html',
    styleUrl: './request-app.component.scss'
})
export class RequestAppComponent {
    step: number = 1;
    industries = ['Media & Entertainment', 'Law Firm', 'Hospital & Healthcare', 'Carpentry & Construction', 'CA & Finance', 'Consulting'];

    formData = {
        businessName: '',
        industry: 'Media & Entertainment',
        email: '',
        phone: '',
        message: ''
    };

    modules: ProductModule[] = [
        { id: 'uam', name: 'User Management (UAM)', icon: 'admin_panel_settings', price: 0, description: 'Core identity and role based access control', selected: true },
        { id: 'crm', name: 'CRM & Client Hub', icon: 'groups', price: 29, description: 'Lead tracking and unified client profiles', selected: true },
        { id: 'events', name: 'Event Booking', icon: 'event', price: 49, description: 'Scheduling and public booking portals', selected: false },
        { id: 'payments', name: 'Payments & Billing', icon: 'payments', price: 39, description: 'Stripe/PayPal integration and invoices', selected: false },
        { id: 'recon', name: 'Auto-Reconciliation', icon: 'sync', price: 99, description: 'AI-powered bank statement matching', selected: false },
        { id: 'nms', name: 'NMS (Notifications)', icon: 'notifications', price: 19, description: 'Multi-channel messaging system', selected: false },
        { id: 'dms', name: 'DMS (Document Vault)', icon: 'folder', price: 29, description: 'Secure storage with OCR capabilities', selected: false },
        { id: 'reports', name: 'Advanced Reports', icon: 'bar_chart', price: 59, description: 'Real-time BI and data visualization', selected: false },
    ];

    constructor(private router: Router) { }

    get selectedModules(): ProductModule[] {
        return this.modules.filter(m => m.selected);
    }

    get selectedModulesCount(): number {
        return this.selectedModules.length;
    }

    getTotalMonthly(): number {
        return this.selectedModules.reduce((acc, curr) => acc + curr.price, 0);
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    submitRequest() {
        alert(`REQUEST SUBMITTED: Our engineers will provision your ${this.formData.industry} platform with ${this.selectedModulesCount} modules. You will receive an email shortly!`);
        this.router.navigate(['/login']);
    }
}
