import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { URLS } from 'src/app/config/api.config';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-userrolecreate',
  templateUrl: './userrolecreate.component.html',
  styleUrls: ['./userrolecreate.component.scss']
})
export class UserrolecreateComponent implements OnInit {
  usernameList: any;
  unSubscribe$ = new Subject();
  userRoleform: FormGroup;
  RoleList: any;
  isEmailReadonly: boolean = false;
tabtybe: any;
  userRoleData: any;
  constructor(private apiservice: ApiService, private activeRoute: ActivatedRoute, public dataService: DataService, private toast: ToastrService, public router: Router, private fb: FormBuilder, private location: Location,) {
    this.userRoleform = this.fb.group({
      id: [null, Validators.required],
      emailID: [null, Validators.required],
      role: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.tabtybe = this.dataService.tabType;
    this.getparamsData();
    this.getusername();
    this.GetallRoles()
  }

    getparamsData() {
    debugger
    this.activeRoute.paramMap.pipe(takeUntil(this.unSubscribe$)).subscribe(params => {
      const encodedData = params.get('id');
      if (encodedData) {
        try {
          const decoded = JSON.parse(atob(decodeURIComponent(encodedData)));
          this.userRoleData = decoded;
        } catch (err) {
          console.error('Decoding failed:', err, encodedData);
        }
      }
      if (this.tabtybe === 'ED') {
        this.patchForm();
      } else if (this.tabtybe === 'RE') {
        this.patchForm();
        this.userRoleform.disable();
      }
    });
  }

  patchForm() {
  debugger
  if (!this.userRoleData) return;
  this.userRoleform.patchValue({
    id: this.userRoleData.id,
    emailID: this.userRoleData.emailID,
    role: this.userRoleData.role,
  });
}

  getusername() {
    const payload = {
      pageSize: 1000,
      pageNumber: 1,
      userId: 0,
      userName: '',
    }
    this.apiservice.post(URLS.userlist, payload).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.usernameList = res.response;
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }

    GetallRoles() {
    this.apiservice.post(URLS.getRolls, {}).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.RoleList = res;
      } else {
        this.toast.error(res.message, 'Error');
      }
    });
  }

onUsernameChange(userId: number) {
  debugger
  const selected = this.usernameList.find((u: any) => u.id === userId);
  if (selected) {
    this.userRoleform.patchValue({
      emailID: selected.emailId
    });
    this.isEmailReadonly = true;
  }
}

  submitForm() {
    if (this.tabtybe === 'ED') {
      this.userRoleform.get('id')?.setValue(this.userRoleData.id)
    } else {
      this.userRoleform.get('id')?.setValue(0)
    }
      this.apiservice.post(URLS.UserRoleassign, this.userRoleform.value).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res.status == true) {
        this.toast.success(res.message, 'Created Successfully');
        this.router.navigate(['/admin/userrolemapping/list'])
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }

    goBack() {
    this.location.back();
  }
}
