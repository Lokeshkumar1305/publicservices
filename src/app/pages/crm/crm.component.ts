import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

export interface Client {
    name: string;
    email: string;
    phone: string;
    company: string;
    status: 'active' | 'prospect' | 'inactive';
    source: string;
    added: string;
    selected?: boolean;
}

@Component({
    selector: 'app-crm',
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
    templateUrl: './crm.component.html',
    styleUrl: './crm.component.scss'
})
export class CrmComponent implements OnInit {
    activeFilter: string = 'all';

    allClients: Client[] = [
        { name: 'David Park', email: 'david.park@novatech.com', phone: '+1 (555) 222-3344', company: 'NovaTech', status: 'inactive', source: 'Website', added: 'Feb 16, 2026' },
        { name: 'Amanda Foster', email: 'amanda.f@innovate.co', phone: '+1 (555) 999-0011', company: 'Innovate Labs', status: 'prospect', source: 'Direct', added: 'Feb 16, 2026' },
        { name: 'Sarah Mitchell', email: 'sarah.mitchell@techcorp.com', phone: '+1 (555) 111-2233', company: 'TechCorp Solutions', status: 'active', source: 'Referral', added: 'Feb 16, 2026' },
        { name: 'James Rodriguez', email: 'james.r@greenfield.co', phone: '+1 (555) 444-5566', company: 'Greenfield Ventures', status: 'active', source: 'Website', added: 'Feb 16, 2026' },
        { name: 'Emily Chen', email: 'emily.chen@gmail.com', phone: '+1 (555) 777-8899', company: '-', status: 'active', source: 'Direct', added: 'Feb 16, 2026' },
        { name: 'Michael Thompson', email: 'm.thompson@blueedge.io', phone: '+1 (555) 333-4455', company: 'Blue Edge Inc', status: 'prospect', source: 'Social Media', added: 'Feb 16, 2026' },
        { name: 'Priya Sharma', email: 'priya.sharma@outlook.com', phone: '+1 (555) 666-7788', company: '-', status: 'active', source: 'Referral', added: 'Feb 16, 2026' },
    ];

    filteredClients: Client[] = [];
    showAddModal: boolean = false;

    newClient = {
        name: '',
        email: '',
        phone: '',
        company: '',
        type: 'Individual',
        status: 'prospect',
        source: 'Direct',
        notes: ''
    };

    sources = ['Direct', 'Website', 'Referral', 'Social Media', 'Other'];
    statuses = ['prospect', 'active', 'inactive'];
    types = ['Individual', 'Corporate'];

    constructor() { }

    ngOnInit(): void {
        this.filterClients('all');
    }

    filterClients(status: string) {
        this.activeFilter = status;
        if (status === 'all') {
            this.filteredClients = this.allClients;
        } else {
            this.filteredClients = this.allClients.filter(c => c.status === status);
        }
    }

    toggleAddModal() {
        this.showAddModal = !this.showAddModal;
    }

    createClient() {
        this.allClients.unshift({
            name: this.newClient.name,
            email: this.newClient.email,
            phone: this.newClient.phone,
            company: this.newClient.company || '-',
            status: this.newClient.status as any,
            source: this.newClient.source,
            added: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        });
        this.filterClients(this.activeFilter);
        this.toggleAddModal();
        // Reset
        this.newClient = { name: '', email: '', phone: '', company: '', type: 'Individual', status: 'prospect', source: 'Direct', notes: '' };
    }
}
