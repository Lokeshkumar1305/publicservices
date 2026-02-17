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
    services = [
        { id: 1, name: 'Professional Video Shoot', price: '$500', icon: 'videocam', category: 'Media' },
        { id: 2, name: 'Social Media Management', price: '$200/mo', icon: 'share', category: 'Marketing' },
        { id: 3, name: 'Brand Identity Design', price: '$1200', icon: 'auto_fix_high', category: 'Design' },
        { id: 4, name: 'SEO Consultation', price: '$150/hr', icon: 'trending_up', category: 'SEO' },
    ];

    selectedService: any = null;
    bookingData = {
        date: '',
        time: '',
        customerEmail: '',
        notes: ''
    };

    isBookingComplete: boolean = false;

    constructor() { }

    ngOnInit(): void { }

    selectService(service: any) {
        this.selectedService = service;
    }

    confirmBooking() {
        this.isBookingComplete = true;
        setTimeout(() => {
            alert(`BOOKING SUCCESSFUL! Our team at ${this.firmName} will contact you shortly regarding the ${this.selectedService.name}.`);
        }, 500);
    }
}
