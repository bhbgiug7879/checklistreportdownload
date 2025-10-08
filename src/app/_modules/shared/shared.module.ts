import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { PopupComponent } from './pages/popup/popup.component';
import { SidenavbarComponent } from './pages/sidenavbar/sidenavbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './pages/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TableComponent } from './pages/table/table.component';
import { CustomDataPipe } from 'src/app/_pipes/customdate-pipe';
import { RemoveHtmlTagsPipe } from 'src/app/_pipes/removehtml-tags.pipe';
import { AlertmodalComponent } from './pages/alertmodal/alertmodal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PaginatorComponent } from './pages/paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    ErrorpageComponent,
    PopupComponent,
    SidenavbarComponent,
    LoaderComponent,
    TableComponent,
    CustomDataPipe,
    RemoveHtmlTagsPipe,
    AlertmodalComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    ToastrModule.forRoot({
      timeOut: 5000, // Toast will be shown for 5 seconds
      positionClass: 'toast-top-right', // Position of the toast
      preventDuplicates: true,
    }),
  ],
  exports: [
    SidenavbarComponent,
    LoaderComponent,
    TableComponent,
    FormsModule,
    PaginatorComponent,
    ReactiveFormsModule,
    NgSelectModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule
  ]
})
export class SharedModule { }
