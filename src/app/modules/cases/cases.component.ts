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

export interface Case {
  title: string;
  client: string;
  status: 'open' | 'in progress' | 'pending review' | 'resolved';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo: string;
  due: string;
  created: string;
  selected?: boolean;
}

@Component({
  selector: 'app-cases',
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
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss',
})
export class CasesComponent implements OnInit {
  activeFilter: string = 'all';

  allCases: Case[] = [
    { title: 'TechCorp Merger Agreement', client: 'Sarah Mitchell', status: 'in progress', priority: 'high', assignedTo: 'John Sterling', due: 'Mar 15, 2026', created: 'Feb 16' },
    { title: 'Greenfield IP Dispute', client: 'James Rodriguez', status: 'open', priority: 'urgent', assignedTo: 'Maria Santos', due: 'Mar 1, 2026', created: 'Feb 16' },
    { title: 'Chen Estate Planning', client: 'Emily Chen', status: 'pending review', priority: 'medium', assignedTo: 'Robert Kim', due: 'Apr 10, 2026', created: 'Feb 16' },
    { title: 'Blue Edge Employment Contract', client: 'Michael Thompson', status: 'open', priority: 'low', assignedTo: 'John Sterling', due: 'Mar 20, 2026', created: 'Feb 16' },
    { title: 'Sharma Immigration Case', client: 'Priya Sharma', status: 'in progress', priority: 'high', assignedTo: 'Maria Santos', due: 'Feb 28, 2026', created: 'Feb 16' },
    { title: 'NovaTech NDA Review', client: 'David Park', status: 'resolved', priority: 'low', assignedTo: 'Robert Kim', due: '-', created: 'Feb 16' },
    { title: 'Innovate Labs LLC Formation', client: 'Amanda Foster', status: 'open', priority: 'medium', assignedTo: 'John Sterling', due: 'Mar 25, 2026', created: 'Feb 16' },
  ];

  filteredCases: Case[] = [];
  showNewCaseModal: boolean = false;

  newCase = {
    title: '',
    client: '',
    category: '',
    status: 'open',
    priority: 'medium',
    assignedTo: '',
    due: null,
    description: ''
  };

  clients = ['Sarah Mitchell', 'James Rodriguez', 'Emily Chen', 'Michael Thompson', 'Priya Sharma', 'David Park', 'Amanda Foster'];
  statuses = ['open', 'in progress', 'pending review', 'resolved'];
  priorities = ['low', 'medium', 'high', 'urgent'];

  constructor() { }

  ngOnInit(): void {
    this.filterCases('all');
  }

  filterCases(status: string) {
    this.activeFilter = status;
    if (status === 'all') {
      this.filteredCases = this.allCases;
    } else {
      // Map filter tabs to status values
      const map: any = { 'open': 'open', 'in progress': 'in progress', 'resolved': 'resolved' };
      this.filteredCases = this.allCases.filter(c => c.status === map[status]);
    }
  }

  toggleNewCaseModal() {
    this.showNewCaseModal = !this.showNewCaseModal;
  }

  createCase() {
    this.allCases.unshift({
      title: this.newCase.title,
      client: this.newCase.client,
      status: this.newCase.status as any,
      priority: this.newCase.priority as any,
      assignedTo: this.newCase.assignedTo,
      due: this.newCase.due ? new Date(this.newCase.due).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '-',
      created: 'Feb 17'
    });
    this.filterCases(this.activeFilter);
    this.toggleNewCaseModal();
    // Reset
    this.newCase = { title: '', client: '', category: '', status: 'open', priority: 'medium', assignedTo: '', due: null, description: '' };
  }
}
