import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';
import { ContainerComponent } from './container/container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { ProjectcreateComponent } from './projectcreate/projectcreate.component';
import { ProjectcreateFormComponent } from './projectcreate/projectcreate-form/projectcreate-form.component';
import { ProjectcreateListComponent } from './projectcreate/projectcreate-list/projectcreate-list.component';
import { UsercreateFormComponent } from './usercreate/usercreate-form/usercreate-form.component';
import { UsercreateListComponent } from './usercreate/usercreate-list/usercreate-list.component';
import { HomeprojectcrateformComponent } from './home/homeprojectcrateform/homeprojectcrateform.component';
import { HomeprojectcratelistComponent } from './home/homeprojectcratelist/homeprojectcratelist.component';
import { RolemappingComponent } from './rolemapping/rolemapping.component';
import { RolemappingcreateFormComponent } from './rolemapping/rolemappingcreate-form/rolemappingcreate-form.component';
import { RolemappingListComponent } from './rolemapping/rolemapping-list/rolemapping-list.component';
import { UserrolemappingComponent } from './userrolemapping/userrolemapping.component';
import { UserrolecreateComponent } from './userrolemapping/userrolecreate/userrolecreate.component';
import { UserrolelistComponent } from './userrolemapping/userrolelist/userrolelist.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContainerComponent,
    DashboardComponent,
    UsercreateComponent,
    ProjectcreateComponent,
    ProjectcreateFormComponent,
    ProjectcreateListComponent,
    UsercreateFormComponent,
    UsercreateListComponent,
    HomeprojectcrateformComponent,
    HomeprojectcratelistComponent,
    RolemappingComponent,
    RolemappingcreateFormComponent,
    RolemappingListComponent,
    UserrolemappingComponent,
    UserrolecreateComponent,
    UserrolelistComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule
]
})
export class AdminModule { }
