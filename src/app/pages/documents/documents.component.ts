import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

interface Document {
    title: string;
    type: string;
    client: string;
    status: 'draft' | 'pending review' | 'approved' | 'signed';
    added: string;
    selected?: boolean;
}

@Component({
    selector: 'app-documents',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatCheckboxModule, FormsModule],
    templateUrl: './documents.component.html',
    styleUrl: './documents.component.scss'
})
export class DocumentsComponent implements OnInit {
    documents: Document[] = [
        { title: 'Innovate Labs Operating Agreement', type: 'Agreement', client: 'Amanda Foster', status: 'draft', added: 'Feb 16, 2026' },
        { title: 'TechCorp Merger Agreement v2', type: 'Contract', client: 'Sarah Mitchell', status: 'pending review', added: 'Feb 16, 2026' },
        { title: 'Greenfield Patent Filing', type: 'Legal Notice', client: 'James Rodriguez', status: 'approved', added: 'Feb 16, 2026' },
        { title: 'Chen Family Trust', type: 'Agreement', client: 'Emily Chen', status: 'draft', added: 'Feb 16, 2026' },
        { title: 'NovaTech NDA - Final', type: 'Contract', client: 'David Park', status: 'signed', added: 'Feb 16, 2026' },
        { title: 'Sharma H1B Application', type: 'Other', client: 'Priya Sharma', status: 'pending review', added: 'Feb 16, 2026' }
    ];

    showUploadModal = false;

    newDoc = {
        title: '',
        type: 'Other',
        status: 'draft',
        client: '',
        notes: ''
    };

    types = ['Agreement', 'Contract', 'Legal Notice', 'Other'];
    statuses = ['draft', 'pending review', 'approved', 'signed'];
    clients = ['Amanda Foster', 'Sarah Mitchell', 'James Rodriguez', 'Emily Chen', 'David Park', 'Priya Sharma'];

    constructor() { }

    ngOnInit(): void {
    }

    toggleUploadModal() {
        this.showUploadModal = !this.showUploadModal;
    }

    uploadDocument() {
        // Basic push for simulation
        if (this.newDoc.title && this.newDoc.client) {
            this.documents.unshift({
                title: this.newDoc.title,
                type: this.newDoc.type,
                client: this.newDoc.client,
                status: this.newDoc.status as any,
                added: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            });
            this.toggleUploadModal();
            // Reset form
            this.newDoc = { title: '', type: 'Other', status: 'draft', client: '', notes: '' };
        }
    }
}
