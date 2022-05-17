import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvatarPipe } from './pipe/avatar.pipe';

@NgModule({
  declarations: [AvatarPipe],
  imports: [],
  providers: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    AvatarPipe,
  ],
})
export class SharedModule {}
