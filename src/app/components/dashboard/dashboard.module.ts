import { NgModule } from '@angular/core';
import { PlayerService } from '../../core/service/player.service';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule],
  providers: [PlayerService],
})
export class DashboardModule {}
