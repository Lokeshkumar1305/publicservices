import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-uam',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatTableModule,
        MatChipsModule,
        FormsModule
    ],
    templateUrl: './uam.component.html',
    styleUrl: './uam.component.scss'
})
export class UamComponent implements OnInit {
    activeTab: number = 0;

    users = [
        { name: 'Lokesh Kumar', email: 'lokesh@toucanus.com', role: 'Super Admin', status: 'active', lastLogin: '10 mins ago' },
        { name: 'Suman Dhumale', email: 'suman@toucanus.com', role: 'Admin', status: 'active', lastLogin: '2 hours ago' },
        { name: 'Sarah Mitchell', email: 'sarah.m@firm.com', role: 'Case Manager', status: 'active', lastLogin: 'Yesterday' },
        { name: 'James Rodriguez', email: 'james.r@firm.com', role: 'Support', status: 'inactive', lastLogin: '3 days ago' },
    ];

    roles = [
        { name: 'Super Admin', description: 'Unrestricted access to all modules and configurations', userCount: 1 },
        { name: 'Admin', description: 'Manage firm settings, users and billing', userCount: 2 },
        { name: 'Case Manager', description: 'Manage cases, client files and appointments', userCount: 5 },
        { name: 'Finance', description: 'Access to invoices, reconciliation and reports', userCount: 2 },
    ];

    permissions = [
        { module: 'CRM', view: true, edit: true, delete: false, export: true },
        { module: 'Cases', view: true, edit: true, delete: true, export: true },
        { module: 'Payments', view: true, edit: false, delete: false, export: true },
        { module: 'UAM', view: false, edit: false, delete: false, export: false },
    ];

    constructor() { }

    ngOnInit(): void { }
}
