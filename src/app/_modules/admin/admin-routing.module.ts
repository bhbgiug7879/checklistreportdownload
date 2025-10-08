import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container/container.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { ProjectcreateComponent } from './projectcreate/projectcreate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsercreateFormComponent } from './usercreate/usercreate-form/usercreate-form.component';
import { UsercreateListComponent } from './usercreate/usercreate-list/usercreate-list.component';
import { ProjectcreateFormComponent } from './projectcreate/projectcreate-form/projectcreate-form.component';
import { ProjectcreateListComponent } from './projectcreate/projectcreate-list/projectcreate-list.component';
import { HomeprojectcrateformComponent } from './home/homeprojectcrateform/homeprojectcrateform.component';
import { HomeprojectcratelistComponent } from './home/homeprojectcratelist/homeprojectcratelist.component';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { RolemappingComponent } from './rolemapping/rolemapping.component';
import { RolemappingcreateFormComponent } from './rolemapping/rolemappingcreate-form/rolemappingcreate-form.component';
import { RolemappingListComponent } from './rolemapping/rolemapping-list/rolemapping-list.component';
import { UserrolemappingComponent } from './userrolemapping/userrolemapping.component';
import { UserrolecreateComponent } from './userrolemapping/userrolecreate/userrolecreate.component';
import { UserrolelistComponent } from './userrolemapping/userrolelist/userrolelist.component';


const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'user_create', component: UsercreateComponent,
        children: getChildRoute(UsercreateFormComponent, UsercreateListComponent)
      },
      {
        path: 'checklist_create', component: ProjectcreateComponent,
        children: getChildRoute(ProjectcreateFormComponent, ProjectcreateListComponent)
      },
      {
        path: 'project_create', component: HomeComponent,
        children: getChildRoute(HomeprojectcrateformComponent, HomeprojectcratelistComponent)
      },
      {
        path: 'rolemapping_create', component: RolemappingComponent,
        children: getChildRoute(RolemappingcreateFormComponent, RolemappingListComponent)
      },
      {
        path: 'userrolemapping', component: UserrolemappingComponent,
        children: getChildRoute(UserrolecreateComponent, UserrolelistComponent)
      }
    ]
  }
];

function getChildRoute(formComponent: Type<any>, listComponent: Type<any>): Routes {
  const routes: Routes = [
    { path: 'create', component: formComponent, canActivate: [AuthGuard], data: { type: 'CR' } },
    { path: 'list', component: listComponent, canActivate: [AuthGuard], data: { type: 'LI' } },
    { path: 'edit/:id', component: formComponent, canActivate: [AuthGuard], data: { type: 'ED' } },
    { path: 'details/:id', component: formComponent, canActivate: [AuthGuard], data: { type: 'RE' } }
  ];
  return routes;
}
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
