import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-customer-portal',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatStepperModule,
        FormsModule
    ],
    templateUrl: './customer-portal.component.html',
    styleUrl: './customer-portal.component.scss'
})
export class CustomerPortalComponent implements OnInit {
    // Simulated White Label Data
    firmName: string = 'Toucan Media Group'; // Derived from onboarding
    primaryColor: string = '#6366f1';
    heroTitle: string = 'Book Your Next Production';
    welcomeMessage: string = 'Welcome to our platform. Explore our premium media services below.';
    events = [
        { id: '1', name: 'Midnight Jazz Sessions', type: 'Music Concert', date: 'Mar 15, 2026', price: 45, icon: 'music_note', description: 'An intimate evening of live jazz at the Toucan Lounge.' },
        { id: '2', name: 'Golden Hour Photography', type: 'Workshop', date: 'Apr 05, 2026', price: 150, icon: 'camera_alt', description: 'Master outdoor lighting with our professional media team.' },
        { id: '3', name: 'Product Launch: X-Series', type: 'Corporate', date: 'May 10, 2026', price: 0, icon: 'rocket_launch', description: 'Be the first to see the latest media production gear.' },
    ];

    selectedEvent: any = null;
    ticketCount: number = 1;
    couponCode: string = '';
    discountApplied: boolean = false;

    bookingData = {
        date: '',
        time: '',
        customerEmail: '',
        customerName: '',
        notes: ''
    };

    isBookingComplete: boolean = false;

    constructor() { }

    ngOnInit(): void { }

    selectEvent(event: any) {
        this.selectedEvent = event;
    }

    applyCoupon() {
        if (this.couponCode.toUpperCase() === 'WELCOMEMEDIA') {
            this.discountApplied = true;
            alert('COUPON APPLIED: 20% discount activated!');
        } else {
            alert('INVALID CODE: Please check your coupon code again.');
        }
    }

    getSubtotal(): number {
        return (this.selectedEvent?.price || 0) * this.ticketCount;
    }

    getTotal(): number {
        const subtotal = this.getSubtotal();
        return this.discountApplied ? subtotal * 0.8 : subtotal;
    }

    confirmBooking() {
        this.isBookingComplete = true;
        setTimeout(() => {
            alert(`TICKETS SECURED: You have successfully booked ${this.ticketCount} ticket(s) for ${this.selectedEvent.name}. A confirmation email has been sent to ${this.bookingData.customerEmail}.`);
        }, 500);
    }
}
