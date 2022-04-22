import { NgModule } from '@angular/core';
import { PlayerService } from '../../core/service/player.service';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const children: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, RouterModule.forChild(children)],
  providers: [PlayerService],
})
export class DashboardModule {}
