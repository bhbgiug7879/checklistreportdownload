import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { URLS } from 'src/app/config/api.config';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data-service';
@Component({
  selector: 'app-homeprojectcrateform',
  templateUrl: './homeprojectcrateform.component.html',
  styleUrls: ['./homeprojectcrateform.component.scss']
})
export class HomeprojectcrateformComponent implements OnInit {
  usernameList: any;
  frontendUsers: any[] = [];
  backendUsers: any[] = [];
  managerUsers: any[] = [];
  unSubscribe$ = new Subject();
  Projectcreateform: FormGroup;
  tabtybe: any;
  projectlistData: any;

  constructor(private apiservice: ApiService, private activeRoute: ActivatedRoute, public dataService: DataService, private location: Location, public router: Router, private toast: ToastrService, private fb: FormBuilder) {
    this.Projectcreateform = this.fb.group({
      projectName: ['', Validators.required],
      frontendDeveloperId: [null, Validators.required],
      backendDeveloperId: [null, Validators.required],
      managerID: [null, Validators.required],
      developId: [0]
    })
  }

  ngOnInit(): void {
    this.tabtybe = this.dataService.tabType;
    this.getparamsData();
    this.getusername();
  }

    getparamsData() {
    debugger
   this.activeRoute.paramMap.pipe(takeUntil(this.unSubscribe$)).subscribe(params => {
      const encodedData = params.get('id');
      if (encodedData) {
        try {
          const decoded = JSON.parse(atob(decodeURIComponent(encodedData)));
          this.projectlistData = decoded;
        } catch (err) {
          console.error('Decoding failed:', err, encodedData);
        }
      }
      if (this.tabtybe === 'ED') {
        this.patchForm()
      } else if (this.tabtybe === 'RE') {
        this.patchForm();
        this.Projectcreateform.disable()
      }
    });
  }

    patchForm() {
    this.Projectcreateform.patchValue({
      projectName: this.projectlistData.projectsName,
      frontendDeveloperId: this.projectlistData.fD_id,
      backendDeveloperId: this.projectlistData.bD_id,
      managerID: this.projectlistData.m_id,
    });
  }

  getusername() {
    const payload = {
      pageSize: 1000,
      pageNumber: 1,
      userId: 0,
      userName: ''
    }
    this.apiservice.post(URLS.userlist, payload).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.usernameList = res.response;
        // filter by developId
        this.frontendUsers = this.usernameList.filter((u: { developId: number; }) => u.developId === 1);
        this.backendUsers = this.usernameList.filter((u: { developId: number; }) => u.developId === 2);
        this.managerUsers = this.usernameList.filter((u: { developId: number; }) => u.developId === 3);
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }

  submitForm() {
    const form = this.Projectcreateform.valid;
    if (this.tabtybe === 'ED') {
      this.Updateproject();
    } else if (form) {
    this.Createproject();
    }
  }

  Createproject() {
    this.apiservice.post(URLS.projectcreate, this.Projectcreateform.value).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res.status == true) {
        this.toast.success(res.message, 'Project Created Successfully');
        this.router.navigate(['/admin/project_create/list'])
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }

    Updateproject() {
      const payload = {
      id: this.projectlistData.id,
      projectName: this.Projectcreateform.get('projectName')?.value,
      frontendDeveloperId: this.Projectcreateform.get('frontendDeveloperId')?.value,
      backendDeveloperId: this.Projectcreateform.get('backendDeveloperId')?.value,
      managerID: this.Projectcreateform.get('managerID')?.value
      }
    this.apiservice.post(URLS.Updateproject, payload).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res.status == true) {
        this.toast.success(res.message, 'Project Update Successfully');
        this.router.navigate(['/admin/project_create/list'])
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }

  goBack() {
    this.location.back();
  }
}
