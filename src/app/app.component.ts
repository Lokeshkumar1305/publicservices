import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatDividerModule,
    SidenavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  currentPageTitle = 'Dashboard';

  user = {
    name: 'Lokesh Kumar',
    email: 'lokesh@toucanus.com',
    avatar: 'https://i.pravatar.cc/150?u=suman',
    role: 'superadmin',
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.updatePageTitle(this.router.url);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updatePageTitle(this.router.url);
      });
  }

  private updatePageTitle(url: string) {
    if (url.includes('inventory')) {
      this.currentPageTitle = 'Inventory Management';
    } else if (url.includes('cases')) {
      this.currentPageTitle = 'Case Management';
    } else if (url.includes('billing')) {
      this.currentPageTitle = 'Billing & Payments';
    } else if (url.includes('reconciliation')) {
      this.currentPageTitle = 'Financial Reconciliation';
    } else if (url.includes('onboarding')) {
      this.currentPageTitle = 'Firm Provisioning';
    } else if (url.includes('services')) {
      this.currentPageTitle = 'Service Catalog';
    } else if (url.includes('site-config')) {
      this.currentPageTitle = 'White-Label Config';
    } else {
      this.currentPageTitle = 'Dashboard';
    }
  }
}
