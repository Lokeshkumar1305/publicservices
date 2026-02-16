import { Injectable } from '@angular/core';
import { CanonicalEvent, FinancialEntry } from '../models/erp.models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventBackboneService {
  private events$ = new Subject<CanonicalEvent>();
  private auditLog: CanonicalEvent[] = [];

  // Simulate Toucan Event Backbone
  emitEvent(event: Omit<CanonicalEvent, 'id' | 'timestamp'>) {
    const fullEvent: CanonicalEvent = {
      ...event,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
    };

    console.log(`[EventBackbone] Emitting: ${fullEvent.eventType}`, fullEvent);
    this.auditLog.push(fullEvent);
    this.events$.next(fullEvent);

    // Automatically trigger GL mapping if financial impact exists
    this.mapToGeneralLedger(fullEvent);
  }

  getAuditTrail() {
    return [...this.auditLog];
  }

  private mapToGeneralLedger(event: CanonicalEvent) {
    // Simulate Toucan Accounting Layer Integration
    console.log(`[AccountingCore] Mapping event ${event.id} to GL entries...`);
  }
}
