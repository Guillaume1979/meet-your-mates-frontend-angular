import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';
import {ApiService} from './service/api.service';


@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    ApiService
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule
  ]
})
export class CoreModule {
}
