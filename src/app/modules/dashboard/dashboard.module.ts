import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';

@NgModule({
  declarations: [DashboardPageComponent, DashboardCardComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
