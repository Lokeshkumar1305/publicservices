import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InventoryComponent } from './modules/inventory/inventory.component';
import { CasesComponent } from './modules/cases/cases.component';
import { ReconciliationComponent } from './modules/reconciliation/reconciliation.component';
import { BillingComponent } from './modules/billing/billing.component';
import { OnboardingComponent } from './modules/onboarding/onboarding.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'reconciliation', component: ReconciliationComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'onboarding-kyb', component: OnboardingComponent },
];
