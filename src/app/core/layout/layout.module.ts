import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavbarComponent],
  imports: [SharedModule],
  exports: [HeaderComponent, FooterComponent, NavbarComponent],
})
export class LayoutModule {
}
