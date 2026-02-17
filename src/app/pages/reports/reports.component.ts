import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-reports',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatIconModule],
    templateUrl: './reports.component.html',
    styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {
    stats = [
        { label: 'Total Revenue', value: '$3,526.25', icon: 'attach_money', color: 'success' },
        { label: 'Pending Revenue', value: '$3,797.5', icon: 'trending_up', color: 'warning' },
        { label: 'Total Clients', value: '7', icon: 'people_outline', color: 'primary' },
        { label: 'Total Bookings', value: '5', icon: 'calendar_today', color: 'accent' }
    ];

    constructor() { }

    ngOnInit(): void {
    }
}
