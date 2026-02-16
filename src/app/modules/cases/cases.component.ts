import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { EventBackboneService } from '../../core/services/event-backbone.service';

export interface Case {
  id: string;
  client: string;
  serviceType: string;
  status: 'Open' | 'In Progress' | 'Completed' | 'Invoiced';
  createdAt: Date;
  amount: number;
}

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule,
  ],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss',
})
export class CasesComponent implements OnInit {
  cases: Case[] = [
    {
      id: 'CASE-101',
      client: 'Grand Plaza Hotel',
      serviceType: 'Event Lighting',
      status: 'In Progress',
      createdAt: new Date(),
      amount: 1500,
    },
    {
      id: 'CASE-102',
      client: 'Tech Hub Office',
      serviceType: 'Network Cabling',
      status: 'Open',
      createdAt: new Date(),
      amount: 2800,
    },
    {
      id: 'CASE-103',
      client: 'Skyline Residence',
      serviceType: 'General Maintenance',
      status: 'Completed',
      createdAt: new Date(),
      amount: 450,
    },
  ];

  constructor(private eventBackbone: EventBackboneService) {}

  ngOnInit(): void {}

  updateStatus(caseItem: Case, newStatus: 'Open' | 'In Progress' | 'Completed' | 'Invoiced') {
    const oldStatus = caseItem.status;
    caseItem.status = newStatus;

    // Emit Canonical Event for the Backbone
    this.eventBackbone.emitEvent({
      sourceModule: 'CASES',
      eventType: 'CASE_STATUS_CHANGED',
      tenantId: 'T-001',
      payload: {
        caseId: caseItem.id,
        oldStatus,
        newStatus,
        client: caseItem.client,
        impact: newStatus === 'Completed' ? 'REVENUE_ACCRUAL_PENDING' : 'NONE',
      },
    });

    if (newStatus === 'Completed') {
      alert(
        `Case ${caseItem.id} marked as Completed. Signal sent to Billing Engine for Invoice generation.`,
      );
    }
  }

  getStatusClass(status: string) {
    switch (status) {
      case 'Open':
        return 'bg-info-subtle text-info';
      case 'In Progress':
        return 'bg-primary-subtle text-primary';
      case 'Completed':
        return 'bg-success-subtle text-success';
      case 'Invoiced':
        return 'bg-secondary-subtle text-secondary';
      default:
        return 'bg-light';
    }
  }
}
