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
    active: boolean;
    enabled: boolean;
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
        { label: 'All (14)', value: 'all' },
        { label: 'Core', value: 'core' },
        { label: 'Billing', value: 'billing' },
        { label: 'Operations', value: 'operations' },
        { label: 'Analytics', value: 'analytics' },
        { label: 'Communication', value: 'communication' },
        { label: 'Automation', value: 'automation' },
        { label: 'Security', value: 'security' },
        { label: 'Branding', value: 'branding' },
        { label: 'Developer', value: 'developer' }
    ];

    selectedCategory = 'all';

    allModules: Module[] = [
        {
            id: 'crm',
            name: 'CRM',
            category: 'Core',
            description: 'Client relationship management, contact tracking, and communication history',
            icon: 'account_circle',
            active: true,
            enabled: true
        },
        {
            id: 'case-mgmt',
            name: 'Case Management',
            category: 'Core',
            description: 'Track cases, tickets, legal matters with full lifecycle management',
            icon: 'business_center',
            active: true,
            enabled: true
        },
        {
            id: 'service-catalog',
            name: 'Service Catalog',
            category: 'Core',
            description: 'Define services with pricing, duration, and public rate charts',
            icon: 'widgets',
            active: true,
            enabled: true
        },
        {
            id: 'booking-engine',
            name: 'Booking Engine',
            category: 'Core',
            description: 'Calendar-based appointment booking with availability management',
            icon: 'event',
            active: true,
            enabled: true
        },
        {
            id: 'invoicing',
            name: 'Invoicing',
            category: 'Billing',
            description: 'Create, send, and track invoices with line items and tax support',
            icon: 'account_balance_wallet',
            active: true,
            enabled: true
        },
        {
            id: 'payment-gateway',
            name: 'Payment Gateway',
            category: 'Billing',
            description: 'Accept online payments with auto-reconciliation',
            icon: 'vignette',
            active: false,
            enabled: false
        },
        {
            id: 'doc-vault',
            name: 'Document Vault',
            category: 'Operations',
            description: 'Store, organize, and manage contracts, proposals, and files',
            icon: 'folder',
            active: true,
            enabled: true
        },
        {
            id: 'reports-analytics',
            name: 'Reports & Analytics',
            category: 'Analytics',
            description: 'Business insights, revenue tracking, and performance dashboards',
            icon: 'bar_chart',
            active: true,
            enabled: true
        },
        {
            id: 'notifications',
            name: 'Notifications',
            category: 'Communication',
            description: 'Email, SMS, and WhatsApp notification management',
            icon: 'notifications',
            active: false,
            enabled: false
        },
        {
            id: 'workflow-engine',
            name: 'Workflow Engine',
            category: 'Automation',
            description: 'Automate repetitive tasks and approval processes',
            icon: 'account_tree',
            active: false,
            enabled: false
        },
        {
            id: 'access-control',
            name: 'Access Control',
            category: 'Security',
            description: 'Granular permissions and role-based access security',
            icon: 'security',
            active: false,
            enabled: false
        },
        {
            id: 'reconciliation',
            name: 'Reconciliation',
            category: 'Billing',
            description: 'Multi-source payment and data reconciliation',
            icon: 'library_add_check',
            active: false,
            enabled: false
        },
        {
            id: 'white-label',
            name: 'White Label',
            category: 'Branding',
            description: 'Custom branding, colors, logo, and domain configuration',
            icon: 'public',
            active: false,
            enabled: false
        },
        {
            id: 'api-access',
            name: 'API Access',
            category: 'Developer',
            description: 'REST API access for external integrations',
            icon: 'bolt',
            active: false,
            enabled: false
        }
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
                m => m.category.toLowerCase() === this.selectedCategory.toLowerCase()
            );
        }
    }

    selectCategory(value: string) {
        this.selectedCategory = value;
        this.filterModules();
    }

    toggleModule(module: Module) {
        console.log(`Module ${module.name} is now ${module.enabled ? 'enabled' : 'disabled'}`);
        module.active = module.enabled;
    }
}
