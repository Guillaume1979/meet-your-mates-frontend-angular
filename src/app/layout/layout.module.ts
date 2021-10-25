import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NotificationComponent,
  ],
  imports: [SharedModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NotificationComponent,
  ],
})
export class LayoutModule {}
