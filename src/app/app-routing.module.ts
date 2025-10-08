import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './_modules/shared/pages/errorpage/errorpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./_modules/auth/auth.module').then(mod => mod.AuthModule)},
  { path: 'admin', loadChildren: () => import('./_modules/admin/admin.module').then(mod => mod.AdminModule)},
  { path: '404-page', component: ErrorpageComponent},
  { path: '**', redirectTo: '404-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
