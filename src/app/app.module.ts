import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {DashboardModule} from './components/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
