import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EventBackboneService } from '../../core/services/event-backbone.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent implements OnInit {
  inventoryItems = [
    { id: '1', name: 'Copper Pipe 15mm', stock: 120, unit: 'm', cost: 12.5, status: 'In Stock' },
    {
      id: '2',
      name: 'Circuit Breaker 32A',
      stock: 45,
      unit: 'pcs',
      cost: 8.75,
      status: 'In Stock',
    },
    {
      id: '3',
      name: 'Industrial Drill Seal',
      stock: 5,
      unit: 'pcs',
      cost: 45.0,
      status: 'Low Stock',
    },
  ];

  constructor(private eventBackbone: EventBackboneService) {}

  ngOnInit(): void {}

  consumeItem(item: any) {
    // Simulate Field Service Consumption
    item.stock -= 1;

    // Emit Canonical Event for Financial Impact
    this.eventBackbone.emitEvent({
      sourceModule: 'INVENTORY',
      eventType: 'MATERIAL_CONSUMED',
      tenantId: 'T-001',
      payload: {
        itemId: item.id,
        itemName: item.name,
        cost: item.cost,
        impact: 'COGS_DEBIT',
      },
    });

    alert(`Consumed ${item.name}. Event emitted to Toucan Backbone for GL mapping.`);
  }
}
