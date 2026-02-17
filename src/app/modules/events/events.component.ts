import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

interface Event {
    id: string;
    name: string;
    type: string;
    date: string;
    totalTickets: number;
    remainingTickets: number;
    price: number;
    status: 'Draft' | 'Published' | 'Sold Out' | 'Canceled';
}

@Component({
    selector: 'app-events',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatSlideToggleModule,
        FormsModule
    ],
    templateUrl: './events.component.html',
    styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
    activeTab: number = 0;

    eventTypes = ['Music Concert', 'Film Screening', 'Photography Workshop', 'Art Gallery', 'Corporate Event'];

    events: Event[] = [
        { id: '1', name: 'Midnight Jazz Sessions', type: 'Music Concert', date: 'Mar 15, 2026', totalTickets: 500, remainingTickets: 120, price: 45, status: 'Published' },
        { id: '2', name: 'Documentary Premiere: Blue Earth', type: 'Film Screening', date: 'Mar 22, 2026', totalTickets: 200, remainingTickets: 0, price: 25, status: 'Sold Out' },
        { id: '3', name: 'Golden Hour Street Photo', type: 'Photography Workshop', date: 'Apr 05, 2026', totalTickets: 25, remainingTickets: 5, price: 150, status: 'Published' }
    ];

    coupons = [
        { code: 'WELCOMEMEDIA', discount: '20%', type: 'Percentage', usage: '45/100' },
        { code: 'EARLYBIRD', discount: '$10', type: 'Fixed', usage: '12/50' }
    ];

    showEventModal = false;
    newEvent: any = {
        name: '',
        type: 'Music Concert',
        date: '',
        totalTickets: 100,
        price: 0,
        description: ''
    };

    constructor() { }

    ngOnInit(): void { }

    toggleEventModal() {
        this.showEventModal = !this.showEventModal;
    }

    createEvent() {
        const event: Event = {
            id: (this.events.length + 1).toString(),
            name: this.newEvent.name,
            type: this.newEvent.type,
            date: new Date(this.newEvent.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            totalTickets: this.newEvent.totalTickets,
            remainingTickets: this.newEvent.totalTickets,
            price: this.newEvent.price,
            status: 'Published'
        };
        this.events.unshift(event);
        this.toggleEventModal();
        this.newEvent = { name: '', type: 'Music Concert', date: '', totalTickets: 100, price: 0, description: '' };
    }

    getStatusClass(status: string) {
        return status.toLowerCase().replace(' ', '-');
    }
}
