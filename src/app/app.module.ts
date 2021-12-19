import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { LayoutModule } from './layout/layout.module';
import { SessionListComponent } from './components/session/session-list/session-list.component';
import { SessionModule } from './components/session/session.module';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, RedirectComponent],
  // todo : revoir les imports (sharedmodule et Dashboardmodule)
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    DashboardModule,
    LayoutModule,
    SessionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
