import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { checklist } from 'src/app/config/admin-table.config';
import { URLS } from 'src/app/config/api.config';
import { IWORK } from 'src/app/interface/checklist-interface';
import { ITABLE_MODAL } from 'src/app/interface/table-interface';
import { ApiService } from 'src/app/services/api.service';
import { DependencyService } from 'src/app/services/dependency-service';

@Component({
  selector: 'app-projectcreate-list',
  templateUrl: './projectcreate-list.component.html',
  styleUrls: ['./projectcreate-list.component.scss']
})
export class ProjectcreateListComponent implements OnInit {
  checklistForm: FormGroup;
  Filterform: FormGroup;
  unSubscribe$ = new Subject();
  checkList: IWORK[] = [];
  tableModel: ITABLE_MODAL[] = checklist;
  developerTypes: any[] = [
    { developId: 1, description: 'Frontend Developer' },
    { developId: 2, description: 'Backend Developer' },
    { developId: 3, description: 'Manager' },
  ];

  constructor(public router: Router, private fb: FormBuilder, private apiservice: ApiService, private toast: ToastrService, public ds: DependencyService) {
    this.checklistForm = this.fb.group({
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

    this.Filterform = this.fb.group({
      projectId: new FormControl(null, Validators.required),
      developerType: new FormControl(null, Validators.required),
      developerName: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.getChecklistData();
  }

  submitForm() {}

  getChecklistData() {
    this.apiservice.post(URLS.checklist, this.checklistForm.value).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.checkList = res.response;
        // this.toast.success(res.message, 'Success');
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }
}
