import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter, Subject, takeUntil } from 'rxjs';
import { URLS } from 'src/app/config/api.config';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-usercreate-form',
  templateUrl: './usercreate-form.component.html',
  styleUrls: ['./usercreate-form.component.scss']
})
export class UsercreateFormComponent implements OnInit {

  UsercreateForm: FormGroup;
  unSubscribe$ = new Subject();
  selected = 0;
  userData: any;
  url: any;
  tabtybe: any;
  developerTypes: any[] = [
    { developId: 0, description: 'None' },
    { developId: 1, description: 'Frontend Developer' },
    { developId: 2, description: 'Backend Developer' },
    { developId: 3, description: 'Manager' },
  ];

  constructor(private fb: FormBuilder, public dataService: DataService, private activeRoute: ActivatedRoute, private apiservice: ApiService, public router: Router, private toast: ToastrService, private location: Location) {
    this.UsercreateForm = this.fb.group({
      name: new FormControl('', Validators.required),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      developId: new FormControl(0, Validators.required),
    });
  }


  ngOnInit(): void {
    debugger
    this.tabtybe = this.dataService.tabType;
    this.getparamsData();
  }

  getparamsData() {
    debugger
   this.activeRoute.paramMap.pipe(takeUntil(this.unSubscribe$)).subscribe(params => {
      const encodedData = params.get('id');
      if (encodedData) {
        try {
          const decoded = JSON.parse(atob(decodeURIComponent(encodedData)));
          this.userData = decoded;
        } catch (err) {
          console.error('Decoding failed:', err, encodedData);
        }
      }
      if (this.tabtybe === 'ED') {
        this.patchForm()
      } else if (this.tabtybe === 'RE') {
        this.patchForm();
        this.UsercreateForm.disable()
      }
    });
  }

  patchForm() {
    this.UsercreateForm.patchValue({
      name: this.userData.employee_Name,
      emailId: this.userData.emailId,
      password: this.userData.password,
      developId: Number(this.userData.developId)
    });
  }

  goBack() {
    this.location.back();
  }

  submitForm() {
    const form = this.UsercreateForm.valid;
    if (form && this.tabtybe === 'ED') {
      this.updateUser();
    } else {
      this.Createuser();
    }
  }

  Createuser() {
    this.apiservice.post(URLS.createuser, this.UsercreateForm.value).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res.status == true) {
        this.toast.success(res.message, 'User Created Successfully');
        this.router.navigate(['/admin/user_create/list'])
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }

  updateUser() {
    const payload = {
      id: this.userData.id,
      employee_Name: this.UsercreateForm.get('name')?.value,
      employeeQuid: this.userData.employeeQuid,
      emailId: this.UsercreateForm.get('emailId')?.value,
      password: this.UsercreateForm.get('password')?.value,
      developId: this.UsercreateForm.get('developId')?.value,
      createOn: this.userData.createOn,
      updateOn: this.userData.updateOn
    }
    this.apiservice.post(URLS.updateuser, payload).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res.status == true) {
        this.toast.success(res.message, 'User Update Successfully');
        this.router.navigate(['/admin/user_create/list'])
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }

}
