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

interface InvoiceLineItem {
  description: string;
  qty: number;
  price: number;
  total: number;
}

interface Invoice {
  id: string;
  client: string;
  amount: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  due: string;
  created: string;
  selected?: boolean;
}

@Component({
  selector: 'app-billing',
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
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss',
})
export class BillingComponent implements OnInit {
  activeFilter: string = 'all';

  allInvoices: Invoice[] = [
    { id: 'INV-001', client: 'Sarah Mitchell', amount: '$1247.75', status: 'paid', due: 'Jan 30, 2026', created: 'Feb 16' },
    { id: 'INV-002', client: 'James Rodriguez', amount: '$1627.50', status: 'paid', due: 'Jan 25, 2026', created: 'Feb 16' },
    { id: 'INV-003', client: 'Emily Chen', amount: '$2170.00', status: 'sent', due: 'Mar 1, 2026', created: 'Feb 16' },
    { id: 'INV-004', client: 'Priya Sharma', amount: '$651.00', status: 'paid', due: 'Feb 15, 2026', created: 'Feb 16' },
    { id: 'INV-005', client: 'Michael Thompson', amount: '$325.50', status: 'draft', due: 'Mar 10, 2026', created: 'Feb 16' },
    { id: 'INV-006', client: 'Amanda Foster', amount: '$1627.50', status: 'overdue', due: 'Feb 1, 2026', created: 'Feb 16' },
  ];

  filteredInvoices: Invoice[] = [];
  showNewInvoiceModal: boolean = false;

  newInvoice = {
    id: 'INV-044131',
    client: '',
    status: 'draft',
    dueDate: null,
    taxAmount: 0,
    lineItems: [{ description: '', qty: 1, price: 0, total: 0 }],
    notes: ''
  };

  clients = ['Sarah Mitchell', 'James Rodriguez', 'Emily Chen', 'Priya Sharma', 'Michael Thompson', 'Amanda Foster'];
  statuses = ['draft', 'sent', 'paid', 'overdue'];

  constructor() { }

  ngOnInit(): void {
    this.filterInvoices('all');
  }

  filterInvoices(status: string) {
    this.activeFilter = status;
    if (status === 'all') {
      this.filteredInvoices = this.allInvoices;
    } else {
      this.filteredInvoices = this.allInvoices.filter(inv => inv.status === status);
    }
  }

  toggleNewInvoiceModal() {
    this.showNewInvoiceModal = !this.showNewInvoiceModal;
  }

  addLineItem() {
    this.newInvoice.lineItems.push({ description: '', qty: 1, price: 0, total: 0 });
  }

  removeLineItem(index: number) {
    this.newInvoice.lineItems.splice(index, 1);
  }

  updateLineTotal(item: InvoiceLineItem) {
    item.total = item.qty * item.price;
  }

  getSubtotal() {
    return this.newInvoice.lineItems.reduce((acc, curr) => acc + curr.total, 0);
  }

  getTotal() {
    return this.getSubtotal() + (Number(this.newInvoice.taxAmount) || 0);
  }

  createInvoice() {
    // Simulation
    this.allInvoices.unshift({
      id: this.newInvoice.id,
      client: this.newInvoice.client,
      amount: `$${this.getTotal().toFixed(2)}`,
      status: this.newInvoice.status as any,
      due: this.newInvoice.dueDate ? new Date(this.newInvoice.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A',
      created: 'Feb 17'
    });
    this.filterInvoices(this.activeFilter);
    this.toggleNewInvoiceModal();
  }
}
