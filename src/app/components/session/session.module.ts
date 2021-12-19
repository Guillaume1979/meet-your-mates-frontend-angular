import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionEditComponent } from './session-edit/session-edit.component';
import { RouterModule, Routes } from '@angular/router';

const children: Routes = [
  { path: '', component: SessionListComponent },
  { path: 'list', component: SessionListComponent },
  { path: 'edit', component: SessionEditComponent },
  { path: ':id', component: SessionDetailComponent },
  { path: 'edit/:id', component: SessionEditComponent },
];

@NgModule({
  declarations: [
    SessionListComponent,
    SessionDetailComponent,
    SessionEditComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(children)],
})
export class SessionModule {}
