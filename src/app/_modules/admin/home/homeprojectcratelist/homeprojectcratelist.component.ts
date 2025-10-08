import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { projectlist } from 'src/app/config/admin-table.config';
import { URLS } from 'src/app/config/api.config';
import { IPROJECT } from 'src/app/interface/project-interface';
import { ITABLE_MODAL } from 'src/app/interface/table-interface';
import { ApiService } from 'src/app/services/api.service';
import { DependencyService } from 'src/app/services/dependency-service';

@Component({
  selector: 'app-homeprojectcratelist',
  templateUrl: './homeprojectcratelist.component.html',
  styleUrls: ['./homeprojectcratelist.component.scss']
})
export class HomeprojectcratelistComponent implements OnInit {
  tableModel: ITABLE_MODAL[] = projectlist;
  projectList: IPROJECT[] = [];
  projectlistForm: FormGroup;
  unSubscribe$ = new Subject();

  constructor(public router: Router, private toast: ToastrService, private fb: FormBuilder, public ds: DependencyService, private apiservice: ApiService) {
    this.projectlistForm = this.fb.group({
      page: this.fb.group({
        pageNumber: [1],
        pageSize: [10],
        length: [0]
      }),
      dateRange: this.fb.group({
        fromDate: [0],
        toDate: [0]
      }),
      projectID: [0],
      projectName: ['']
    });
  }

  ngOnInit(): void {
    this.getprojectlistData();
  }

  getprojectlistData() {
    this.apiservice.post(URLS.projectList, this.projectlistForm.value).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.projectList = res.response;
        // this.toast.success(res.message, 'Success');
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }

  deletecheckList(id: string[]) {
    this.apiservice.post(`${URLS.Deleteproject}/${id}`, {}).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.getprojectlistData();
        this.toast.success(res.message, 'Deleted Successfully');
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }
}
