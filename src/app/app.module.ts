import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, RedirectComponent],
  imports: [AppRoutingModule, CoreModule, SharedModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
