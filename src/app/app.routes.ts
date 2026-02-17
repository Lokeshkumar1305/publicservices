import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InventoryComponent } from './modules/inventory/inventory.component';
import { CasesComponent } from './modules/cases/cases.component';
import { ReconciliationComponent } from './modules/reconciliation/reconciliation.component';
import { BillingComponent } from './modules/billing/billing.component';
import { OnboardingComponent } from './modules/onboarding/onboarding.component';
import { ServiceCatalogComponent } from './modules/service-catalog/service-catalog.component';
import { SiteConfigComponent } from './modules/site-config/site-config.component';
import { ModulesComponent } from './modules/modules/modules.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { CrmComponent } from './pages/crm/crm.component';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'reconciliation', component: ReconciliationComponent },
  { path: 'invoices', component: BillingComponent },
  { path: 'onboarding-kyb', component: OnboardingComponent },
  { path: 'services', component: ServiceCatalogComponent },
  { path: 'settings', component: SiteConfigComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'crm', component: CrmComponent },

  { path: 'bookings', component: BookingsComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'modules', component: ModulesComponent },
];
