import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RedirectComponent } from './components/redirect/redirect.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, RedirectComponent],
  imports: [AppRoutingModule, CoreModule, SharedModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
