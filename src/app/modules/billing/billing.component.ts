import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EventBackboneService } from '../../core/services/event-backbone.service';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss',
})
export class BillingComponent implements OnInit {
  billableItems = [
    {
      id: 'BL-901',
      client: 'Grand Plaza Hotel',
      description: 'Event Lighting + Materials',
      amount: 1625.5,
      type: 'Service+Material',
      status: 'Pending',
    },
    {
      id: 'BL-902',
      client: 'Skyline Residence',
      description: 'Monthly Maintenance',
      amount: 450.0,
      type: 'Subscription',
      status: 'Pending',
    },
  ];

  constructor(private eventBackbone: EventBackboneService) {}

  ngOnInit(): void {}

  generateInvoice(item: any) {
    item.status = 'Invoiced';

    // Emit Event for Financial Impact
    this.eventBackbone.emitEvent({
      sourceModule: 'BILLING',
      eventType: 'INVOICE_GENERATED',
      tenantId: 'T-001',
      payload: {
        billingId: item.id,
        amount: item.amount,
        revenueImpact: 'ACCRUED',
        taxAmount: item.amount * 0.15, // 15% placeholder tax
      },
    });

    alert(`Invoice generated for ${item.client}. Revenue recognized in Toucan GL.`);
  }
}
