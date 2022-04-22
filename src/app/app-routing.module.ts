import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './core/guard/auth.guard';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RedirectComponent } from './components/redirect/redirect.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'redirect', component: RedirectComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    // component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'session',
    loadChildren: () =>
      import('./components/session/session.module').then(
        (m) => m.SessionModule
      ),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' }, // A placer à la fin
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
