import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

interface Module {
    id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    status: 'enabled' | 'pro' | 'disabled';
    price?: number;
}

@Component({
    selector: 'app-modules',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatIconModule, MatSlideToggleModule, MatButtonModule, FormsModule],
    templateUrl: './modules.component.html',
    styleUrl: './modules.component.scss'
})
export class ModulesComponent implements OnInit {
    categories = [
        { label: 'All Modules', value: 'all' },
        { label: 'Customer Ops', value: 'customer' },
        { label: 'Financials', value: 'finance' },
        { label: 'Infrastructure', value: 'infra' },
        { label: 'Growth', value: 'growth' }
    ];

    selectedCategory = 'all';

    allModules: Module[] = [
        { id: 'crm', name: 'CRM Hub', category: 'customer', description: 'Centralized client lifecycle and relationship management.', icon: 'people', status: 'enabled' },
        { id: 'events', name: 'Event Booking', category: 'customer', description: 'Public booking portals for media, law, and healthcare events.', icon: 'event', status: 'enabled' },
        { id: 'payments', name: 'Payments Gateway', category: 'finance', description: 'Stripe, PayPal, and Razorpay integrated checkout engine.', icon: 'payments', status: 'enabled' },
        { id: 'recon', name: 'Auto Reconciliation', category: 'finance', description: 'AI-driven bank statement matching and financial audits.', icon: 'sync', status: 'enabled' },
        { id: 'reports', name: 'BI Reports', category: 'infra', description: 'Real-time business intelligence and data visualization.', icon: 'bar_chart', status: 'enabled' },
        { id: 'nms', name: 'NMS (Messenger)', category: 'infra', description: 'Unified notification management for email, SMS, and WhatsApp.', icon: 'notifications', status: 'enabled' },
        { id: 'dms', name: 'DMS (Vault)', category: 'infra', description: 'Secure document management with OCR and e-signature.', icon: 'folder', status: 'enabled' },
        { id: 'uam', name: 'Identity & UAM', category: 'infra', description: 'RBAC, user identities, and platform access control.', icon: 'admin_panel_settings', status: 'enabled' },
        { id: 'white-label', name: 'White Labeling', category: 'growth', description: 'Fully branded client portals with custom styling.', icon: 'palette', status: 'pro', price: 99 },
        { id: 'api-hub', name: 'API Hub', category: 'growth', description: 'Developer-first REST APIs for external custom integrations.', icon: 'bolt', status: 'pro', price: 149 }
    ];

    filteredModules: Module[] = [];

    ngOnInit() {
        this.filterModules();
    }

    filterModules() {
        if (this.selectedCategory === 'all') {
            this.filteredModules = this.allModules;
        } else {
            this.filteredModules = this.allModules.filter(
                m => m.category === this.selectedCategory
            );
        }
    }

    selectCategory(value: string) {
        this.selectedCategory = value;
        this.filterModules();
    }

    upgradeModule(module: Module) {
        alert(`UPGRADE: Contact sales to enable ${module.name} PRO for $${module.price}/mo.`);
    }
}
