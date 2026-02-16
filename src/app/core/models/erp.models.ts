export type EngineStatus = 'Active' | 'Warning' | 'Error' | 'Inactive';
export type FinancialImpactType = 'DR' | 'CR' | 'NONE';

export interface CanonicalEvent {
  id: string;
  timestamp: Date;
  sourceModule: string;
  eventType: string; // e.g., 'INVENTORY_CONSUMED', 'PAYMENT_RECEIVED'
  payload: any;
  tenantId: string;
}

export interface FinancialEntry {
  ledgerAccount: string;
  amount: number;
  type: FinancialImpactType;
  referenceId: string;
}

export interface ERPModule {
  id: string;
  name: string;
  reusedFrom: 'PPMS' | 'TOUCAN' | 'NEW';
  status: EngineStatus;
  versionedPolicies: number;
  auditLogsCount: number;
}
