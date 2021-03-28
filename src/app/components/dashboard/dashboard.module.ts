import { NgModule } from '@angular/core';
import {ApiService} from '../../core/service/api.service';
import {SharedModule} from '../../shared/shared.module';
import {DashboardComponent} from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
  ],
  providers: [ApiService],
})
export class DashboardModule { }
