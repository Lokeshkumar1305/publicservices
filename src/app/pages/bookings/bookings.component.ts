import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

interface Booking {
    client: string;
    service: string;
    date: string;
    time: string;
    status: 'pending' | 'confirmed' | 'completed';
    amount: string;
    payment: 'paid' | 'unpaid';
    selected?: boolean;
}

@Component({
    selector: 'app-bookings',
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
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule
    ],
    templateUrl: './bookings.component.html',
    styleUrl: './bookings.component.scss'
})
export class BookingsComponent implements OnInit {
    activeFilter: string = 'all';

    allBookings: Booking[] = [
        { client: 'Sarah Mitchell', service: 'Legal Consultation', date: 'Feb 18, 2026', time: '10:00 AM', status: 'confirmed', amount: '$200.00', payment: 'paid' },
        { client: 'Michael Thompson', service: 'Contract Drafting', date: 'Feb 20, 2026', time: '02:00 PM', status: 'pending', amount: '$150.00', payment: 'unpaid' },
        { client: 'Amanda Foster', service: 'Business Formation', date: 'Feb 22, 2026', time: '11:00 AM', status: 'confirmed', amount: '$1500.00', payment: 'paid' },
        { client: 'Emily Chen', service: 'Estate Planning', date: 'Feb 25, 2026', time: '03:00 PM', status: 'pending', amount: '$2000.00', payment: 'unpaid' },
        { client: 'Priya Sharma', service: 'Legal Consultation', date: 'Feb 17, 2026', time: '09:00 AM', status: 'completed', amount: '$200.00', payment: 'paid' },
    ];

    filteredBookings: Booking[] = [];
    showNewBookingModal: boolean = false;

    newBooking = {
        clientName: '',
        email: '',
        service: '',
        amount: '',
        date: null,
        timeSlot: '',
        status: 'pending',
        payment: 'unpaid',
        notes: ''
    };

    services = ['Legal Consultation', 'Contract Drafting', 'Business Formation', 'Estate Planning', 'Tax Advice'];
    timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];
    statuses = ['pending', 'confirmed', 'completed'];
    paymentStatuses = ['paid', 'unpaid'];

    constructor() { }

    ngOnInit(): void {
        this.filterBookings('all');
    }

    filterBookings(status: string) {
        this.activeFilter = status;
        if (status === 'all') {
            this.filteredBookings = this.allBookings;
        } else {
            this.filteredBookings = this.allBookings.filter(b => b.status === status);
        }
    }

    toggleNewBookingModal() {
        this.showNewBookingModal = !this.showNewBookingModal;
    }

    createBooking() {
        this.allBookings.unshift({
            client: this.newBooking.clientName,
            service: this.newBooking.service,
            date: this.newBooking.date ? new Date(this.newBooking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A',
            time: this.newBooking.timeSlot,
            status: this.newBooking.status as any,
            amount: `$${Number(this.newBooking.amount).toFixed(2)}`,
            payment: this.newBooking.payment as any
        });
        this.filterBookings(this.activeFilter);
        this.toggleNewBookingModal();
        // Reset
        this.newBooking = {
            clientName: '', email: '', service: '', amount: '', date: null, timeSlot: '', status: 'pending', payment: 'unpaid', notes: ''
        };
    }
}
