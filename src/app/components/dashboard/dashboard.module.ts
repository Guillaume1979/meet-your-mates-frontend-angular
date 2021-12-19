import { NgModule } from '@angular/core';
import { DashboardService } from '../../core/service/dashboard.service';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule],
  providers: [DashboardService],
})
export class DashboardModule {}
