import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './core/guard/auth.guard';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RedirectComponent } from './components/redirect/redirect.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'redirect', component: RedirectComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard], // todo : à remettre
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
