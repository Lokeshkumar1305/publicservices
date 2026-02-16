import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-reconciliation',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './reconciliation.component.html',
  styleUrl: './reconciliation.component.scss',
})
export class ReconciliationComponent implements OnInit {
  reconData = [
    {
      id: 'REC-5001',
      invoiceId: 'INV-101',
      amount: 1500,
      gatewayMatch: true,
      bankMatch: true,
      status: 'Matched',
    },
    {
      id: 'REC-5002',
      invoiceId: 'INV-102',
      amount: 2800,
      gatewayMatch: true,
      bankMatch: false,
      status: 'Exception',
    },
    {
      id: 'REC-5003',
      invoiceId: 'INV-103',
      amount: 450,
      gatewayMatch: true,
      bankMatch: true,
      status: 'Matched',
    },
  ];

  stats = {
    matchedRate: 92,
    exceptions: 4,
    pendingSettlement: '$14,200',
    totalProcessed: '$250.4k',
  };

  ngOnInit(): void {}

  resolveException(item: any) {
    alert(
      `Recon Engine (Toucan) is triggering a manual exception workflow for Invoice ${item.invoiceId}. Case opened in PPMS.`,
    );
  }
}
